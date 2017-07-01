import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
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
      },
      type: House,
      resolve: (source, args, { db }, info) => {
        return db.getHouseByID(args.id)
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
      resolve: (source, args, { db }, info) => {
        return db.getHouses(args.count)
      },
    },
  },
})

export default new GraphQLSchema({ query })
