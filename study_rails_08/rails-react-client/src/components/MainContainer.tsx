import React, { useEffect } from 'react'
import axios from 'axios'

const MainContainer: React.FC = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/tweets')
      .then(results => {
        console.log(results)
      })
      .catch(error => console.log(error))
  });
  
  return (
    <div className="app-main">
      app-main
    </div>
  );
}

export default MainContainer;