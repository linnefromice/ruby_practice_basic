import React from "react";
import styled from "styled-components";

interface TweetInterface {
  sentence:string,
  username:string,
  created_at:string,
}

const datas = [
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
  const _datas = datas; // 本来はaxios利用
  return (
    <div>
      {
        _datas.map((data:TweetInterface, index:number) => {
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

const Tweet = (prop: TweetInterface) => {
  return (
    <div>
      {prop.created_at}<br/>
      {prop.username}<br/>
      {prop.sentence}<br/>
    </div>
  )
}

const TweetIndex = () => {
  datas.forEach((data:TweetInterface) => console.log(data))

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