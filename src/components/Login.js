import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Message,
  Transition,
  padding,
  transition
} from '/src/styles'

export default class Login extends Component {
  state = {
    email: 'test@test.com',
    password: '123456',
    newUser: true,
    name: 'Test',
    confirmEmail: 'test@test.com',
    confirmPassword: '123456'
  }

  handleNewUser = () => {
    this.setState({ newUser: !this.state.newUser })
    this.setState({
      name: '',
      confirmEmail: '',
      confirmPassword: ''
    })
  }

  handleSubmit = () => {
    if (this.verifyInputs()) {
      this.props.handleLogin(this.state)
    }
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
        return false
      case newUser && email !== confirmEmail:
        console.log('Email does not match.')
        return false
      case newUser && password !== confirmPassword:
        console.log('Passwords do not match.')
        return false
      default:
        return true
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
          // type="password"
          onChange={e => this.setState({ password: e.target.value })}
          value={this.state.password}
        />
        <Button toggle active={this.state.newUser} onClick={this.handleNewUser}>
          {this.state.newUser ? (
            'New User Registration'
          ) : (
            'New user? Click here!'
          )}
        </Button>

        <Transition
          visible={this.state.newUser}
          animation={transition.animation}
          duration={transition.duration}>
          <div style={padding}>
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
              // type="password"
              onChange={e => this.setState({ confirmPassword: e.target.value })}
              value={this.state.confirmPassword}
            />
          </div>
        </Transition>

        <div style={padding}>
          <Button
            inverted
            color="green"
            fluid
            size="large"
            onClick={this.handleSubmit}>
            {this.state.newUser ? 'SIGN UP' : 'LOG IN'}
          </Button>
        </div>
      </Form>
    )
  }
}
