const express = require('express')
const app = express()
const cors = require('cors')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const promisePool = require('./config/db.js')
const ORIGIN_URL = require('./config/index.js')

module.exports = setUp = () => {
  const csrfProtection = csrf({
    cookie: {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'none',
    },
  })

  app.use(cookieParser())

  app.use(
    express.urlencoded({
      extended: true,
    })
  )

  app.use(express.json())

  app.set('view engine', 'pug')
  app.set('trust proxy', 1)

  app.use(
    cors({
      origin: [ORIGIN_URL],
      credentials: true,
      optionsSuccessStatus: 200,
    })
  )

  app.use(csrfProtection)

  app.get('/', async (_, res) => {
    try {
      const [rows, fields] = await promisePool.query('select 1 as num')
      res.render('index', {
        title: 'Hey',
        message: `Hello there!num is ${rows[0].num}`,
      })
    } catch (err) {
      console.log('error:', err)
      res.render('index', {
        title: 'Hey',
        message: `Hello there!`,
      })
    }
  })

  app.use(
    '/api/v1',
    (() => {
      const router = express.Router()
      router.use('/login', require('./api/login.js'))
      router.use('/logout', require('./api/logout.js'))
      router.use('/users', require('./api/users.js'))
      router.use('/users/:id', require('./api/users.js'))
      router.use('/csrf-token', require('./api/csrfToken.js'))
      router.use('/tasks', require('./api/tasks.js'))
      return router
    })()
  )
  return app
}
