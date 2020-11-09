import React, { useState } from "react"
import dayjs from 'dayjs'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { BsPencilSquare } from "react-icons/bs"
import { FcCancel } from "react-icons/fc";

import { TweetInterface } from "../../model/types"
import { requestUpdate, requestDelete } from "../../utils/apis/rest"

type TweetProps = {
    tweet: TweetInterface,
    handleUpdate: () => void,
    handleDelete: () => void,
    isEditMode: Boolean,
    setIsEditMode: React.Dispatch<React.SetStateAction<Boolean>>,
    updatingSentence: string,
    setUpdatingSentence: React.Dispatch<React.SetStateAction<string>>
}
export const ViewTweet: React.FC<TweetProps> = props => {
  const { tweet, handleUpdate, handleDelete, isEditMode, setIsEditMode, updatingSentence, setUpdatingSentence } = props

  return (
    <Card key={`tweet.${tweet.id}`} className="text-center" style={{margin: "1vh 1vw"}}>
      <Card.Header>{tweet.user_name}</Card.Header>
      <Card.Body>
        {isEditMode
        ? <Form>
            <Form.Control defaultValue={updatingSentence} onChange={e => setUpdatingSentence(e.target.value)}/>
          </Form>
        : 
          <Card.Text>{tweet.sentence}</Card.Text>
        }
        <span className="mx-1">
          {isEditMode
          ? <FcCancel onClick={() => setIsEditMode(false)}/>
          : <BsPencilSquare onClick={() => setIsEditMode(true)}/>}
        </span>
        <Button className="mx-1" variant="primary" onClick={handleUpdate} disabled={!isEditMode}>MODIFY</Button>
        <Button className="mx-1" variant="warning" onClick={handleDelete}>DELETE</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{dayjs(tweet.created_at).format('YYYY/MM/DD HH:mm:ss.SSS')}</Card.Footer>
    </Card>
  )
}
