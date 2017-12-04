import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const query = gql`
  query todos {
    todos @client {
      message
      title
    }
  }
`

const localStore = withClientState({
  Query: {
    todos: () => [
      {
        message: 'do this',
        title: 'to do 1',
        __typename: 'Todo'
      },
      {
        message: 'do that',
        title: 'to do 2',
        __typename: 'Todo'
      }
    ]
  },
  Mutation: {
    addTodo: (_, variables, { cache }) => {
      const { message, title } = variables
      const current = cache.readQuery({ query, variables })
      const data = {
        todos: current.todos.concat([{ message, title, __typename: 'Todo' }])
      }
      cache.writeQuery({ query, variables, data })
      return data
    }
  }
})

export const client = new ApolloClient({
  link: localStore,
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
