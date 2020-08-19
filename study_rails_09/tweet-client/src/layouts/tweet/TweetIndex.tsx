import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

import { UserContext } from '../../global/contexts'
import CreateTweet from '../../components/tweet/CreateTweet'

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

interface TweetListProp {
  isOnlyOwn: boolean
}
const TweetList = (prop: TweetListProp) => {
  const { isLogin, user } = useContext(UserContext);
  const [tweets, setTweets] = useState<TweetInterface[]>([])
  const BASE_URL = 'http://localhost:3001/tweets'

  const fetchTweets = () => {
    // ログイン済 かつ 自Tweetのみチェック を入れている場合
    const URL = isLogin && prop.isOnlyOwn ? `${BASE_URL}?user_id=${user.id}` : BASE_URL
    axios.get(URL)
    .then(result => {
      setTweets(result.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTweets()
  }, [prop.isOnlyOwn])

  if (tweets.length !== 0) {
    return (
      <div>
        {
          tweets.map((data:TweetInterface, index:number) => {
            return (
              <Tweet
                key={`Tweet.${index}`}
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
                key={`Tweet.${index}`}
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
  width: 80%;
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
  isOnlyOwn: boolean
  setIsOnlyOwn: React.Dispatch<React.SetStateAction<boolean>>
}
const FocusedTweetToggleButton = (prop: FocusedTweetToggleButtonProp) => {
  return (
    <ToggleButtonWrapper>
      <ToggleButtonMessage>Only your tweets?</ToggleButtonMessage>
      { prop.isOnlyOwn ? <CheckedButton onClick={() => prop.setIsOnlyOwn(false)}/> : <UncheckedButton onClick={() => prop.setIsOnlyOwn(true)}/> }
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
  const [isOnlyOwn, setIsOnlyOwn] = useState<boolean>(false)
  const { isLogin } = useContext(UserContext);

  return (
    <TopWrapper>
      <Header>
        <Title>TWEET</Title>
      </Header>
      <Body>
        { isLogin ?
          <div>
            <FocusedTweetToggleButton isOnlyOwn={isOnlyOwn} setIsOnlyOwn={setIsOnlyOwn}/>
            <CreateTweet/>
          </div>
          : null
        }
        <TweetList isOnlyOwn={isOnlyOwn} />
      </Body>
    </TopWrapper>
  )
}

export default TweetIndex;