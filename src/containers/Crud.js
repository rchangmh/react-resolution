import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Button } from '/src/styles'
import { graphql } from 'react-apollo'
import { id } from '/src/constants'

class Crud extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const response = await this.props.simpleQuery.allUsers
    this.setState({ users: response })
    // await this.setState({ users: response })
    // await console.log('done')
  }
  // const response = await this.props.simpleQuery({
  // variables: {
  //         id: id
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   await console.log(response)
  //   console.log('hello')
  // }

  handleSubmit = async () => {
    // console.log('mounted')
    // const response = await this.props.simpleQuery.allUsers
    // console.log(this.state)
    // this.setState({ users: response })
    console.log(this.state)
    // if (response) {
    //   this.setState({ response }, () => console.log(this.state))
    // } else {
    //   console.log('failed')
    // }
    // await this.setState({ users: response })
    // await console.log('done')
  }

  // handleSubmit = async () => {
  //   console.log('initiated')
  //   await console.log(this.props)
  //   // const response = await this.props.simpleQuery.allUsers
  //   // console.log(response)
  //   // this.setState({ users: response })
  //   // try {
  //   //   const response = await this.props.response.simpleQuery()
  //   // } catch (error) {
  //   //   console.log(error)
  //   // }
  //   // response.map(item => console.log(item.id))
  //   console.log(this.state.users)
  // }

  render() {
    // return
    if (
      this.props.simpleQuery.allUsers &&
      this.props.simpleQuery.allUsers.loading
    ) {
      return <div>Loading</div>
    } else {
      return (
        <div>
          {this.props.simpleQuery.allUsers &&
            this.props.simpleQuery.allUsers.map((user, index) => (
              <div key={index}>user {user.id}</div>
            ))}
          <Button onClick={this.handleSubmit} icon="stop" />
        </div>
      )
    }
  }
}

// export default graphql(gql`query { ... }`)(MyComponent);

const SIMPLE_QUERY = gql`
  query simpleQuery {
    allUsers {
      id
    }
  }
`

// query getUserAndLikes($id: ID!) {
//   user(id: $id) { name }
//   likes(id: $id) { count }
// }

export default graphql(SIMPLE_QUERY, {
  name: 'simpleQuery'
})(Crud)

// export default graphql(SIMPLE_QUERY, { name: 'myQuery' })(Crud)

// handleSubmit = async () => {
//   console.log(this.state)
//   this.setState({ loading: !this.state.loading })
//   const data = await this.props.simpleQuery({
//     variables: {
//       id: id,
//       max: this.state.max
//     }
//   })
//   this.setState({ loading: !this.state.loading })
//   console.log(data)
// }

// const QUERY_GOALS = gql`
//   query getGoals($id: ID!) {
//     User(id: $id) {
//       goals {
//         activity
//         goal
//         metric
//         amountDedicated
//       }
//     }
//   }
// `

// const QUERY_GOALS = gql`
//   query getGoals {
//     allUsers {
//       id
//     }
//   }
// `

// export default graphql(QUERY_GOALS)(Add)

// componentDidMount = async () => {
//   console.log(this.props)
//   // const response = await this.props
//   // await console.log(response.data)
//   // const data = await this.props.getGoals({
//   // 	variables: {
//   // 		id: id
//   // 	}
//   // })
//   // console.log(data)
// }
