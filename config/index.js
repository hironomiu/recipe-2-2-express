const mysql = require('mysql2')
require('dotenv').config()

const ORIGIN_URL = process.env.ORIGIN_URL

module.exports = ORIGIN_URL
