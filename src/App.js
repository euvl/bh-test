import React, { Component } from 'react'
import Checkbox from './Checkbox'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Checkbox label={'Hello, world!'}
                  onChange={(event) => {
                    console.log(event)
                  }}/>
      </div>
    )
  }
}

export default App
