import React, { useState, useContext } from "react"
import { UserContext } from '../../global/contexts'
import { requestCreate } from "../../utils/apis/rest"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const CreateForm: React.FC = () => {
    const { username } = useContext(UserContext)
    const [sentence, setSentence] = useState("")

    function onChangeSentence(e: React.ChangeEvent<HTMLInputElement>) {
        setSentence(e.target.value)
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
            <Button type="submit" onClick={() => requestCreate(username, sentence)}>つぶやく</Button>
        </Form>
    )
}
