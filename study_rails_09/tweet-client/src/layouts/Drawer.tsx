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

const SnsLinks = () => {
    const _flexWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;
    
    const _title = styled.div`
        margin: 1vh 0;
        font-size: 0.8rem;
        color: #646464;
    `;
    
    const _row = styled.div`
        margin: 1vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    `;
    const _icon = styled.div`
        margin 0 1vw;
        width 3vh;
        height 3vh;
        border-radius: 4px;
        background: #646464;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;
    `;
    
    return (
        <_flexWrapper>
            <_title>SNS Icons</_title>
            <_row>
                <_icon>T</_icon>
                <_icon>F</_icon>
                <_icon>I</_icon>
            </_row>
        </_flexWrapper>
    );
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
                    <MarginLinkButton label="Watch" link_to="/tweet/list"/>
                    <MarginLinkButton label="VIDEO" link_to="/video"/>
                    <MarginLinkButton label="NEWS" link_to="/news"/>
                    <MarginLinkButton label="MUSIC" link_to="/music"/>
                    <MarginLinkButton label="Login" link_to="/login"/>
                </Buttons>
            </Margin>
            <Margin>
                <SnsLinks/>
            </Margin>
        </Wrapper>
    );
}

export default Drawer;