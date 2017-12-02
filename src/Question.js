import React, { Component } from 'react'
import { Input, Label, Header, Popup, Icon } from 'semantic-ui-react'
import { login, padding, transition } from './styles'

export default class Question extends Component {
  state = {
    value: ''
  }

  handleSubmit = () => {
    console.log(this.state)
    this.setState({ value: "" })
  }


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
            onClick: () => this.handleSubmit()
          }}
          labelPosition="left"
          label={this.props.label}
          placeholder={this.props.metric}
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </div>
    )
  }
}
