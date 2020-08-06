import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Drawer from './layouts/Drawer';


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
      <Route path="/video">
        <p>VIDEO SCREEN</p>
      </Route>
      <Route path="/news">
        <p>NEWS SCREEN</p>
      </Route>
      <Route path="/music">
        <p>MUSIC SCREEN</p>
      </Route>
      <Route path="/more">
        <p>MORE SCREEN</p>
      </Route>
    </Switch>
  )
};

function App() {
  return (
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
  );
}

export default App;
