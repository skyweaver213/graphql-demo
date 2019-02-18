const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} = require('graphql')

const mongoose = require('mongoose')
const tool_M = mongoose.model('tool')

let toolType = new GraphQLObjectType({
    name: 'tool',
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


const tool = {
    type: new GraphQLList(toolType),
    args: {},
    resolve(root, params, options) {
        let toolList = tool_M.find({})
        return toolList.exec()
    }
}

module.exports = tool