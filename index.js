const Koa = require('koa') 
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
// mongodb connect
require('./mongodb')

const router = require('./router')
const app = new Koa()
const port = 3000

const staticPath = __dirname + '/front'

app.use(bodyParser())

app.use(static(staticPath))

app.use(router.routes()).use(router.allowedMethods())

app.listen(port)

console.log('graphql-demo server listen port: ' + port)