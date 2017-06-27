const { aql, Database } = require('arangojs')

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD

const db = new Database({
  databaseName: 'nrcan',
  url: `http://${username}:${password}@127.0.0.1:8529`,
})

module.exports.db = {
  getHouseByID: async id => {
    let query = aql`
      FOR building IN buildings
        FILTER building._key == ${id}
          RETURN building
      `
    let results = await db.query(query)
    return results.next()
  },
}
