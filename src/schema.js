import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'
import House from './types/House'

var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    house: {
      args: {
        id: {
          description: 'id of the house',
          type: new GraphQLNonNull(GraphQLID),
        },
        date: {
          description: 'the status of the house as of this date: YYYY-MM-DD',
          type: GraphQLString,
        },
      },
      type: House,
      resolve: async (source, { id, date }, { db }, info) => {
        return db.getHouseByID(id, (date || new Date))
      },
    },
    houses: {
      args: {
        count: {
          description: 'the number of houses you would like',
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      type: new GraphQLList(House),
      resolve: async (source, args, { db }, info) => {
        return db.getHouses(args.count)
      },
    },
  },
})

export default new GraphQLSchema({ query })
