import React from 'react'
import TweetInterface from '../../model/tweet_interface'
import ViewTweet from './view_tweet'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type TweetsProps = {
    tweets: TweetInterface[]
}

const TweetsContainer: React.FC<TweetsProps> = props => {
    if (props.tweets.length === 0) {
      return (
        <div>NODATA</div>
      )
    } else {
      return (
        <Row xs={1} md={2}>
          {props.tweets.map((element, index) => {
            return (
              <Col>
                <ViewTweet tweet={element} />
              </Col>
            )
          })}        
        </Row>
      );
    }
}

export default TweetsContainer