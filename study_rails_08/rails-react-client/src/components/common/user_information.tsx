import React, { useState, useContext } from 'react'
import { UserContext } from '../../global/contexts'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const UserInformation: React.FC = () => {
    const {username, setUsername} = useContext(UserContext)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [formValue, setFormValue] = useState<string>("")

    function onChangeFormValue(e: React.ChangeEvent<HTMLInputElement>) {
        setFormValue(e.target.value)
    }

    function login() {
        setIsLogin(true)
        setUsername(formValue)
    }

    function logout() {
        setFormValue("")
        setIsLogin(false)
        setUsername("")
    }

    if (!isLogin) {
        return (
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Input your username"
                    value={formValue}
                    onChange={onChangeFormValue}
                />
                <InputGroup.Append>
                    <Button
                        variant="primary"
                        onClick={login}
                    >LOGIN</Button>
                </InputGroup.Append>
          </InputGroup>
        )
    } else {
        return (
            <InputGroup>
                <Form.Control
                    readOnly
                    value={username}            
                />
                <InputGroup.Append>
                    <Button
                        variant="warning"
                        onClick={logout}
                    >LOGOUT</Button>
                </InputGroup.Append>
          </InputGroup>
        )
    }
}

export default UserInformation