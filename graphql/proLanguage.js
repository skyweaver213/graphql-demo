const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} = require('graphql')

const mongoose = require('mongoose')
const proLanguage_M = mongoose.model('proLanguage')

let proLanguageType = new GraphQLObjectType({
    name: 'proLanguage',
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


const proLanguage = {
    type: new GraphQLList(proLanguageType),
    args: {},
    resolve(root, params, options) {
        let proLanguageList = proLanguage_M.find({})
        return proLanguageList.exec()
    }
}

module.exports = proLanguage