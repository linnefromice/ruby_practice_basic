import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Row = styled.div`
  margin: 1vh 0;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Input = styled.input`
  margin: 0 0.5vw;
  width: 40vw;
  height: 100%;
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px #ccc;
`;
const SubmitButton = styled.div`
  margin: 0 0.5vw;
  width: 10vw;
  height: 100%;
  border: 1px solid #00BFFF;
  border-radius: 4px;
  background-color: #87CEFA;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid #646464;
    background-color: #646464;
  }
`;

const CreateTweet = () => {
    return (
        <Wrapper>
          <Row>
            <Input/>
            <SubmitButton>New Tweet!</SubmitButton>
          </Row>
        </Wrapper>
    )
}

export default CreateTweet;
