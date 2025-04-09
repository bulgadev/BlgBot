const express = require('express')
const app = express()
const port = 3000
const events = require('./event')
require("./index");


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', (req, res) => {
    console.log('cwazy')
    events.emit('alerted')
    res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})