const express = require('express')
const app = express()
const port = 3000
const events = require('./event')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', (req, res) => {
    console.log('cwazy')
    events.emit('alerted')
    res.redirect('/')
})

app.post('/userinp', (req, res) => {
  const inp = req.body.UserInp
  console.log(inp)
  events.emit('inp', inp)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

