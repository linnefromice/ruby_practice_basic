import React, { useState, createContext } from 'react'

interface UserContextValue {
    username: string,
    setUsername: any
}

export const UserContext = createContext<UserContextValue>(
    {
        username: "",
        setUsername: null
    }
)
