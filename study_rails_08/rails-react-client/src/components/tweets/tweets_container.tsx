import React from 'react'
import TweetInterface from '../../model/tweet_interface'

type TweetsProps = {
    tweets: TweetInterface[]
}

const TweetsContainer: React.FC<TweetsProps> = props => {
    if (props.tweets.length === 0) {
      return (
        <div>NODATA</div>
      )
    } else {
      return (
        <div className="app-main">
          <div>{props.children}</div>
          {props.tweets.map((element, index) => {
            return (
              <ul key={`tweet.${element.id}`}>
                <li key={`tweet.id.${element.id}`}>{element.id}</li>
                <li key={`tweet.sentence.${element.id}`}>{element.sentence}</li>
                <li key={`tweet.user_name.${element.id}`}>{element.user_name}</li>
                <li key={`tweet.created_at.${element.id}`}>{element.created_at}</li>
                <li key={`tweet.updated_at.${element.id}`}>{element.updated_at}</li>
              </ul>
            )
          })}        
        </div>
      );
    }
}

export default TweetsContainer