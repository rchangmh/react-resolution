import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { client } from '../index'

const mutation = gql`
  mutation addTodo($message: String, $title: String) {
    addTodo(message: $message, title: $title) @client
  }
`

const query = gql`
  query todos {
    todos @client {
      message
      title
    }
  }
`

export default class NavBar extends Component {
  state = {
    activeItem: window.location.pathname
  }

  // editState = async () => {
  //   console.log(this.props)
  //   const before = await client.query({ query })
  //   console.log(before.data)
  //   client.mutate((mutation))
  //   const after = await client.query({ query })
  //   console.log(after.data)
  // }

  editState = async () => {
    console.log('before')
    console.log((await client.query({ query })).data)
    await client.mutate({
      mutation,
      variables: {
        title: 'hello world',
        message: 'oh what a world this is'
      }
    })
    console.log('after')
    console.log((await client.query({ query })).data)
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={this.state.activeItem === '/'}
          onClick={(e, { to }) => this.setState({ activeItem: to })}
        />
        <Menu.Item
          as={Link}
          to="/login"
          name="Log In"
          color="green"
          active={this.state.activeItem === '/login'}
          onClick={(e, { to }) => this.setState({ activeItem: to })}
        />
        <Menu.Item
          as={Link}
          to="/questionsform"
          name="Form"
          color="red"
          active={this.state.activeItem === '/questionsform'}
          onClick={(e, { to }) => this.setState({ activeItem: to })}
        />
        <Menu.Item name="State" onClick={this.editState} />
      </Menu>
    )
  }
}
