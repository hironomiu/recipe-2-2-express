const setUp = require('./app')
const PORT = process.env.PORT || 5000

const app = setUp()
app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
