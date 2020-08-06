import React from 'react';
import styled from 'styled-components';


const Circle = styled.div`
    height: 3vw;
    width: 3vw;
    border-radius: 6vw;
    border: 0.1rem solid white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Label = styled.span`
    color: white;
    text-align: center;
`;

interface Prop {
    label: string
}

const LinkButton = (prop:Prop) => {
    return (
        <Circle>
            <Label>{prop.label}</Label>
        </Circle>
    )
}

export default LinkButton;
