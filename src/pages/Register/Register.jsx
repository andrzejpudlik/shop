import styled from 'styled-components';

import register from '../../assets/images/register.jpg';
import { smallScreen, mobile } from '../../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${register})
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #E3E6F3;
  border-radius: 5px;
  ${smallScreen({ width: '55%' })}
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 2px solid #088178;
  border-radius: 5px;
  background-color: #E3E6F3;
  &:focus {
    outline: none;
  }
  ${mobile({ width: '100%' })};
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    font-weight: 800;
  }
  ${smallScreen({ padding: '10px 15px' })}
  ${mobile({ padding: '10px 5px', width: '60%' })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;