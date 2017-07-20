import { Database } from 'arangojs'
import Connection from '../src/database'
import houseData from './data/house'
import housesData from './data/houses'

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

let db, testdb, buildingsCollection

describe('Database functions', () => {
  beforeAll(async () => {
    //create a generic connection to the db
    const info = await conn.createDatabase(dbname, [{ username, password }])

    testdb = new Database({ databaseName: dbname, url })

    buildingsCollection = testdb.collection('buildings')

    await buildingsCollection.create()
    // Make sure our db functions use the test database
    db = Connection(testdb)
  })

  afterAll(async () => {
    await conn.dropDatabase(dbname)
  })

  afterEach(async () => {
    await testdb.truncate()
  })

  describe('getHouseByID', () => {
    it('retrieves the data for a single house given an ID', async () => {
      let house_id = houseData[0].house_id

      await Promise.all(
        houseData.map(async datum => {
          return buildingsCollection.save(datum)
        })
      )

      let result = await db.getHouseByID(house_id)
      expect(result.house_id).toEqual(house_id)
    })

    it('returns the state of the building as of the date provided', async () => {
      let house_id = houseData[0].house_id

      await Promise.all(
        houseData.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )

      let result = await db.getHouseByID(house_id, '2016-07-30')
      expect(result.air50p).toEqual('18.4639')
    })
  })

  describe('getHouses', () => {
    it('returns a specified number of houses', async () => {
      await Promise.all(
        housesData.map(async datum => {
          return await buildingsCollection.save(datum)
        })
      )
      let result = await db.getHouses(2)
      expect(result.length).toEqual(2)
    })
  })
})
