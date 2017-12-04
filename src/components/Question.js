import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Header, Popup, Icon } from 'semantic-ui-react'
import { login, padding, transition } from '../styles'

export default class Question extends Component {
  state = {
    value: this.props.value
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <div style={padding}>
        <Header>{this.props.header}</Header>

        <p>
          {this.props.subtext}
          {this.props.popup && (
            <Popup
              trigger={<Icon circular name={this.props.popupIcon} />}
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
          labelPosition={this.props.labelPosition}
          label={this.props.label}
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </div>
    )
  }
}

Question.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  labelPosition: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  subtext: PropTypes.string,
  popup: PropTypes.string,
  popupIcon: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

Question.defaultProps = {
  icon: 'right chevron',
  popupIcon: 'info',
  color: 'green',
  labelPosition: 'left',
  value: ''
}
