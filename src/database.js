import { aql, Database } from 'arangojs'

const Connection = connection => {
  return {
    getHouseByID: async id => {
      let query = aql`
      FOR building IN buildings
        FILTER building._key == ${id}
          RETURN building
      `
      let results = await connection.query(query)
      return results.next()
    },
  }
}

export default Connection
