import React from 'react'
import { mount, shallow } from 'enzyme'
import FipBar from '../src/FipBar'

describe('<FipBar />', () => {
  it('renders links for the objects passed in', () => {
    let links = [{ text: 'example.com', url: 'http://www.example.com' }]
    const fipbar = mount(<FipBar links={links} />)
    expect(fipbar.text()).toEqual('example.com')
  })
})
