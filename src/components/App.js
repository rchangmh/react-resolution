import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import { viewport, container } from '../styles'
import { Menu, Segment } from 'semantic-ui-react'
import Login from './Login'
import QuestionsForm from './QuestionsForm'

class NavBar extends Component {
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

export default class App extends Component {
  render() {
    return (
      <div style={viewport}>
        <Segment style={container}>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/questionsform" component={QuestionsForm} />
          </Switch>
        </Segment>
      </div>
    )
  }
}
