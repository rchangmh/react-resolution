import React, { Component } from 'react'
import { render } from 'react-dom'
import { main, login, padBot } from '../styles'
import { Segment } from 'semantic-ui-react'
import Login from './Login'
import Question from './Question'

export default class App extends Component {
  state = {
    name: '',
    goals: []
  }

  render() {
    return (
      <div style={main}>
        <Segment style={login}>
          <Login />
        </Segment>
      </div>
    )
  }
}
