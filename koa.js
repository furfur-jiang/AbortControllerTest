const Koa = require('koa')
const router = require('koa-router')() //注意：引入的方式
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())
//路由使用
let data = {
  name: 'fur',
}
router.get('/', async (ctx, next) => {
  ctx.body = data
  await next()
})
//跨域配置
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  await next()
})
app.use(router.routes()).use(router.allowedMethods()) //作用：启动路由
app.listen(4000, () => {
  console.log('starting at port 4000')
})
