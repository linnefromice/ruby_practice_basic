import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainContainer: React.FC = () => {
  const [tweets, getTweets] = useState([])
  
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
      <div className="app-main">
        <ul>
          {tweets.map((element, index) => {
            const obj = JSON.stringify(element)
            return (
              <li key={index}>{obj}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default MainContainer;