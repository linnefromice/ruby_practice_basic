import axios from 'axios'

const TWEET_ENDPOINT = "http://localhost:3001/tweets"
export const requestCreate = (
  username: string | null,
  sentence: string,
) => {
  const selectedUsername = (!username) ? "unknown" : username
  if (sentence === "") return
  axios.post(TWEET_ENDPOINT,
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
  axios.patch(TWEET_ENDPOINT,
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
  axios.delete(TWEET_ENDPOINT,
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