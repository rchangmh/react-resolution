import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'
import { padding } from '../styles.js'

export default class New extends Component {
	state = {
		activity: '_____',
		goal: '_____',
		metric: '_____',
		amountDedicated: '_____'
	}

	handleChange = value => {
		this.setState({ metric: value })
		console.log(this.state)
	}

	handleSubmit = () => {
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<Header>{`I want to ${this.state.activity} ${this.state.goal} ${this
					.state.metric} this year.`}</Header>
				<p>
					Example: I want to <u>exercise</u> <u>180</u> <u>days</u> this year.
				</p>
				<Form.Input
					required
					placeholder="activity"
					onChange={event => this.setState({ activity: event.target.value })}
				/>
				<Form.Input
					required
					placeholder="goal"
					onChange={event => this.setState({ goal: event.target.value })}
				/>
				<Form.Input
					required
					placeholder="metric"
					onChange={event => this.setState({ metric: event.target.value })}
				/>
				<Header>{`I want to dedicate $${this.state
					.amountDedicated} to this goal.`}</Header>
				<Form.Input
					required
					placeholder="0.00"
					icon="dollar"
					iconPosition="left"
					onChange={event =>
						this.setState({ amountDedicated: event.target.value })}
				/>
				<Button.Group style={padding}>
					<Button as={Link} to={'/add'}>
						Cancel
					</Button>
					<Button.Or />
					<Button
						as={Link}
						to={'/add/new'}
						positive
						onClick={this.handleSubmit}>
						Submit
					</Button>
				</Button.Group>
			</div>
		)
	}
}
