import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import UserInterface from "../../models/UserInterface"

const dummyDatas = [
    {
        id: 1,
        name: "Zidane",
        email: "zidane@mognet.com",
    },
    {
        id: 2,
        name: "Garnet",
        email: "garnet@mognet.com",
    },
    {
        id: 3,
        name: "Vivi",
        email: "vivi@mognet.com",
    },
    {
        id: 4,
        name: "Eiko",
        email: "eiko@mognet.com",
    },
];

const UserList = () => {
    const [users, setUsers] = useState<UserInterface[]>([])

    const fetchUsers = () => {
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if (users !== null && users.length !== 0) {
        return (
            <div>
                {
                    users.map((data:UserInterface, index:number) => {
                        return(
                            <div>
                                {`${data.id} / ${data.name}`}
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    dummyDatas.map((data:UserInterface, index:number) => {
                        return(
                            <div>
                                {`${data.id} / ${data.name}`}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
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

const UserIndex = () => {
    return (
        <TopWrapper>
            <Header>
                <Title>Users</Title>
            </Header>
            <Body>
                <UserList/>
            </Body>
        </TopWrapper>
    );
}
export default UserIndex