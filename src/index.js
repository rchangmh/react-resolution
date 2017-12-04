import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const local = withClientState({
  Query: {
    todos: () => []
  },
  Mutation: {
    addTodo: (_, { message, title }, { cache }) => {
      const current = cache.readQuery({ query, variables })
      const data = {
        todos: current.todos.concat([{ message, title, __typename: 'Todo' }])
      }
      cache.writeQuery({ query, variables, data })
      return null
    }
  }
})

const client = new ApolloClient({
  link: local,
  cache: new InMemoryCache()
})

const query = gql`
  query todos {
    todos @client {
      message
      title
    }
  }
`

const initial = await client.query({ query })

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
