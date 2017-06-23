const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const { House } = require('./types/House')

var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    house: {
      args: {
        id: {
          description: 'id of the house',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      type: House,
      resolve: (source, args, { db }, info) => {
        return db.getHouseByID(args.id)
      },
    },
  }
})

module.exports.schema = new GraphQLSchema({ query })
