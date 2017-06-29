import React from 'react'
import { house } from './data/house'
import { mount, shallow } from 'enzyme'
import DataTable from '../src/DataTable'

describe('DataTable component', () => {
  it('generates columns based on the number of attributes', () => {
    let a = [{ foo: 'bar' }]
    let b = [{ foo: 'bar', fizz: 'buzz' }]
    const renderedA = shallow(<DataTable data={a} />)
    const renderedB = shallow(<DataTable data={b} />)
    expect(renderedA.children().length).toEqual(1)
    expect(renderedB.children().length).toEqual(2)
  })

  it('handles empty data arrays', () => {
    const table = shallow(<DataTable data={[]} />)
    expect(table.children().length).toEqual(0)
  })

  it('complains when no data is given', () => {
    expect(
      () => shallow(<DataTable  />)
    ).toThrow()
  })

  it('generates columns even for large objects', () => {
    let attributeCount = Object.keys(house).length
    const table = shallow(<DataTable data={[house]} />)
    expect(table.children().length).toEqual(attributeCount)
  })
})
