
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  return res.send(`hello world`);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})