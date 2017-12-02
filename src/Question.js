import React, { Component } from 'react'
import { Input, Label, Header, Popup, Icon } from 'semantic-ui-react'
import { login, padding, transition } from './styles'

export default class Question extends Component {
  render() {
    return (
      <div style={padding}>
        <Header>{this.props.header}</Header>
        <p>
          {this.props.subtext}
          {this.props.popup && (
            <Popup
              trigger={<Icon circular name="info" />}
              content={this.props.popup}
              inverted
            />
          )}
        </p>
        <Input
          action={{
            color: this.props.color,
            icon: this.props.icon,
            onClick: this.props.action
          }}
          labelPosition="left"
          label={this.props.label}
          placeholder={this.props.metric}
          type="text"
        />
      </div>
    )
  }
}
