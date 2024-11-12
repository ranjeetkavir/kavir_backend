require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kavir', (req, res) => {
    res.send('succeded')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>yes logged in </h1>')
  })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})