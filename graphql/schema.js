const {
    GraphQLSchema,
    GraphQLObjectType
  } = require('graphql') 
  
  let proLanguage = require('./proLanguage') 
  const framework = require('./framework') 
  const tool = require('./tool') 
  
  module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Queries',
      fields: {
        proLanguage,
        framework,
        tool
      }
    })
  })
  