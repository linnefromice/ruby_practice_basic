import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const UserInformation: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("")

    if (!isLogin) {
        return (
            <InputGroup>
                <Form.Control
                    placeholder="Input your username"
                />
                <InputGroup.Append>
                    <Button
                        variant="primary"
                        onClick={() => setIsLogin(true)}
                    >LOGIN</Button>
                </InputGroup.Append>
          </InputGroup>
        )
    } else {
        return (
            <InputGroup>
                <Form.Control
                    readOnly
                    placeholder="USERNAME"                
                />
                <InputGroup.Append>
                    <Button
                        variant="warning"
                        onClick={() => setIsLogin(false)}
                    >LOGOUT</Button>
                </InputGroup.Append>
          </InputGroup>
        )
    }
}

export default UserInformation