const express = require('express')

const users = require('./users')

const app = express()

const port = 3000

const path = require('path')

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

const pathBase = path.join(__dirname, 'template')

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
