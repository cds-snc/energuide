const graphqlHTTP = require('express-graphql')
const { schema } = require('./src/schema')
const { db } = require('./src/database')
const { server } = require('./src/server')

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: { db },
    graphiql: true,
  })
)

server.listen(3000)
