import React, { Component } from 'react'
import { drop } from '../styles'
import FileDrop from 'react-file-drop'

export default class File extends Component {
	handleFiles = (files, event) => {
		console.log(files, event)
		console.log(files[0].name)
	}

	render() {
		return (
			<div style={drop}>
				<FileDrop frame={document} onDrop={this.handleFiles}>
					Drop files here!
				</FileDrop>
			</div>
		)
	}
}
