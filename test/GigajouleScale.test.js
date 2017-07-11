import React from 'react'
import { shallow } from 'enzyme'
import GigajoulesScale from '../src/GigajoulesScale'

describe('GigajoulesScale component', () => {
  it('renders an svg scale', () => {
    const app = shallow(<GigajoulesScale />)
    expect(app.is('svg')).toBeTruthy()
  })
})
