import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('App component', () => {
  it('renders text', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toContain('Energuide')
  })
})
