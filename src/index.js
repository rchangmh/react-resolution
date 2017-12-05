import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const localStore = withClientState({
  Query: {
    todos: () => [
      {
        message: 'Do this.',
        title: 'Item 1',
        __typename: 'Todo'
      },
      {
        message: 'Do that.',
        title: 'Item 2',
        __typename: 'Todo'
      }
    ]
  },
  Mutation: {
    addTodo: (_, variables, { cache }) => {
      const { message, title } = variables
      const query = gql`
        query todos {
          todos @client {
            message
            title
          }
        }
      `
      const current = cache.readQuery({ query, variables })
      const newTodo = { message, title, __typename: 'Todo' }
      cache.writeQuery({
        query,
        variables,
        data: {
          todos: current.todos.concat([newTodo])
        }
      })
      return null
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
