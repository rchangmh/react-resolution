import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  Confirm,
  Button,
  Form,
  Header,
  Modal,
  Icon,
  Spin,
  padding
} from '/src/styles'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '/src/constants'

class New extends Component {
  state = {
    showConfirm: false,
    redirect: false,
    loading: false,
    activity: '',
    goal: '',
    metric: '',
    amountDedicated: ''
  }

  handleChange = value => {
    this.setState({ metric: value })
    console.log(this.state)
  }

  handleSubmit = async () => {
    this.setState({ loading: true })
    try {
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
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  handleCancel = () => {
    this.setState({ showConfirm: false, redirect: true })
  }

  handleConfirm = () => {
    console.log('clicked confirm')
    this.setState({
      showConfirm: false,
      activity: '',
      goal: '',
      metric: '',
      amountDedicated: ''
    })
  }

  render() {
    return (
      <div>
        <Spin style={{ width: '0' }} size="large" spinning={this.state.loading}>
          <Header>{`I want to ${this.state.activity === ''
            ? '_____'
            : this.state.activity} ${this.state.goal === ''
            ? '_____'
            : this.state.goal} ${this.state.metric === ''
            ? '_____'
            : this.state.metric} this year.`}</Header>

          <p>
            Example: I want to <u>exercise</u> <u>180</u> <u>days</u> this year.
          </p>
          <Form.Input
            required
            placeholder="activity"
            value={this.state.activity}
            onChange={event => this.setState({ activity: event.target.value })}
          />
          <Form.Input
            required
            placeholder="goal"
            value={this.state.goal}
            onChange={event => this.setState({ goal: event.target.value })}
          />
          <Form.Input
            required
            placeholder="metric"
            value={this.state.metric}
            onChange={event => this.setState({ metric: event.target.value })}
          />
          <Header>{`I want to dedicate $${this.state.amountDedicated === ''
            ? '_____'
            : this.state.amountDedicated} to this goal.`}</Header>
          <Form.Input
            required
            placeholder="0.00"
            icon="dollar"
            iconPosition="left"
            value={this.state.amountDedicated}
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
            <Modal
              open={this.state.showConfirm}
              basic
              size="mini"
              dimmer={'blurring'}>
              <Header icon="check" content="Goal Added!" />
              <Modal.Actions>
                <Button
                  basic
                  color="yellow"
                  inverted
                  onClick={this.handleCancel}>
                  <Icon name="chevron left" />
                  Go Back
                </Button>
                <Button color="green" inverted onClick={this.handleConfirm}>
                  <Icon name="add" />
                  Add More
                </Button>
              </Modal.Actions>
            </Modal>
          )}
        </Spin>
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
