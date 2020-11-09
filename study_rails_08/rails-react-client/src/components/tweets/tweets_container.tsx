import React, { useState } from 'react'
import { requestUpdate, requestDelete } from "../../utils/apis/rest"

import TweetInterface from '../../model/tweet_interface'
import ViewTweet from './view_tweet'
import CreateForm from './create_form'
import UserInformation from '../common/user_information'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type TweetProps = {
  tweet: TweetInterface
}
const TweetContainer: React.FC<TweetProps> = props => {
  const tweet = props.tweet
  const [isEditMode, setIsEditMode] = useState<Boolean>(false)
  const [updatingSentence, setUpdatingSentence] = useState<string>(tweet.sentence)              
  return (
    <Col>
      <ViewTweet
        tweet={tweet}
        handleUpdate={() => requestUpdate(tweet.id, updatingSentence)}
        handleDelete={() => requestDelete(tweet.id)}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        updatingSentence={updatingSentence}
        setUpdatingSentence={setUpdatingSentence}
      />
    </Col>
  )
}

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
              return <TweetContainer tweet={element}/>
            })}
          </Row>
        </Container>
      );
    }
}

export default TweetsContainer