const request = require('supertest')
const graphqlHTTP = require('express-graphql')
const { schema } = require('../src/schema')
const { server } = require('../src/server')
const { house } = require('./data/house')

let houseMock = jest.fn().mockReturnValueOnce(house)

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      db: {
        getHouseByID: houseMock,
      },
    },
  })
)

describe('GraphQL API', () => {
  it('is properly mounted at /graphql', async () => {
    let response = await request(server)
      .post('/graphql')
      .set('Content-Type', 'application/graphql; charset=utf-8').send(`
      query {
      house(id: "${house._id}") {
        aircop
      }
    }
  `)
    expect(response.status).toEqual(200)
  })
})
