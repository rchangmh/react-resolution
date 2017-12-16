import React, { Component } from 'react'
import GetInput from '../components/GetInput'

export default class Max extends Component {
	render() {
		return (
			<div>
				<GetInput
					header="How much can you spend?"
					color="green"
					label="$"
					handleSubmit={val => console.log(val)}
				/>
			</div>
		)
	}
}
