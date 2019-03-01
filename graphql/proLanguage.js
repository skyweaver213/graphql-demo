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
        },
        uid: {
            type: GraphQLString
        },
        key: {
            type: GraphQLString
        }
    }
})


const proLanguage = {
    type: new GraphQLList(proLanguageType),
    args: {
        uid: {
            type : GraphQLString,
            description: 'The id of the proLanguage'
        },
        key: {
            type: GraphQLString
        }
    },
    async resolve (root, args, options)  {
        console.log('root ---------: ', root , ' args: ', args,  ' options: ', options)
        let proLanguageList = proLanguage_M.find({})
        let res = await proLanguageList.exec() || []
   
        // Test args uid and key
        let temp_res = res.map((item ) => {
            let temp_item = item
            if (args.uid) {
                temp_item['uid'] = args.uid
            } 
            if (args.key) {
                temp_item['key'] = args.key
            }
            return temp_item
        })

        return temp_res
    }
}

module.exports = proLanguage