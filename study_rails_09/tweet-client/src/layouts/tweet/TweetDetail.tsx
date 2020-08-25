import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import TweetInterface from '../../models/TweetInterface'
import ErrorModal from '../../components/common/ErrorModal'
import TweetComponent from "../../components/tweet/TweetComponent"

const BodyWrapper = styled.div`
    width: 100%;
`;
const MainTweetArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TweetComponentWrapper = styled.div`
    width: 90%;
    margin: 1vh 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonsArea = styled.div`
    width: 100%;
    margin: 1vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const ModifyButton = styled.div`
    width: 40%;
    margin: 0 5%;
    height: 3vh;
    border-radius: 6vw;
    color: white;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DeleteButton = styled.div`
    width: 40%;
    margin: 0 5%;
    height: 3vh;
    border-radius: 6vw;
    color: white;
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BodyContent = (prop:TweetInterface) => {

    function deleteTweet() {
        axios.delete(`http://localhost:3001/tweets/${prop.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <BodyWrapper>
            <MainTweetArea>
                <TweetComponentWrapper>
                    <TweetComponent
                        id={prop.id}
                        created_at={prop.created_at}
                        name={prop.name}
                        sentence={prop.sentence}
                    />
                </TweetComponentWrapper>
                <ButtonsArea>
                    <ModifyButton>MODIFY</ModifyButton>
                    <DeleteButton onClick={deleteTweet}>DELETE</DeleteButton>
                </ButtonsArea>
            </MainTweetArea>
        </BodyWrapper>
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
const TweetDetail = (prop:any) => {
    const tweet_id = prop.match.params.id
    const [tweet, setTweet] = useState<TweetInterface|undefined>(undefined)
    const [errors, setErrors] = useState<string[]>([])
    const URL = `http://localhost:3001/tweets/detail/${tweet_id}`

    const fetchTweet = () => {
      axios.get(URL)
      .then(result => {
        setTweet(result.data)
      })
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
      fetchTweet()
    }, [])

    const Error = () => {
        if (errors.length !== 0) {
            return (
                <ErrorModal errors={errors} setErrors={setErrors} />
            )
        } else {
            return null;
        }
    }

    const Body = tweet !== undefined ? <BodyContent
        id={tweet_id}
        created_at={tweet.created_at.replace('T', ' ').replace('Z', '')}
        name={tweet.name}
        sentence={tweet.sentence}
    /> : <Error/>

    return (
        <TopWrapper>
            <Header>
                <Title>Detail</Title>
            </Header>
            {Body}
        </TopWrapper>
    )
}

export default TweetDetail