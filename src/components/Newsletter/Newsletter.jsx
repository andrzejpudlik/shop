import { Send } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #E3E6F3;
  display: flex;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: '50px' })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: white;
  border: 2px solid #088178;
  border-radius: 5px;
  ${mobile({ width: '80%' })}
`;

const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #088178;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products and special offers</Desc>
      <InputContainer>
        <Input placeholder="Your email address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;