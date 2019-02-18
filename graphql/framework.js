const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql')

const mongoose = require('mongoose')
const framework_M = mongoose.model('framework')

let frameworkType = new GraphQLObjectType({
  name: 'framework',
  fields: {
      _id: {
          type: GraphQLID
      },
      name: {
          type: GraphQLString
      },
      desc: {
          type: GraphQLString
      }
  }
})


const framework = {
  type: new GraphQLList(frameworkType),
  args: {},
  resolve(root, params, options) {
      let frameworkList = framework_M.find({})
      return frameworkList.exec()
  }
}

module.exports = framework