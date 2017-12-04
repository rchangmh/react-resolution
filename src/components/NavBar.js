import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {
    activeItem: window.location.pathname
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
      </Menu>
    )
  }
}