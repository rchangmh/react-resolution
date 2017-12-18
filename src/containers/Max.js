import React, { Component } from 'react'
import { Form, Header, Popup, Icon, Input } from '/src/styles'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '/src/constants'

class Max extends Component {
	state = {
		id: id,
		max: 0.0,
		loading: false
	}

	handleSubmit = async () => {
		console.log(this.state)
		this.setState({ loading: !this.state.loading })
		const data = await this.props.addMaxMutation({
			variables: {
				id: id,
				max: this.state.max
			}
		})
		this.setState({ loading: !this.state.loading })
		console.log(data)
	}

	render() {
		return (
			<div>
				<Input inputtype="dollar" loading={true} />
				<Header>How much can you spend towards your goals this year?</Header>

				<Form.Input
					loading={this.state.loading}
					required
					placeholder="0.00"
					icon="dollar"
					iconPosition="left"
					type="text"
					onChange={event =>
						this.setState({ max: parseFloat(event.target.value) })}
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
	mutation addMaxMutation($id: ID!, $max: Float!) {
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
