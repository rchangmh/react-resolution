import React, { Component } from 'react'
import {
  Input as SemInput,
  Popup as SemPopup,
  Icon as SemIcon,
  Segment as SemSegment,
  Button as SemButton,
  Form as SemForm,
  Message as SemMessage,
  Transition as SemTransition,
  Header as SemHeader,
  Progress as SemProgress,
  Confirm as SemConfirm,
  Modal as SemModal,
  Menu as SemMenu
} from 'semantic-ui-react'
import {
  Input as AntInput,
  Spin as AntSpin,
  Progress as AntProgress
} from 'antd'
import validator from 'validator'

export class Progress extends Component {
  state = {
    ...this.props,
    percent: Math.ceil(this.props.percent),
    progress: true
  }

  render() {
    return <SemProgress {...this.state} />
  }
}

export class Input extends Component {
  state = {
    value: '',
    error: false,
    ...this.props
  }

  validateSem = event => {
    this.setState({ value: event.target.value }, () => {
      switch (true) {
        case validator.isInt(this.state.value):
          this.setState({ error: true })
          console.log('error')
          break
        default:
          this.setState({ error: false })
          console.log(this.state)
      }
    })
    this.props.onChange && this.props.onChange()
  }

  render() {
    return <SemInput {...this.state} onChange={this.validateSem} />
  }
}

export const viewport = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export const container = {
  textAlign: 'center',
  width: '50%',
  maxWidth: '400px',
  minWidth: '400px',
  maxHeight: '95vh',
  overflow: 'auto',
  padding: '30px'
}

export const padding = {
  padding: '10px'
}

export const transition = {
  animation: 'scale',
  duration: '400'
}

export const drop = {
  borderStyle: 'solid',
  height: '100px',
  width: '100px',
  margin: '0 auto'
}

export const spinner = {
  textAlign: 'left'
}

export {
  SemMenu as Menu,
  SemPopup as Popup,
  SemIcon as Icon,
  SemSegment as Segment,
  SemButton as Button,
  SemForm as Form,
  SemMessage as Message,
  SemTransition as Transition,
  SemHeader as Header,
  SemConfirm as Confirm,
  SemModal as Modal,
  AntSpin as Spin
}
