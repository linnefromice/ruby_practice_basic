import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ErrorModal from '../../components/ErrorModal';

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
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false)
  const [formName, setFormName] = useState<string>("")
  const [formEmail, setFormEmail] = useState<string>("")
  const [formPassword, setFormPassword] = useState<string>("")
  const [errors, setErrors] = useState<string[]>([])

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setFormName(e.target.value)
  }

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormEmail(e.target.value)
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormPassword(e.target.value)
  }

  function signUp() {
    if (formEmail === "" || formPassword === "") {
      return;
    }

    axios.post('http://localhost:3001/sign_up', {
      name: formName,
      email: formEmail,
      password: formPassword
    }).then(res => {
      console.log(res)
      setIsSignedUp(true)
    }).catch(err => {
      console.log(err.response)
      setErrors(err.response.data.errors)
    });
  }

  const Error = () => {
    if (errors.length !== 0) {
      return (
        <ErrorModal errors={errors} setErrors={setErrors} />
      )
    } else {
      return null;
    }
  }

  if (isSignedUp) {
    return (
      <FormWrapper>
        <Row>
          Thank you!
        </Row>
        <Row>
          Created new account! Please login!
        </Row>
      </FormWrapper>
    )  
  } else {
    return (
      <FormWrapper>
        <Error/>
        <Row>
          <Label>Name</Label>
          <Input
            placeholder="Input your name"
            value={formName}
            onChange={onChangeName}
          />
        </Row>
        <Row>
          <Label>Email</Label>
          <Input
            placeholder="Input your email"
            value={formEmail}
            onChange={onChangeEmail}
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
          <SubmitButton onClick={signUp}>SIGN UP</SubmitButton>
        </Row>
      </FormWrapper>
    )
  }
}

const SignUp: React.FC = () => {
    return (
     <Wrapper>
        <Header>
          <Title>Sign Up</Title>
        </Header>
        <Form/>
      </Wrapper>  
    );
}

export default SignUp;