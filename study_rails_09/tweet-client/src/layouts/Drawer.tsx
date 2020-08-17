import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../global/contexts';
import LinkButton from '../components/common/LinkButton';
import DrawerButton from '../components/common/DrawerButton';

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
    const { isLogin, setIsLogin, setUser } = useContext(UserContext);
    let history = useHistory();

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

    const AuthenticatedMenu = () => {
        const logout = () => {
            setIsLogin(false)
            setUser({ id: 0, email: "", name: "" })
            history.push("/home");
        }

        return (
            <Buttons>
                <MarginLinkButton label="Top" link_to="/home"/>
                <MarginLinkButton label="Watch" link_to="/tweet/list"/>
                <MarginLinkButton label="New" link_to="/tweet/new"/>
                <DrawerButton label="Logout" onClick={logout}/>
            </Buttons>
        )
    }

    const UnauthenticatedMenu = () => {
        return (
            <Buttons>
                <MarginLinkButton label="Top" link_to="/home"/>
                <MarginLinkButton label="Watch" link_to="/tweet/list"/>
                <MarginLinkButton label="Sign In" link_to="/sign_in"/>
                <MarginLinkButton label="Sign Up" link_to="/sign_up"/>
            </Buttons>
        )
    }

    const Menus = () => {
        return isLogin ? <AuthenticatedMenu/> : <UnauthenticatedMenu/>
    }

    return (
        <Wrapper>
            <Margin>
                <Title>Tweet App</Title>
                <SubTitle>With saving your private...</SubTitle>
            </Margin>
            <Margin>
                <Menus/>
            </Margin>
            <Margin>
                <SnsLinks/>
            </Margin>
        </Wrapper>
    );
}

export default Drawer;
