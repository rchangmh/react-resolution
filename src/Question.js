import React, { Component } from 'react'
import {
  Input,
  Label,
  Header,
  Popup,
  Icon,
  Button
} from 'semantic-ui-react'
import { login, padBot, transition } from './styles'

export default class Question extends Component {
  state = {
  }

  render() {

    const test = () => console.log('hello world')

    return(
      <div>
        <Header>{this.props.question}</Header>
        <p>
          {this.props.subtext}
          <Popup
            trigger={<Icon circular name='info' />}
            content={this.props.subtext}
            inverted
          />
        </p>
        <Input
          action={{ 
            color: 'green', 
            icon: this.props.icon,
            onClick: test
          }}
          labelPosition='left'
          label={this.props.label}
          placeholder={this.props.metric}
          type='text' />
      </div>
    )
  }
}