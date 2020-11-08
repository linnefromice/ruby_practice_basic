import React from "react"
import axios from 'axios'
import dayjs from 'dayjs'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import TweetInterface from "../../model/tweet_interface"

type TweetProps = {
    tweet: TweetInterface
}

const ViewTweet: React.FC<TweetProps> = props => {
  const element = props.tweet

  function handleDelete(tweet_id: number) {
    axios.delete(`http://localhost:3001/tweets`,
      {
        params: {
          id: tweet_id
        }
      }
    )
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Card key={`tweet.${element.id}`} className="text-center" style={{margin: "1vh 1vw"}}>
      <Card.Header>{element.user_name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {element.sentence}
        </Card.Text>
        <Button variant="primary">MODIFY</Button>
        <Button variant="warning" onClick={() => handleDelete(element.id)}>DELETE</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{dayjs(element.created_at).format('YYYY/MM/DD HH:mm:ss.SSS')}</Card.Footer>
    </Card>
  )
}

export default ViewTweet