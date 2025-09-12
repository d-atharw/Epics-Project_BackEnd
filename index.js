require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send(<h1>'Hello World!'</h1>)
})

app.get('/chama', (req, res) => {
  res.send('ALEX POATAN PERIERA')
})

app.get('/login', (req, res) => {
  res.send('CHAMA')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})