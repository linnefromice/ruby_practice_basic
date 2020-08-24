import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import TweetComponent from "../../components/tweet/TweetComponent"

const TopWrapper = styled.div`
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
const TweetDetail = (prop:any) => {
    return (
        <TopWrapper>
            <Header>
                <Title>Detail</Title>
            </Header>
            <Body>
            <TweetComponent
                id={prop.match.params.id}
                created_at={`2020-07-28 00:00:00.000`}
                name={`User No.${prop.match.params.id}`}
                sentence={"Happy Birthday!!!"}
            />
            </Body>
        </TopWrapper>
    )
}

export default TweetDetail