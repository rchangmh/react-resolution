import React, { Component } from 'react'
import { render } from 'react-dom'
import { main, login, padBot } from '/styles'
import { Segment } from 'semantic-ui-react'
import Login from '/Login'
import Question from '/Question'

class App extends Component {
  render() {
    return(
      <div style={main}>
        <Segment style={login}>
          <div style={padBot}>
            <Question 
              question='Max?'
              subtext='Enter an amount.  '
              metric='amount'
              label='$'
              icon='chevron right'
            />
          </div>
          <div style={padBot}>
            <Question
              question='Hey!'
              subtext='Enter your favorite food.  '
              metric='Yes?'
              icon='add'
            />
          </div>
        </Segment>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))