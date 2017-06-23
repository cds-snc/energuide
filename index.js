const http = require('http')
const server = new http.Server()
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./src/schema')
const env = process.env.NODE_ENV || "development"
const app = express()
const { db } = require('./src/database')

app.use('/graphql', graphqlHTTP({
  schema,
  context: {
    db
  },
  graphiql: true
}))

app.listen(3000)
