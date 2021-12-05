require('dotenv').config()
const { SECRET_KEY } = process.env
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
