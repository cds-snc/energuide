const isDate = suspect =>
  Object.prototype.toString.call(suspect) === '[object Date]'

const unixTime = date => {
  if (isDate(date)) {
    return parseInt((date.getTime() / 1000).toFixed(0))
  } else {
    return parseInt((new Date().getTime() / 1000).toFixed(0))
  }
}

export default unixTime
