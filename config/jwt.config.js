require('dotenv').config()
const { SECRET_KEY ,PORT } = process.env
module.exports = {
  jwt: {
    secret:
      SECRET_KEY,
    options: {
      algorithm: "HS256",
      expiresIn: "20m",
    },
  },
}
