import React from 'react'
import TweetInterface from '../../model/tweet_interface'
import ViewTweet from './view_tweet'
import CreateForm from './create_form'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type TweetsProps = {
    tweets: TweetInterface[]
}

const TweetsContainer: React.FC<TweetsProps> = props => {
    if (props.tweets.length === 0) {
      return (
        <div>
          <Row>
            <CreateForm />
          </Row>
        </div>
      )
    } else {
      return (
        <div>
          <Row>
            <CreateForm />
          </Row>
          <Row xs={1} md={2}>
            {props.tweets.map((element, index) => {
              return (
                <Col>
                  <ViewTweet tweet={element} />
                </Col>
              )
            })}
          </Row>
        </div>
      );
    }
}

export default TweetsContainer