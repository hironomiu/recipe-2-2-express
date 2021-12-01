const mysql = require('mysql2')
require('dotenv').config()
const pool = mysql.createPool({
  connectionLimit: 5,
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USERNAME || 'appuser',
  password: process.env.DB_PASSWORD || 'mysql',
  database: process.env.DB_NAME || 'test',
  port: process.env.DB_PORT || 3306
})

module.exports = promisePool = pool.promise()
