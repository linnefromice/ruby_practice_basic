import React, { useState, useContext } from 'react';
import axios from "axios"

import { UserContext } from '../../global/contexts';
import { Wrapper, Header, Title, FormWrapper, Row, Label, Input, SubmitButton } from '../../components/auth/AuthCommonComponents';
import ErrorModal from '../../components/common/ErrorModal';

const INITIAL_ACCOUNT_EMAIL = 'moguo@mognet.com' // for debug
const INITIAL_ACCOUNT_PASSWORD = 'password' // for debug

const Form = () => {
  const {isLogin, setIsLogin, user, setUser} = useContext(UserContext)
  const [formEmail, setFormEmail] = useState<string>(INITIAL_ACCOUNT_EMAIL)
  const [formPassword, setFormPassword] = useState<string>(INITIAL_ACCOUNT_PASSWORD)
  const [errors, setErrors] = useState<string[]>([])

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormEmail(e.target.value)
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormPassword(e.target.value)
  }

  function signIn() {
    if (formEmail === "" || formPassword === "") {
      return;
    }

    axios.post('http://localhost:3001/sign_in', {
      email: formEmail,
      password: formPassword
    }).then(res => {
      console.log(res)
      setIsLogin(true)
      setUser({
        id: res.data.id,
        email: res.data.email,
        name: res.data.name
      })
    }).catch(err => {
      console.log(err.response)
      setIsLogin(false)
      setUser(null)
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

  if (isLogin) {
    return (
      <FormWrapper>
        <Row>
          You're already login...
        </Row>
        <Row>
          <Label>Username</Label>
          <Label>{user.name}</Label>
        </Row>
      </FormWrapper>
    );
  } else {
    return (
      <FormWrapper>
        <Error/>
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
          <SubmitButton onClick={signIn}>Sign In</SubmitButton>
        </Row>
      </FormWrapper>
    );  
  }

}

const SignIn: React.FC = () => {
  return (
     <Wrapper>
      <Header>
        <Title>Sign In</Title>
      </Header>
      <Form/>
    </Wrapper>
  );
}

export default SignIn;