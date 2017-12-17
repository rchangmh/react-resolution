import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Add extends Component {
	state = {
		activities: []
	}

	render() {
		return (
			<div>
				<Header>Add goals!</Header>
				<Button as={Link} to="/add/new" size="large" icon="add" />
			</div>
		)
	}
}
