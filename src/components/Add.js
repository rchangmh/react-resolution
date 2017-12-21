import React, { Component } from 'react'
import {
  Spin,
  Button,
  Header,
  Message,
  Progress,
  Confirm,
  padding
} from '/src/styles'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { id } from '/src/constants'

class Add extends Component {
  state = {
    confirmBox: null,
    loading: false
  }

  componentDidMount = () => {
    this.props.readUserGoals.refetch()
  }

  handleDismiss = goal => {
    this.setState({ confirmBox: goal })
  }

  handleCancel = () => {
    this.setState({ confirmBox: null })
  }

  handleConfirm = async goalId => {
    this.setState({ loading: true })
    try {
      const response = await this.props.deleteGoal({
        variables: {
          id: goalId
        }
      })
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }

    this.setState({ confirmBox: null })
    this.props.readUserGoals.refetch()
  }

  render() {
    return (
      <div>
        <Header>Add goals!</Header>
        {this.props.readUserGoals.User &&
        this.props.readUserGoals.User.loading && (
          <Spin style={{ width: '0' }} size="large" spinning={true} />
        )}
        {this.props.readUserGoals.User &&
          this.props.readUserGoals.User.goals.length > 0 &&
          this.props.readUserGoals.User.goals.map((goal, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <Message
                key={index}
                onDismiss={() => this.handleDismiss(goal.id)}>
                <Header
                  as={
                    'h4'
                  }>{`I plan to ${goal.activity} ${goal.goal} ${goal.metric} this year.`}</Header>
                {goal.amountDedicated && (
                  <Progress
                    style={{
                      marginTop: '5px',
                      marginBottom: '15px',
                      cursor: 'pointer'
                    }}
                    size="small"
                    percent={Math.random() * 100}
                    indicating
                    onClick={() => console.log(goal.id)}>
                    ${goal.amountDedicated}
                  </Progress>
                )}
              </Message>
              {this.state.confirmBox && (
                <Confirm
                  open={true}
                  header={`Are you sure you want to delete this goal?`}
                  content={`I plan to ${this.state.confirmBox.activity} ${this
                    .state.confirmBox.goal} ${this.state.confirmBox
                    .metric} this year.`}
                  onCancel={this.handleCancel}
                  onConfirm={() => this.handleConfirm(goal.id)}
                />
              )}
            </div>
          ))}
        <Button
          as={Link}
          to="/add/new"
          size="large"
          icon="add"
          inverted
          color="green"
        />
      </div>
    )
  }
}

export default compose(
  graphql(
    gql`
      mutation deleteGoal($id: ID!) {
        deleteGoal(id: $id) {
          id
        }
      }
    `,
    {
      name: 'deleteGoal',
      options: {
        variables: { id: id }
      }
    }
  ),
  graphql(
    gql`
      query readUserGoals($id: ID!) {
        User(id: $id) {
          goals {
            id
            activity
            goal
            metric
            amountDedicated
          }
        }
      }
    `,
    {
      name: 'readUserGoals',
      options: {
        variables: { id: id }
      }
    }
  )
)(Add)
