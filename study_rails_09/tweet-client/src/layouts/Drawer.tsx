import React from 'react';
import styled from 'styled-components';
import LinkButton from '../components/LinkButton';

const Wrapper = styled.div`
    display: flex;
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

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

interface Prop {
    label: string
    link_to: string
}

const MarginLinkButton = (prop: Prop) => {
    const _marginContainer = styled.div`
        margin: 0.5vh 0;
    `;

    return (
        <_marginContainer>
            <LinkButton label={prop.label} link_to={prop.link_to}/>
        </_marginContainer>
    )
}

const Drawer = () => {
    return (
        <Wrapper>
            <Margin>
                <Title>Tweet App</Title>
                <SubTitle>With saving your private...</SubTitle>
            </Margin>
            <Margin>
                <Buttons>
                    <MarginLinkButton label="Top" link_to="/"/>
                    <MarginLinkButton label="VIDEO" link_to="/video"/>
                    <MarginLinkButton label="NEWS" link_to="/news"/>
                    <MarginLinkButton label="MUSIC" link_to="/music"/>
                    <MarginLinkButton label="MORE" link_to="/more"/>
                </Buttons>
            </Margin>
            <Margin>
                <p>Your Account</p>
            </Margin>
        </Wrapper>
    );
}

export default Drawer;