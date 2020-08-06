import React from 'react';
import styled from 'styled-components';
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


function App() {
  return (
    <Wrapper>
      <DrawerWrapper>
        <Drawer />
      </DrawerWrapper>
      <MainContainer>
        Right
      </MainContainer>
    </Wrapper>
  );
}

export default App;
