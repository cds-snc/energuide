const React = require('react')

class App extends React.Component {

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

module.exports.App = App
