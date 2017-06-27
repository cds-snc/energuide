const React = require('react')
const { shallow } = require('enzyme')
const { App } = require('../src/App')

describe('App component', () => {
  it('renders text', () => {
    const app = shallow(<App />)
    expect(app.text()).toEqual('Energuide')
  })
})
