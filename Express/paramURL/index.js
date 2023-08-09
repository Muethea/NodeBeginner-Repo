const express = require('express')

const app = express()

const port = 3001

const path = require('path')

const pathBase = path.join(__dirname, 'template')

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  console.log(`Estamos buscando pelo usuario: ${id}`)

  res.sendFile(`${pathBase}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
