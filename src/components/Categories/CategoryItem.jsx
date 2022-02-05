import styled from 'styled-components';

import { mobile } from '../../responsive';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '25vh' })}
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #E3E6F3;
  color: black;
  font-weight: 800;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  cursor: pointer;
  &:hover ${Image}  {
    opacity: .55;
  }
  &:hover ${Button}  {
    background-color: #088178;
    color: #fff;
  }
`;

const Info = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;