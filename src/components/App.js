import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import { viewport, container } from '../styles'
import { Segment } from 'semantic-ui-react'

import NavBar from './NavBar'
import Login from './Login'
import QuestionsForm from './QuestionsForm'
import Crud from './Crud'
import File from './FileDrop'

export default class App extends Component {
  render() {
    return (
      <div style={viewport}>
        <Segment style={container}>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/questionsform" component={QuestionsForm} />
            <Route exact path="/crud" component={Crud} />
            <Route exact path="/dnd" component={File} />
          </Switch>
        </Segment>
      </div>
    )
  }
}
