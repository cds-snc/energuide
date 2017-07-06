import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('App component', () => {
  it('renders a DataTable', () => {
    const app = shallow(<App />)
    expect(app.find('DataTable').length).toEqual(1)
  })

  it('renders a Logo', () => {
    const app = shallow(<App />)
    expect(app.find('EnerguideLogo').length).toEqual(1)
  })
})
