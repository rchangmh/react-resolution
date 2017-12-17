import React, { Component } from 'react'
import { Form, Header, Popup, Icon } from 'semantic-ui-react'
import { padding } from '../styles'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '../constants'

class Max extends Component {
	state = {
		id: id,
		max: '',
		loading: false
	}

	handleSubmit = async () => {
		console.log(this.state)
		this.setState({ loading: !this.state.loading })
		const data = await this.props.addMaxMutation({
			variables: {
				id: this.state.id,
				max: this.state.max
			}
		})
		this.setState({ loading: !this.state.loading })
		console.log(data)
	}

	render() {
		return (
			<div>
				<Header>How much can you spend towards your goals this year?</Header>

				<Form.Input
					loading={this.state.loading}
					required
					placeholder="0.00"
					icon="dollar"
					iconPosition="left"
					type="text"
					onChange={event => this.setState({ max: event.target.value })}
					action={{
						color: 'green',
						icon: 'right chevron',
						onClick: this.handleSubmit
					}}
				/>
			</div>
		)
	}
}

const ADD_MAX_MUTATION = gql`
	mutation addMaxMutation($id: ID!, $max: String!) {
		updateUser(id: $id, max: $max) {
			id
			max
			email
			name
		}
	}
`

export default graphql(ADD_MAX_MUTATION, {
	name: 'addMaxMutation'
})(Max)
