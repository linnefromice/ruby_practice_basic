import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../global/contexts';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #646464;
  font-size: 3.0rem;
`;
const FormWrapper = styled.div`
  margin: 3vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Row = styled.div`
  margin: 1vh 0;
  height: 5vh;
  display: flex;
  flex-direction: row;
`;
const Label = styled.div`
  margin: 0 1vw;
  width: 5vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin: 0 1vw;
  width: 40vw;
  height: 100%;
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px #ccc;
`;
const SubmitButton = styled.div`
  width: 10vw;
  border: 1px solid #646464;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #646464;
  }
`;

const Form = () => {
  const {isLogin, setIsLogin, setUsername} = useContext(UserContext)
  const [formUsername, setFormUsername] = useState<string>("")
  const [formPassword, setFormPassword] = useState<string>("")

  function onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setFormUsername(e.target.value)
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormPassword(e.target.value)
  }

  function login() {
    if (formUsername !== "" &&formPassword !== "" ) {
      setIsLogin(true)
      setUsername(formUsername)
    }
  }

  if (isLogin) {
    return (
      <FormWrapper>
        You're already login... 
      </FormWrapper>
    );
  } else {
    return (
      <FormWrapper>
        <Row>
          <Label>Email</Label>
          <Input
            placeholder="Input your username"
            value={formUsername}
            onChange={onChangeUsername}
          />
        </Row>
        <Row>
          <Label>Password</Label>
          <Input
            placeholder="Input your password"
            value={formPassword}
            onChange={onChangePassword}
          />
        </Row>
        <Row>
          <SubmitButton onClick={login}>LOGIN</SubmitButton>
        </Row>
      </FormWrapper>
    );  
  }

}

const Login: React.FC = () => {
  return (
     <Wrapper>
      <Header>
        <Title>LOGIN</Title>
      </Header>
      <Form/>
    </Wrapper>
  );
}

export default Login;