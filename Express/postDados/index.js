const express = require('express')

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

app.post('/users/save', (req, res) => {
  console.log(req.body)

  const nome = req.body.name

  const age = req.body.age

  console.log(`O nome é ${nome} e a idade é ${age}`)

  res.sendFile(`${pathBase}/userForm.html`)
})

app.get('/users/add', (req, res) => {
  res.sendFile(`${pathBase}/userForm.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
