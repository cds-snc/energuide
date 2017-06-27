const React = require('react')
const ReactDOM = require('react-dom/server')
const express = require('express')
const server = express()
const path = require('path')
const { App } = require('./App')
const { template } = require('./template')

server.use(express.static(process.cwd() + '/dist/public'))

server.get('/', (req, res, next) => {
  const body = ReactDOM.renderToString(<App />)
  const html = template(body)
  res.send(html)
})

module.exports.server = server
