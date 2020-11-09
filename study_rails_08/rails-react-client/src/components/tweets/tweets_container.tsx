import React from 'react'
import TweetInterface from '../../model/tweet_interface'
import TweetContainer from './tweet_container'
import CreateForm from './create_form'
import UserInformation from '../common/user_information'
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

export default TweetsContainer