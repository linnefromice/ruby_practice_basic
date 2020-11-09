import axios from 'axios'

export const requestCreate = (
  username: string | null,
  sentence: string,
) => {
  const selectedUsername = (!username) ? "unknown" : username
  if (sentence === "") return
  axios.post('http://localhost:3001/tweets',
    {
      sentence: sentence,
      user_name: selectedUsername
    }
  )
  .catch((error) => {
    console.log(error)
  })
}

export const requestUpdate = (
  tweet_id: number,
  sentence: string
) => {
  axios.patch(`http://localhost:3001/tweets`,
    {
      id: tweet_id,
      sentence: sentence
    }
  )
  .catch((error) => {
    console.log(error)
  })
}

export const requestDelete = (
  tweet_id: number
) => {
  axios.delete(`http://localhost:3001/tweets`,
    {
      params: {
        id: tweet_id
      }
    }
  )
  .catch((error) => {
    console.log(error)
  })
}