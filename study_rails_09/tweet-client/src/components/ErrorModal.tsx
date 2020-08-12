import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 1vh 0;
    height: 10vh;
    width: 40vw;
    border-radius: 1.0rem;
    border: 0.1rem solid #ffcdd2;
    background-color: #ffcdd2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Message = styled.div`
    font-size: 1.0rem;
    color: #CC0000;
`

interface Prop {
    error: string
    setError: React.Dispatch<React.SetStateAction<string>>
}

const ErrorModal = (prop:Prop) => {
    return (
        <Wrapper>
            <Message>{prop.error}</Message>

        </Wrapper>
    )
}

export default ErrorModal