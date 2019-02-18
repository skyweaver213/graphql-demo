const Router = require('koa-router')
const router = new Router()
const {
    graphqlKoa,
    graphiqlKoa
} = require('graphql-server-koa')
const {
    proLanguageFetch,
    proLanguageSave
} = require('../server/proLanguage')
const {
    frameworkFetch,
    frameworkSave
} = require('../server/framework')
const {
    toolFetch,
    toolSave
} = require('../server/tool')

const initDB = require('../server/initDB')

const schema = require('../graphql/schema')

router.get('/initDB', initDB)
    .get('/proLanguageFetch', proLanguageFetch).post('/proLanguageSave', proLanguageSave)
    .get('/frameworkFetch', frameworkFetch).post('/frameworkSave', frameworkSave)
    .get('/toolFetch', toolFetch).post('/toolSave', toolSave)


router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({
            schema: schema
        })(ctx, next)
    })
    .get('/graphql', async (ctx, next) => {
        await graphqlKoa({
            schema: schema
        })(ctx, next)
    })
    .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({
            endpointURL: '/graphql'
        })(ctx, next)
    })

module.exports = router