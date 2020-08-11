import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"

const Wrapper = styled.div`
  display: flex;
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
const Body = styled.div`
  width: 100%;
`;

const CreateForm = () => {
    return (
        <div>
            <div>FORM</div>
            <button>SUBMIT</button>
        </div>
    )
}

const CreateTweet = () => {
    return (
        <Wrapper>
            <Header>
                <Title>Create Tweet</Title>
            </Header>
            <Body>
                <CreateForm></CreateForm>
            </Body>
        </Wrapper>
    )
}

export default CreateTweet;
