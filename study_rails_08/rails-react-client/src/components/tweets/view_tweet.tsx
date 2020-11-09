import React, { useState } from "react"
import dayjs from 'dayjs'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { BsPencilSquare } from "react-icons/bs"
import { FcCancel } from "react-icons/fc";

import TweetInterface from "../../model/tweet_interface"
import { requestUpdate, requestDelete } from "../../utils/apis/rest"

type TweetProps = {
    tweet: TweetInterface,
    handleUpdate: Function,
    handleDelete: Function,
    isEditMode: Boolean,
    setIsEditMode: React.Dispatch<React.SetStateAction<Boolean>>,
    updatingSentence: string,
    setUpdatingSentence: React.Dispatch<React.SetStateAction<string>>
}
const ViewTweet: React.FC<TweetProps> = props => {
  const element = props.tweet
  const [isEditMode, setIsEditMode] = useState<Boolean>(false)
  const [updatingSentence, setUpdatingSentence] = useState<string>(element.sentence)

  return (
    <Card key={`tweet.${element.id}`} className="text-center" style={{margin: "1vh 1vw"}}>
      <Card.Header>{element.user_name}</Card.Header>
      <Card.Body>
        {isEditMode
        ? <Form>
            <Form.Control defaultValue={updatingSentence} onChange={e => setUpdatingSentence(e.target.value)}/>
          </Form>
        : 
          <Card.Text>{element.sentence}</Card.Text>
        }
        <span className="mx-1">
          {isEditMode
          ? <FcCancel onClick={() => setIsEditMode(false)}/>
          : <BsPencilSquare onClick={() => setIsEditMode(true)}/>}
        </span>
        <Button className="mx-1" variant="primary" onClick={() => requestUpdate(element.id, updatingSentence)} disabled={!isEditMode}>MODIFY</Button>
        <Button className="mx-1" variant="warning" onClick={() => requestDelete(element.id)}>DELETE</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{dayjs(element.created_at).format('YYYY/MM/DD HH:mm:ss.SSS')}</Card.Footer>
    </Card>
  )
}

export default ViewTweet