import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 30vw;
  background-color: black;
  color: white;
`;
const RightContainer = styled.div`
  height: 100vh;
  width: 70vw;
  background-color: white;
  color: black;
`;


function App() {
  return (
    <Wrapper>
      <LeftContainer>
        Left
      </LeftContainer>
      <RightContainer>
        Right
      </RightContainer>
    </Wrapper>
  );
}

export default App;
