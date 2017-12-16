import React, { Component } from 'react'
import { render } from 'react-dom'
import gql from 'graphql-tag'
import { client } from '../index'
import { Button } from 'antd'
import { padding } from '../styles'

const mutation = gql`
	mutation addTodo($message: String, $title: String) {
		addTodo(message: $message, title: $title) @client
	}
`

const query = gql`
	query todos {
		todos @client {
			message
			title
		}
	}
`

export default class Crud extends Component {
	state = {
		todos: []
	}

	async componentDidMount() {
		const queryResult = await client.query({ query })
		// this.setState({ todos: 'test' })
		console.log(queryResult.data)
		this.setState({ todos: queryResult.data.todos })
	}

	addNew = async () => {
		// console.log('before')
		// console.log((await client.query({ query })).data)
		// this.setState({ show: !this.state.show })
		// console.log(queryResult.data)
		await client.mutate({
			mutation,
			variables: {
				title: 'hello world',
				message: 'oh what a world this is'
			}
		})
		const queryResult = await client.query({ query })
		this.setState({ todos: queryResult.data.todos })
		console.log('after')
		// console.log((await client.query({ query })).data)
	}
	render() {
		return (
			<div>
				<Button type="primary" onClick={this.addNew}>
					Add New
				</Button>
				{this.state.todos &&
					this.state.todos.map((todo, index) => (
						<div key={index} style={padding}>
							<p>{todo.title}</p>
							<p>{todo.message}</p>
						</div>
					))}
			</div>
		)
	}
}
