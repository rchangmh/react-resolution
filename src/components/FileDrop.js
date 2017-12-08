import React, { Component } from 'react'
import { container } from '../styles'
import FileDrop from 'react-file-drop'

export default class File extends Component {
  render() {
    return (
      <div style={container}>
        <p>test</p>
        <FileDrop
          targetAlwaysVisible="true"
          onDrop={() => console.log('dropped!')}
        />
      </div>
    )
  }
}
