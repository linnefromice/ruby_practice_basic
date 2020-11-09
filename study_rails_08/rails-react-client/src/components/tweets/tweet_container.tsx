import React, { useState } from 'react'
import { requestUpdate, requestDelete } from "../../utils/apis/rest"
import { TweetInterface } from '../../model/tweet_interface'
import { ViewTweet } from './view_tweet'

type TweetProps = {
  tweet: TweetInterface
}
export const TweetContainer: React.FC<TweetProps> = props => {
  const tweet = props.tweet
  const [isEditMode, setIsEditMode] = useState<Boolean>(false)
  const [updatingSentence, setUpdatingSentence] = useState<string>(tweet.sentence)              
  return (
    <ViewTweet
      tweet={tweet}
      handleUpdate={() => requestUpdate(tweet.id, updatingSentence)}
      handleDelete={() => requestDelete(tweet.id)}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      updatingSentence={updatingSentence}
      setUpdatingSentence={setUpdatingSentence}
    />
  )
}
