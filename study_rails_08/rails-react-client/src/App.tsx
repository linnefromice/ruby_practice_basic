import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainRestContainer } from './components/main_rest_container'
import { MainGraphqlContainer } from './components/main_graphql_container'

export const App = () => {
  return (
      <div className="App">
        <MainRestContainer />
        <MainGraphqlContainer />
      </div>
  );
}
