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
import TweetDetail from './layouts/tweet/TweetDetail';
import UserIndex from './layouts/user/UserIndex';
import ProfileIndex from './layouts/profile/ProfileIndex';
import SignIn from './layouts/auth/SignIn';
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
      <Route exact path="/tweet/list">
        <TweetIndex/>
      </Route>
      <Route path="/tweet/detail/:id" component={TweetDetail}/>
      <Route path="/user/list">
        <UserIndex/>
      </Route>
      <Route path="/profile">
        <ProfileIndex/>
      </Route>
      <Route path="/sign_in">
        <SignIn/>
      </Route>
      <Route path="/sign_up">
        <SignUp/>
      </Route>
      <Route path="/about">
        <div>About Page</div>
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
