import React, { Component } from 'react'
import { Button, Form, Header, Message, Transition } from 'semantic-ui-react'
import { Switch } from 'antd'
import { padding, transition } from '../styles'

export default class Login extends Component {
	state = {
		email: '',
		password: '',
		newUser: false,
		name: '',
		confirmEmail: '',
		confirmPassword: ''
	}

	verifyInputs = () => {
		const {
			email,
			password,
			name,
			confirmEmail,
			confirmPassword,
			newUser
		} = this.state
		switch (true) {
			case email === '':
			case password === '':
			case newUser && name === '':
			case newUser && confirmEmail === '':
			case newUser && confirmPassword === '':
				console.log('Cannot leave fields empty.')
				break
			case newUser && email !== confirmEmail:
				console.log('Email does not match.')
				break
			case newUser && password !== confirmPassword:
				console.log('Passwords do not match.')
				break
			default:
				console.log(this.state)
		}
	}

	render() {
		return (
			<Form style={padding}>
				<Form.Input
					type="email"
					fluid
					icon="inbox"
					iconPosition="left"
					placeholder="E-mail address"
					onChange={e => this.setState({ email: e.target.value })}
					value={this.state.email}
				/>

				<Form.Input
					fluid
					icon="lock"
					iconPosition="left"
					placeholder="Password"
					type="password"
					onChange={e => this.setState({ password: e.target.value })}
					value={this.state.password}
				/>

				<Message
					onClick={() => this.setState({ newUser: !this.state.newUser })}
					color="green">
					<p>Are you a new user?</p>
					<Switch
						checkedChildren="Yes"
						unCheckedChildren="No"
						checked={this.state.newUser}
						onChange={() =>
							this.setState({
								name: '',
								confirmEmail: '',
								confirmPassword: ''
							})}
					/>
				</Message>

				<Transition
					visible={this.state.newUser}
					animation={transition.animation}
					duration={transition.duration}>
					<div>
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="Name"
							onChange={e => this.setState({ name: e.target.value })}
							value={this.state.name}
						/>
						<Form.Input
							fluid
							icon="inbox"
							iconPosition="left"
							placeholder="Re-enter email"
							type="email"
							onChange={e => this.setState({ confirmEmail: e.target.value })}
							value={this.state.confirmEmail}
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Re-enter password"
							type="password"
							onChange={e => this.setState({ confirmPassword: e.target.value })}
							value={this.state.confirmPassword}
						/>
					</div>
				</Transition>

				<div style={padding}>
					<Button fluid size="large" onClick={() => this.verifyInputs()}>
						{this.state.newUser ? 'SIGN UP' : 'LOG IN'}
					</Button>
				</div>
			</Form>
		)
	}
}
