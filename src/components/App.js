import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { viewport, container } from '../styles'
import { Segment } from 'semantic-ui-react'
import Login from './Login'
import QuestionsForm from './QuestionsForm'
import NavBar from './NavBar'

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
