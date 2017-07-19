import unixTime from '../src/unixTime'

describe('unixTime', () => {
  it('returns a timestamp for Date.now() by default', () => {
    expect(String(unixTime())).toMatch(/\d{10}/)
  })

  it('converts a date object to a unix timestamp', () => {
    expect(unixTime(new Date("2017-07-17"))).toEqual(1500249600)
  })

  it('ignores non-Date objects', () => {
    expect(String(unixTime(null))).toMatch(/\d{10}/)
  })
})
