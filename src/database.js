import { aql, Database } from 'arangojs'

const Connection = connection => {
  return {
    getHouseByID: async (id, date = new Date()) => {
      let query = aql`
        let buildings = (
        FOR building IN buildings
          FILTER building.house_id == ${id}
          FILTER building.creationdate <=  ${date}
              SORT building.creationdate ASC
          RETURN building
        )
        RETURN MERGE(buildings)
      `
      let results = await connection.query(query)
      return results.next()
    },
    getHouses: async (count, date = new Date()) => {
      let query = aql`
        let ids = (
          FOR building IN buildings
          COLLECT id = building.house_id
            LIMIT ${count}
            RETURN id
        )
        FOR id IN ids
          RETURN MERGE(
            FOR building IN buildings
              FILTER building.house_id == id
              FILTER building.creationdate <= ${date}
              SORT building.creationdate ASC
                RETURN building
          )
      `
      let results = await connection.query(query)
      return results.all()
    },
    getDates: async id => {
      let query = aql`
        FOR building IN buildings
          FILTER building.house_id == ${id}
          SORT building.creationdate ASC
          RETURN building.creationdate
      `
      let results = await connection.query(query)
      return results.all()
    },
  }
}

export default Connection
