import { createContext } from 'react';

interface UserContextValue {
  isLogin: boolean,
  setIsLogin: any,
  username: string,
  setUsername: any,
}

export const UserContext = createContext<UserContextValue>(
  {
    isLogin: false,
    setIsLogin: null,
    username: "",
    setUsername: null
  }
)