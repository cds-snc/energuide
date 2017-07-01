import React from 'react'
import ReactDOM from 'react-dom/server'
import express from 'express'
import path from 'path'
import App from './App'
import template from './template'

const server = express()

server.use(express.static(process.cwd() + '/dist/public'))

server.get('/', (req, res, next) => {
  const body = ReactDOM.renderToString(<App />)
  const html = template(body)
  res.send(html)
})

export default server
