import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { UserContext } from './global/contexts';
import Drawer from './layouts/Drawer';
import TweetIndex from './layouts/tweet/TweetIndex';
import Login from './layouts/auth/Login';

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
      <Route path="/video">
        <p>VIDEO SCREEN</p>
      </Route>
      <Route path="/news">
        <p>NEWS SCREEN</p>
      </Route>
      <Route path="/music">
        <p>MUSIC SCREEN</p>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  )
};

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [username, setUsername] = useState("")

  return (
    <UserContext.Provider value={{isLogin, setIsLogin, username, setUsername}}>
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
