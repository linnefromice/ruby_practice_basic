import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TweetInterface from '../model/tweet_interface'
import TweetsContainer from './tweets/tweets_container'

const MainContainer: React.FC = () => {
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
      <TweetsContainer tweets={tweets}>
        <div>TWEETS</div>
      </TweetsContainer>
    );
  }
}

export default MainContainer;