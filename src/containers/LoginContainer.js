import React, { Component } from 'react'
import { render } from 'react-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Login from '../components/Login'

class LoginContainer extends Component {
	submitUser = async state => {
		console.log(state)
		const { email, password, name, newUser } = state
		if (newUser) {
			const data = await this.props.createUserMutation({
				variables: {
					email: email,
					password: password,
					name: name
				}
			})
			console.log(data)
		}
	}

	render() {
		return <Login handleLogin={this.submitUser} />
	}
}

const CREATE_USER_MUTATION = gql`
	mutation CreateUserMutation(
		$email: String!
		$password: String!
		$name: String!
	) {
		createUser(email: $email, password: $password, name: $name) {
			id
		}
	}
`

export default graphql(CREATE_USER_MUTATION, {
	name: 'createUserMutation'
})(LoginContainer)
