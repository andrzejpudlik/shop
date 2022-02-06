import styled from 'styled-components';

import login from '../../assets/images/login_register.jpeg';
import { smallScreen, mobile } from '../../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${login});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #088178;
  border-radius: 5px;
  background-color: #E3E6F3;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-weight: 500;
  background-color: #088178;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    font-weight: 800;
  }
  ${smallScreen({ padding: '10px 15px' })}
  ${mobile({ padding: '10px 5px', width: '60%' })}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #088178;
    font-weight: 800;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;