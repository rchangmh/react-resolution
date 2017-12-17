import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import { viewport, container } from '../styles'
import { Segment } from 'semantic-ui-react'

import NavBar from '../components/NavBar'
import LoginContainer from './LoginContainer'
import Max from './Max'
import Add from '../components/Add'
import New from './New'

export default class App extends Component {
	state = {
		email: '',
		password: '',
		newUser: false,
		name: '',
		confirmEmail: '',
		confirmPassword: ''
	}

	render() {
		return (
			<div style={viewport}>
				<Segment style={container}>
					<NavBar elements={['', 'login', 'max', 'add']} />
					<Switch>
						<Route exact path="/login" component={LoginContainer} />
						<Route exact path="/max" component={Max} />
						<Route exact path="/add" component={Add} />
						<Route exact path="/add/new" component={New} />
					</Switch>
				</Segment>
			</div>
		)
	}
}
