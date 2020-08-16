import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"

interface TweetInterface {
  sentence:string,
  username:string,
  created_at:string,
}

const dummyDatas = [
  {
    sentence: "バルサまた負けた...デンベレ帰ってきてー",
    username: "恋する凡人",
    created_at: "2020.08.01",
  },
  {
    sentence: "最初のツイート。",
    username: "恋する凡人",
    created_at: "2020.07.29",
  },
  {
    sentence: "Welcome! Everyone is waiting for your first tweet!",
    username: "Operator",
    created_at: "2020.07.28",
  }
]

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

const TweetList = () => {
  const [tweets, setTweets] = useState<TweetInterface[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/tweets')
    .then(result => {
      setTweets(result.data)
    })
    .catch(err => console.log(err))
  }, [])

  if (tweets.length !== 0) {
    console.log(tweets)
    return (
      <div>
        {
          tweets.map((data:TweetInterface, index:number) => {
            return (
              <Tweet
                key={index}
                created_at={data.created_at.replace('T', ' ').replace('Z', '')}
                username={data.username}
                sentence={data.sentence}
              />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div>
        {
          dummyDatas.map((data:TweetInterface, index:number) => {
            return (
              <Tweet
                key={index}
                created_at={data.created_at}
                username={data.username}
                sentence={data.sentence}
              />
            )
          })
        }
      </div>
    )
  }
}

const Tweet = (prop: TweetInterface) => {
  const Wrapper = styled.div`
    margin: 3vh auto;
    width: 80%
  `;
  const DateWrapper = styled.div`
    margin: 0.2vh 0;
    font-size: 1.25rem;
    font-weight: bold;
  `;
  const UsernameWrapper = styled.div`
    margin: 0.2vh 0;
    font-size: 1.25rem;
    color: #646464;
    text-decoration: underline;
  `;
  const SentenceWrapper = styled.div`
    margin: 0.2vh 0;
    color: #646464;
  `;
  const Row = styled.div`
    margin: 0.2vh 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  `;
  const BottomLine = styled.hr`
    width: 85%;
    height: 1vh;
    border: none;
    border-top: 0.05rem solid #646464;
  `;
  const LinkTitle = styled.div`
    width: 10%;
    text-align: center;
    font-weight: bold;
  `;
  const LinkIcon = styled.div`
    width: 5%;
    color: #646464;
  `;

  return (
    <Wrapper>
      <DateWrapper>{prop.created_at}</DateWrapper>
      <UsernameWrapper>{prop.username}</UsernameWrapper>
      <SentenceWrapper>{prop.sentence}</SentenceWrapper>
      <Row>
        <BottomLine/>
        <LinkTitle>Read More</LinkTitle>
        <LinkIcon>></LinkIcon>
      </Row>
    </Wrapper>
  )
}

const TweetIndex = () => {
  return (
    <Wrapper>
      <Header>
        <Title>TWEET</Title>
      </Header>
      <Body>
        <TweetList/>
      </Body>
    </Wrapper>
  )
}

export default TweetIndex;