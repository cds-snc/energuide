import request from 'supertest'
import graphqlHTTP from 'express-graphql'
import schema from '../src/schema'
import server from '../src/server'
import houses from './data/houses'
import { Database } from 'arangojs'
import Connection from '../src/database'
import houseData from './data/house'

// About the ugliness:
// Since Jest runs tests in parallel, each file needs to create it's own db,
// otherwise test data from one test clobbers test data in another. The result
// nondeterministic tests and general unhappiness.
// TODO: This will need to be cleaned up and most likely shared across tests.

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD

function getFilenameFromPath(path) {
  return path.split('/').slice(-1).join()
}

function dbNameFromFile(filename) {
  return getFilenameFromPath(filename).replace(/\./g, '_') + '_' + Date.now()
}

const url = `http://${username}:${password}@arangodb:8529`
const dbname = dbNameFromFile(__filename)
const conn = new Database({ url })

let db, app, testdb, buildingsCollection

let house_id = houseData[0].house_id

describe('GraphQL API', () => {
  beforeAll(async () => {
    //create a generic connection to the db
    const info = await conn.createDatabase(dbname, [{ username, password }])

    testdb = new Database({ databaseName: dbname, url })

    buildingsCollection = testdb.collection('buildings')

    await buildingsCollection.create()
    // Make sure our db functions use the test database
    app = server.use(
      '/graphql',
      graphqlHTTP({
        schema,
        context: { db: Connection(testdb) },
      })
    )
  })

  afterAll(async () => {
    await conn.dropDatabase(dbname)
  })

  afterEach(async () => {
    await testdb.truncate()
  })

  it('is properly mounted at /graphql', async () => {
    let response = await request(app)
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
      await Promise.all(
        houseData.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )
      let response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            query {
              house(id: "${house_id}") {
                house_id
                aircop
                air50p
              }
            }
        `)
      let { data } = response.body
      expect(data.house.house_id).toEqual(house_id)
    })

    it('returns the current details of the house by default', async () => {
      await Promise.all(
        houseData.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )

      let response = await request(server)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
          query {
            house(id: "${house_id}") {
              house_id
              air50p
            }
          }
        `)
      let { data } = response.body
      expect(data.house.air50p).toEqual('17.2005')
    })

    it('returns the details of the house as of the date provided', async () => {
      await Promise.all(
        houseData.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )

      let response = await request(server)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
          query {
            house(id: "${house_id}" date: "2016-08-04") {
              house_id
              air50p
            }
          }
        `)
      let { data } = response.body
      expect(data.house.air50p).toEqual('18.4639')
    })
  })

  describe('houses(count: n)', () => {
    it('returns an array of houses', async () => {

      await Promise.all(
        houses.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )

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
      expect(data.houses).toHaveLength(2)
    })
  })
})
