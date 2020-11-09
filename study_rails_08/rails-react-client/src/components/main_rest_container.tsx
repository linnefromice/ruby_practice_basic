import React, { useState, useEffect } from 'react'
import { UserContext } from '../global/contexts'

import axios from 'axios'
import { TweetInterface } from '../model/types'

import { TweetContainer } from './tweets/tweet_container'
import { CreateForm } from './tweets/create_form'
import { UserInformation } from './common/user_information'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type TweetsProps = {
  tweets: TweetInterface[]
}
const TweetsContainer: React.FC<TweetsProps> = props => {
  if (props.tweets.length === 0) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <CreateForm />
          </Col>
          <Col>
            <UserInformation />
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container fluid>
        <Row>
          <Col>
            <CreateForm />
          </Col>
          <Col>
            <UserInformation />
          </Col>
        </Row>
        <Row xs={1} md={2}>
          {props.tweets.map((element, index) => {
            return (
              <Col>
                <TweetContainer tweet={element}/>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}

export const MainRestContainer: React.FC = () => {
  const [username, setUsername] = useState("")
  const [tweets, setTweets] = useState<TweetInterface[]>([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/tweets')
      .then(results => {
        setTweets(results.data)
      })
      .catch(error => console.log(error))
  }, []);

  if (tweets.length === 0) {
    return (
      <div>NODATA</div>
    )
  } else {
    return (
      <UserContext.Provider value={{username, setUsername}}>
        <h4>RestAPI Area</h4>
        <TweetsContainer tweets={tweets}/>
      </UserContext.Provider>
    );
  }
}
