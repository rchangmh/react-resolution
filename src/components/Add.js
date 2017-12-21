import React, { Component } from 'react'
import { Spin, Button, Header, Message, Progress, Confirm } from '/src/styles'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '/src/constants'

class Add extends Component {
  state = {
    showConfirm: false
  }

  componentDidMount = () => {
    this.props.readUserGoals.refetch()
  }

  handleDismiss = goal => {
    console.log(goal)
  }

  handleCancel = () => {
    this.setState({ showConfirm: false })
  }

  handleConfirm = () => {
    this.setState({
      activities: [],
      showConfirm: false
    })
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
            <div key={index}>
              <Message
                key={index}
                onDismiss={event => this.handleDismiss(event.target)}>
                <Header>{`I plan to ${goal.activity} ${goal.goal} ${goal.metric} this year.`}</Header>
                {goal.amountDedicated && (
                  <Progress
                    size="medium"
                    percent={Math.random() * 100}
                    indicating>
                    ${goal.amountDedicated}
                  </Progress>
                )}
              </Message>
              <Confirm
                open={this.state.showConfirm}
                header={`Are you sure you want to delete this goal?`}
                content={`I plan to ${goal.activity} ${goal.goal} ${goal.metric} this year.`}
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
              />
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

export default graphql(
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
)(Add)
