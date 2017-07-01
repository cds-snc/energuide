import React, { Component } from 'react'
import DataTable from './DataTable'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient()

let query = gql`
  query {
    houses(count: 100) {
      house_id
      aircop
    }
  }
      `

class App extends Component {
  state = {
    data: [],
  }

  handleClick() {
    console.log('clicked.', this)
  }

  componentDidMount() {
    client
      .query({ query })
      .then(({ data }) => {
        this.setState({ data: data.houses })
      })
      .catch(console.error)
  }

  render() {
    return (
      <main>
        <p onClick={this.handleClick}>Energuide</p>
        <DataTable data={ this.state.data }/>
      </main>
    )
  }
}

export default App
