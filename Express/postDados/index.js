const express = require('express')

const app = express()

const port = 3001

const path = require('path')

const basePath = path.join(__dirname, 'template')

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {

  console.log(req.body)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})
