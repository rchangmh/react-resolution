import React, { Component } from 'react'
import Question from './Question'

export default class QuestionsForm extends Component {
  render() {
    return (
      <div>
        <Question
          color="red"
          header="Q1"
          handleSubmit={val => console.log(val)}
        />
        <Question
          color="green"
          header="Q2"
          handleSubmit={val => console.log(val)}
        />
        <Question
          color="blue"
          header="Q3"
          handleSubmit={val => console.log(val)}
        />
      </div>
    )
  }
}
