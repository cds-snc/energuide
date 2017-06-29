import { Database } from 'arangojs'
import Connection from '../src/database'
import house from './data/house'

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

let db, buildingsCollection

describe('Database functions', () => {
  beforeAll(async () => {
    //create a generic connection to the db
    const info = await conn.createDatabase(dbname, [{ username, password }])

    let testdb = new Database({ databaseName: dbname, url })

    buildingsCollection = testdb.collection('buildings')

    await buildingsCollection.create()
    // Make sure our db functions use the test database
    db = Connection(testdb)
  })

  afterAll(async () => {
    conn.dropDatabase(dbname)
  })

  describe('getHouseByID', () => {
    it('retrieves the data for a single house given an ID', async () => {
      await buildingsCollection.save(house)
      let result = await db.getHouseByID(house.house_id)
      expect(result.house_id).toEqual(house.house_id)
    })
  })
})
