import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
	Confirm,
	Button,
	Form,
	Header,
	Dimmer,
	Loader
} from 'semantic-ui-react'
import { Spin, Alert } from 'antd'
import { padding } from '../styles.js'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '../constants'

class New extends Component {
	state = {
		showConfirm: false,
		redirect: false,
		loading: true,
		activity: '_____',
		goal: '_____',
		metric: '_____',
		amountDedicated: '_____'
	}

	handleChange = value => {
		this.setState({ metric: value })
		console.log(this.state)
	}

	handleSubmit = async () => {
		this.setState({ loading: true })
		const response = await this.props.addGoal({
			variables: {
				id: id,
				activity: this.state.activity,
				goal: parseInt(this.state.goal),
				metric: this.state.metric,
				amountDedicated: parseFloat(this.state.amountDedicated)
			}
		})
		console.log(response.data.createGoal.activity)
		this.setState({ loading: false, showConfirm: true })
	}

	handleCancel = () => {
		this.setState({ showConfirm: false, redirect: true })
	}

	handleConfirm = () => {
		this.setState({
			showConfirm: false,
			activity: '_____',
			goal: '_____',
			metric: '_____',
			amountDedicated: '_____'
		})
	}

	render() {
		return (
			<div>
				<Spin spinning={this.state.loading}>
					<Alert
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
					/>
					<Header>{`I want to ${this.state.activity} ${this.state.goal} ${this
						.state.metric} this year.`}</Header>
				</Spin>
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

				{this.state.redirect && <Redirect to="/add" />}
				{this.state.showConfirm && (
					<Confirm
						open={this.state.showConfirm}
						content="Goal added!"
						cancelButton="Go Back"
						confirmButton="Add More"
						onCancel={this.handleCancel}
						onConfirm={this.handleConfirm}
					/>
				)}
			</div>
		)
	}
}

const ADD_GOAL = gql`
	mutation addGoal(
		$id: ID!
		$activity: String!
		$goal: Int!
		$metric: String!
		$amountDedicated: Float!
	) {
		createGoal(
			activity: $activity
			goal: $goal
			metric: $metric
			userId: $id
			amountDedicated: $amountDedicated
		) {
			id
			activity
			goal
			metric
		}
	}
`

export default graphql(ADD_GOAL, {
	name: 'addGoal'
})(New)
