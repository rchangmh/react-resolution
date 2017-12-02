import React, { Component } from 'react'
import { render } from 'react-dom'
import { main, login, padBot } from './styles'
import { Segment } from 'semantic-ui-react'
import Login from './Login'
import Question from './Question'

class App extends Component {
  render() {
    return(
      <div style={main}>
        <Segment style={login}>
            <Question 
              header='final deploy'
              subtext='Enter an amount.  '
              metric='amount'
              label='$'
              icon='chevron right'
            />
            <Question
              header='Hey!'
              subtext='Enter your favorite food.  '
              metric='Yes?'
              icon='add'
              color='red'
            />
            <Question
              header='Hey!'
              subtext='Enter your favorite food.  '
              metric='Yes?'
              label='+'
              icon='check'
            />
            <Question
              header='Hey!'
              subtext='Enter your favorite food.  '
              metric='Yes?'
              icon='add'
            />
        </Segment>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))