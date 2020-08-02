import React, { useState, useEffect } from 'react'
import { UserContext } from '../global/contexts'

import axios from 'axios'
import TweetInterface from '../model/tweet_interface'
import TweetsContainer from './tweets/tweets_container'

const MainContainer: React.FC = () => {
  const [username, setUsername] = useState("")
  const [tweets, getTweets] = useState<TweetInterface[]>([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/tweets')
      .then(results => {
        console.log(results)
        getTweets(results.data)
      })
      .catch(error => console.log(error))
  }, []);

  if (tweets.length === 0) {
    return (
      <div>NODATA</div>
    )
  } else {
    return (
      <UserContext.Provider value={{username, setUsername}}>
        <TweetsContainer tweets={tweets}/>
      </UserContext.Provider>
    );
  }
}

export default MainContainer;