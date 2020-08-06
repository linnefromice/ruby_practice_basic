import React from 'react';
import styled from 'styled-components';
import LinkButton from '../components/LinkButton';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Margin = styled.div`
    margin: 2vh 0;
`;

const Title = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.50rem;
`;

const SubTitle = styled.div`
    text-align: center;
    color: white;
`;

const Drawer = () => {
    return (
        <Wrapper>
            <Margin>
                <Title>Tweet App</Title>
                <SubTitle>With saving your private...</SubTitle>
            </Margin>
            <Margin>
                <Buttons>
                    <LinkButton label="Top"/>
                    <LinkButton label="VIDEO"/>
                    <LinkButton label="NEWS"/>
                    <LinkButton label="MUSIC"/>
                    <LinkButton label="MORE"/>
                </Buttons>
            </Margin>
            <Margin>
                <p>Your Account</p>
            </Margin>
        </Wrapper>
    );
}

export default Drawer;