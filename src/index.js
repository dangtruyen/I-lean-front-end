
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  return res.send(`12`);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})