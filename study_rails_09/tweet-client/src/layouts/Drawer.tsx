import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../global/contexts';
import LinkButton from '../components/LinkButton';
import DrawerButton from '../components/DrawerButton';

interface Prop {
    label: string
    link_to: string
}

const MarginLinkButton = (prop: Prop) => {
    const MarginContainer = styled.div`
        margin: 0.5vh 0;
    `;

    return (
        <MarginContainer>
            <LinkButton label={prop.label} link_to={prop.link_to}/>
        </MarginContainer>
    )
}

const SnsLinks = () => {
    const FlexWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;
    
    const Title = styled.div`
        margin: 1vh 0;
        font-size: 0.8rem;
        color: #646464;
    `;
    
    const Row = styled.div`
        margin: 1vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    `;

    const Icon = styled.div`
        margin 0 0.5vw;
        width 3vh;
        height 3vh;
        border-radius: 4px;
        border: 1px solid #646464;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;
        &:hover {
            background-color: #646464;
        }        
    `;
    
    return (
        <FlexWrapper>
            <Title>SNS Icons</Title>
            <Row>
                <Icon>T</Icon>
                <Icon>F</Icon>
                <Icon>I</Icon>
            </Row>
        </FlexWrapper>
    );
}

const Drawer = () => {
    const { isLogin, setIsLogin, setUsername } = useContext(UserContext);

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

    const AuthMenu = () => {
        if (isLogin) {
            const logout = () => {
                setIsLogin(false)
                setUsername("")
                // TODO: routing
            }
            return (
                <DrawerButton label="Logout" onClick={logout}/>
            )
        } else {
            return (
                <MarginLinkButton label="Login" link_to="/login"/>
            )
        }
    }

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
                    <AuthMenu/>
                </Buttons>
            </Margin>
            <Margin>
                <SnsLinks/>
            </Margin>
        </Wrapper>
    );
}

export default Drawer;
