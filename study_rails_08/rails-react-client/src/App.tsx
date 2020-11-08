import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRestContainer } from './components/main_rest_container';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})
const QUERY = gql`
  query {
    tweets {
      id
      sentence
      userName
      createdAt
      updatedAt
    }
  }
`
type TweetInterface = {
  id: string
  sentence: string
  userName: string
  createdAt: string
  updatedAt: string
}
const Tweets: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>
  console.log(data.tweets)
  return (
    <div>
      <span>GraphQL Area</span>
      {data.tweets.map((tweet:TweetInterface) => (
        <ul>
          <li>{tweet.id}</li>
          <li>{tweet.sentence}</li>
          <li>{tweet.userName}</li>
          <li>{tweet.createdAt}</li>
          <li>{tweet.updatedAt}</li>
        </ul>
      ))}
    </div>
  )
}

function App() {
  return (
    
      <div className="App">
        <MainRestContainer />
        <ApolloProvider client={client}>
          <Tweets/>
        </ApolloProvider>
      </div>
  );
}

export default App;
