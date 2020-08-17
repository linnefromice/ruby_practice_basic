import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios"

import { UserContext } from '../../global/contexts';

interface TweetInterface {
  sentence:string,
  name:string,
  created_at:string,
}

const dummyDatas = [
  {
    sentence: "バルサまた負けた...デンベレ帰ってきてー",
    name: "恋する凡人",
    created_at: "2020.08.01",
  },
  {
    sentence: "最初のツイート。",
    name: "恋する凡人",
    created_at: "2020.07.29",
  },
  {
    sentence: "Welcome! Everyone is waiting for your first tweet!",
    name: "Operator",
    created_at: "2020.07.28",
  }
]

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
    return (
      <div>
        {
          tweets.map((data:TweetInterface, index:number) => {
            return (
              <Tweet
                key={index}
                created_at={data.created_at.replace('T', ' ').replace('Z', '')}
                name={data.name}
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
                name={data.name}
                sentence={data.sentence}
              />
            )
          })
        }
      </div>
    )
  }
}

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
const Tweet = (prop: TweetInterface) => {
  return (
    <Wrapper>
      <DateWrapper>{prop.created_at}</DateWrapper>
      <UsernameWrapper>{prop.name}</UsernameWrapper>
      <SentenceWrapper>{prop.sentence}</SentenceWrapper>
      <Row>
        <BottomLine/>
        <LinkTitle>Read More</LinkTitle>
        <LinkIcon>></LinkIcon>
      </Row>
    </Wrapper>
  )
}

const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ToggleButtonMessage = styled.div`
  margin: 2vh 1vw;
`;
const CheckedButton = styled.div`
  margin: 2vh 1vw;
  height: 3vh;
  width: 6vw;
  border-radius: 6vw;
  background: linear-gradient(90deg, lightgreen 0%, lightgreen 50%, gray 50%, gray 100%);
  box-shadow: 2px 2px lightgray;
`
const UncheckedButton = styled.div`
  margin: 2vh 1vw;
  height: 3vh;
  width: 6vw;
  border-radius: 6vw;
  background: linear-gradient(90deg, gray 0%, gray 50%, lightcoral 50%, lightcoral 100%);
  box-shadow: 2px 2px lightgray;
`;
interface FocusedTweetToggleButtonProp {
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}
const FocusedTweetToggleButton = (prop: FocusedTweetToggleButtonProp) => {
  return (
    <ToggleButtonWrapper>
      <ToggleButtonMessage>Only your tweets?</ToggleButtonMessage>
      { prop.checked ? <CheckedButton onClick={() => prop.setChecked(false)}/> : <UncheckedButton onClick={() => prop.setChecked(true)}/> }
    </ToggleButtonWrapper>
  )
}

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
const TweetIndex = () => {
  const { isLogin, user } = useContext(UserContext);
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <TopWrapper>
      <Header>
        <Title>TWEET</Title>
      </Header>
      <Body>
        <FocusedTweetToggleButton checked={checked} setChecked={setChecked}/>
        <TweetList/>
      </Body>
    </TopWrapper>
  )
}

export default TweetIndex;