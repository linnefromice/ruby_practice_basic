import React, { useState, useContext } from "react"
import { UserContext } from '../../global/contexts'

import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateForm: React.FC = () => {
    const { username } = useContext(UserContext)
    const [sentence, setSentence] = useState("")

    function onChangeSentence(e: React.ChangeEvent<HTMLInputElement>) {
        setSentence(e.target.value)
    }

    function createTweet() {
        const user_name = (!username) ? "unknown" : username

        if (sentence === "") return
        axios.post('http://localhost:3001/tweets',
            {
                sentence: sentence,
                user_name: user_name
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