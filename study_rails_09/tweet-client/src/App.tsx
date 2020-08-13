import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import UserInterface from './models/UserInterface';
import { UserContext } from './global/contexts';
import Drawer from './layouts/Drawer';
import TweetIndex from './layouts/tweet/TweetIndex';
import CreateTweet from './layouts/tweet/CreateTweet';
import Login from './layouts/auth/Login';
import SignUp from './layouts/auth/SignUp';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;
const DrawerWrapper = styled.div`
  height: 100vh;
  width: 15%;
  background-color: black;
  color: white;
`;
const MainContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: white;
  color: black;
`;

const Main = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <p>HOME SCREEN</p>
      </Route>
      <Route path="/tweet/list">
        <TweetIndex/>
      </Route>
      <Route path="/tweet/new">
        <CreateTweet/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/sign_up">
        <SignUp/>
      </Route>
    </Switch>
  )
};

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState<UserInterface>({ id: 0, email: "", name: "" })

  return (
    <UserContext.Provider value={{isLogin, setIsLogin, user, setUser}}>
      <Router>
        <Wrapper>
          <DrawerWrapper>
            <Drawer />
          </DrawerWrapper>
          <MainContainer>
            <Main/>
          </MainContainer>
        </Wrapper>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
