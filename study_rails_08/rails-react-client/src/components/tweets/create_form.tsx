import React, { useState } from "react"
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateForm: React.FC = () => {
    const [sentence, setSentence] = useState("")

    function onChangeSentence(e: React.ChangeEvent<HTMLInputElement>) {
        setSentence(e.target.value)
    }

    function createTweet() {
        if (sentence === "") return
        axios.post('http://localhost:3001/tweets',
            {
                sentence: sentence,
                user_name: "unknown"
            }
        )
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Form style={{margin: "1vh 3vw"}}>
            <Form.Group controlId="formBasicText">
                <Form.Label>Your Tweet!!</Form.Label>
                <Form.Control
                    type="text"
                    value={sentence}
                    placeholder="Enter Tweet!!"
                    onChange={onChangeSentence}
                />
            </Form.Group>
            <Button type="submit" onClick={createTweet}>つぶやく</Button>
        </Form>
    )
}

export default CreateForm