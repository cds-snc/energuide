import graphqlHTTP from 'express-graphql'
import { schema } from './src/schema'
import { Database } from 'arangojs'
import Connection  from './src/database'
import { server } from './src/server'

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD

const db = Connection(new Database({
  databaseName: 'nrcan',
  url: `http://${username}:${password}@arangodb:8529`,
}))

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: { db },
    graphiql: true,
  })
)

server.listen(3000)
