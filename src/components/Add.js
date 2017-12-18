import React, { Component } from 'react'
import { Button, Header, Message, Progress, Confirm } from '/src/styles'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { id } from '/src/constants'

class Add extends Component {
  state = {
    showConfirm: false,
    activities: [
      {
        activity: 'read',
        goal: '10',
        metric: 'books',
        amountDedicated: '500'
      }
    ]
  }

  componentDidMount = async () => {
    console.log(id)
    const queryResult = await this.props.getGoals({
      variables: {
        id: id
      }
    })
    await console.log(queryResult.data)
    // const data = await this.props.getGoals({
    // 	variables: {
    // 		id: id
    // 	}
    // })
    // console.log(data)
  }

  handleDismiss = () => {
    console.log(this.state)
    this.setState({
      showConfirm: true
    })
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
        {this.state.activities.length > 0 &&
          this.state.activities.map((activity, index) => (
            <Message key={index} onDismiss={this.handleDismiss}>
              <Header>{`I plan to ${activity.activity} ${activity.goal} ${activity.metric} this year.`}</Header>
              <Progress size="small" percent={90} indicating>
                ${activity.amountDedicated}
              </Progress>
              <Confirm
                open={this.state.showConfirm}
                header={`Are you sure you want to delete this goal?`}
                content={`I plan to ${activity.activity} ${activity.goal} ${activity.metric} this year.`}
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
              />
            </Message>
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

const QUERY_GOALS = gql`
  query getGoals($id: ID!) {
    User(id: $id) {
      goals {
        activity
        goal
        metric
        amountDedicated
      }
    }
  }
`
export default graphql(QUERY_GOALS, {
  name: 'getGoals'
})(Add)

// const query = gql`
// 	query todos {
// 		todos @client {
// 			message
// 			title
// 		}
// 	}
// `

// export default Add
