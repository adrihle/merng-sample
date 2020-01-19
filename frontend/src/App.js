import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Post from './components/post'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h3>Hello Apollo</h3>
        <Post />
      </div>
    </ApolloProvider>
  );
}

export default App
