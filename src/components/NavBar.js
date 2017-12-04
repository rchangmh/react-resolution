import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { client } from '../index'

const mutation = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) @client
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

class NavBar extends Component {
  state = {
    activeItem: window.location.pathname
  }

  editState = async () => {
    console.log(this.props)
    const before = await client.query({ query })
    console.log(before.data)
    console.log(client)
    await client.addTodo({
      variables: {
        title: 'new to do',
        message: 'finally!'
      }
    })
    const after = await client.query({ query })
    console.log(after.data)
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

export default graphql(mutation, { name: 'addTodo' })(NavBar)
