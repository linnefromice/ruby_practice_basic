import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const UserInformation: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("")

    function onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function logout() {
        setUsername("")
        setIsLogin(false)
    }

    if (!isLogin) {
        return (
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Input your username"
                    value={username}
                    onChange={onChangeUsername}
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
                        value={username}
                        onClick={logout}
                    >LOGOUT</Button>
                </InputGroup.Append>
          </InputGroup>
        )
    }
}

export default UserInformation