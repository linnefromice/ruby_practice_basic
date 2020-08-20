import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import { UserContext } from '../../global/contexts'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
interface ProfileInterface {
  name: string
  email: string,
  description: string,
  following_count: number,
  follower_count: number,
  portfolio_url: string,
  facebook_url: string,
  instagram_url: string,
}
const Profile = (prop:ProfileInterface) => {
    return (
        <Wrapper>
            <div>{prop.name}</div>
            <div>{prop.email}</div>
            <div>{prop.description}</div>
            <div>{prop.follower_count} / {prop.following_count}</div>
            <div>{prop.portfolio_url}</div>
            <div>{prop.facebook_url}</div>
            <div>{prop.instagram_url}</div>
        </Wrapper>
    )
}

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #646464;
  font-size: 3.0rem;
`;
const Body = styled.div`
  width: 100%;
`;

// https://agentestudio.com/blog/design-user-profile-page <- "Social media user profile"
const dummyData = {
    name: "Moguo",
    email: "moguo@mognet.com",
    description: "Hello Dummy, Hello Moguo!",
    following_count: 50,
    follower_count: 280,
    portfolio_url: "http://moguo.portfolio.com",
    facebook_url: "http://www.facebook.com/moguo",
    instagram_url: "http://www.instagram.com/moguo",
}
  
const ProfileIndex = () => {
    const { user, isLogin } = useContext(UserContext);
    const [data, setData] = useState<ProfileInterface|undefined>(undefined)

    const fetchDetail = (id:number) => {
        axios.get(`http://localhost:3001/users/detail/${id}`)
        .then(res => {
            console.log(res)
            setData({
                name: res.data.name,
                email: res.data.email,
                description: res.data.description,
                following_count: res.data.following.length,
                follower_count: res.data.followers.length,
                portfolio_url: res.data.urls.portfolio,
                facebook_url: res.data.urls.facebook,
                instagram_url: res.data.urls.instagram,
            })
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (isLogin) fetchDetail(user.id)
    }, [])

    const content = data !== undefined
        ? <Profile
            name={data.name}
            email={data.email}
            description={data.description}
            following_count={data.following_count}
            follower_count={data.follower_count}
            portfolio_url={data.portfolio_url}
            facebook_url={data.facebook_url}
            instagram_url={data.instagram_url}
          />
        : <Profile
            name={dummyData.name}
            email={dummyData.email}
            description={dummyData.description}
            following_count={dummyData.following_count}
            follower_count={dummyData.follower_count}
            portfolio_url={dummyData.portfolio_url}
            facebook_url={dummyData.facebook_url}
            instagram_url={dummyData.instagram_url}
          />

    return (
      <TopWrapper>
        <Header>
          <Title>Profile</Title>
        </Header>
        <Body>
          {content}
        </Body>
      </TopWrapper>
    )
}

export default ProfileIndex