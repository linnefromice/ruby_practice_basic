import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 1vh 0;
    height: 10vh;
    width: 40vw;
    border-radius: 1.0rem;
    border: 0.05rem solid #CC0000;
    background: #ffcdd2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Message = styled.div`
    margin: 1vh 0;
    font-size: 1.0rem;
    color: #CC0000;
`

const Button = styled.div`
    margin: 1vh 0;
    height: 3vh;
    width: 7.5vw;
    border-radius: 1.0rem;
    border: 0.05rem solid #646464;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #646464;
    }
`

interface Prop {
    error: string
    setError: React.Dispatch<React.SetStateAction<string>>
}


const ErrorModal = (prop:Prop) => {
    const resetMessage = () => {
        prop.setError("")
    }

    return (
        <Wrapper>
            <Message>{prop.error}</Message>
            <Button onClick={resetMessage}>OK</Button>
        </Wrapper>
    )
}

export default ErrorModal