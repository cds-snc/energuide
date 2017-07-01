import request from 'supertest'
import graphqlHTTP from 'express-graphql'
import schema from '../src/schema'
import server from '../src/server'
import house from './data/house'
import houses from './data/houses'

let houseMock = jest.fn().mockReturnValueOnce(house)
let housesMock = jest.fn().mockReturnValueOnce(houses)

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      db: {
        getHouseByID: houseMock,
        getHouses: housesMock,
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
        __schema {
            types {
                    name
                  }
            }
      }
  `)
    expect(response.status).toEqual(200)
  })

  describe('house(id: x)', () => {
    it('returns a house with the specified id', async () => {
      let response = await request(server)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
      query {
        house(id: "${house._id}") {
          house_id
          aircop
        }
      }
  `)
      let { data } = response.body
      expect(data.house.house_id).toEqual(house.house_id)
    })
  })

  describe('houses(count: n)', () => {
    it('returns an array of houses', async () => {
      let response = await request(server)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
      query {
        houses(count: 2) {
          house_id
          aircop
        }
      }
  `)
      let { data } = response.body
      expect(houses).toHaveLength(2)
    })
  })
})
