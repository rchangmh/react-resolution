import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Message,
  Transition
} from 'semantic-ui-react'
import { padBot, transition } from '../styles'

export default class Login extends Component {
  state = {
    new_user: false
  }

  render() {
    return (
      <Form>
        <Header as="h1">Welcome!</Header>
        <Form.Input
          type="email"
          fluid
          icon="inbox"
          iconPosition="left"
          placeholder="E-mail address"
        />

        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />

        <Message
          onClick={() => this.setState({ new_user: !this.state.new_user })}
          color="green">
          <p>Are you a new user?</p>
          <Form.Checkbox
            toggle
            checked={this.state.new_user}
          />
        </Message>

        <Transition
          visible={this.state.new_user}
          animation={transition.animation}
          duration={transition.duration}>
          <div style={padBot}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
          />
          <Form.Input
            fluid
            icon="inbox"
            iconPosition="left"
            placeholder="Re-enter email"
            type="email"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Re-enter password"
            type="password"
          />
          </div>
        </Transition>

        <Button fluid size="large">
          {this.state.new_user ? 'SIGN UP' : 'LOG IN'}
        </Button>
      </Form>
    )
  }
}
