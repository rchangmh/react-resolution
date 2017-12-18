import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Segment, viewport, container } from '/src/styles'
import NavBar from '../components/NavBar'
import LoginContainer from './LoginContainer'
import Max from './Max'
import Add from '../components/Add'
import New from './New'

export default class App extends Component {
  render() {
    return (
      <div style={viewport}>
        <Segment style={container}>
          <NavBar elements={['', 'login', 'max', 'add', 'crud']} />
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/max" component={Max} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/add/new" component={New} />
            <Route exact path="/crud" component={Crud} />
          </Switch>
        </Segment>
      </div>
    )
  }
}
