import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sliderItems } from '../../constants/images';

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) => props.active ? 'rgb(32, 32, 32)' : '#f1f1f1'};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick('right');
    }, 5000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  const handleClick = direction => {
    if (direction === 'right') {
      if(slideIndex !== sliderItems.length - 1){
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === sliderItems.length - 1){
        setSlideIndex(0)
      }
    } else {
      if(slideIndex !== 0){
        setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 0){
        setSlideIndex(sliderItems.length - 1)
      }
    }
  };

  const moveDot = index => {
    setSlideIndex(index)
  } 

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
      <Dots>
        {Array.from({length: 5}).map((item, index) => (
          <Dot key={index}
            onClick={() => moveDot(index)}
            active={slideIndex === index}
          />
        ))}
      </Dots>
    </Container>
  );
};

export default Slider;