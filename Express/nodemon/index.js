const express = require('express')

const app = express()

const port = 3000

const path = require('path')

const pathBase = path.join(__dirname, 'template')

const checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Esta logado')
    next()
  } else {
    console.log('Nao esta logado')
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Esta rodando na porta ${port}`)
})
