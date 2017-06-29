import React, { Component } from 'react'

class App extends Component {

  handleClick() {
    console.log('clicked.')
  }

  render() {
    return (
      <main>
        <p onClick={this.handleClick}>Energuide</p>
      </main>
    )
  }
}

export default App
