import React, { Component } from 'react'
import { Button, Header, Message, Progress, Confirm } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Add extends Component {
	state = {
		showConfirm: false,
		activities: [
			{
				activity: 'read',
				goal: '10',
				metric: 'books',
				amountDedicated: '500'
			}
		]
	}

	handleDismiss = () => {
		console.log(this.state)
		this.setState({
			showConfirm: true
		})
	}

	handleCancel = () => {
		this.setState({ showConfirm: false })
	}

	handleConfirm = () => {
		this.setState({
			activities: [],
			showConfirm: false
		})
	}

	render() {
		return (
			<div>
				<Header>Add goals!</Header>
				{this.state.activities.length > 0 &&
					this.state.activities.map((activity, index) => (
						<Message key={index} onDismiss={this.handleDismiss}>
							<Header>{`I plan to ${activity.activity} ${activity.goal} ${activity.metric} this year.`}</Header>
							<Progress size="small" percent={90} indicating>
								${activity.amountDedicated}
							</Progress>
							<Confirm
								open={this.state.showConfirm}
								header={`Are you sure you want to delete this goal?`}
								content={`I plan to ${activity.activity} ${activity.goal} ${activity.metric} this year.`}
								onCancel={this.handleCancel}
								onConfirm={this.handleConfirm}
							/>
						</Message>
					))}
				<Button as={Link} to="/add/new" size="large" icon="add" />
			</div>
		)
	}
}
