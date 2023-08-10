const express = require('express')

const router = express.Router()

const path = require('path')

const pathBase = path.join(__dirname, '../template')

router.post('/save', (req, res) => {
  console.log(req.body)

  const nome = req.body.name

  const age = req.body.age

  console.log(`O nome é ${nome} e a idade é ${age}`)

  res.sendFile(`${pathBase}/userForm.html`)
})

router.get('/add', (req, res) => {
  res.sendFile(`${pathBase}/userForm.html`)
})

router.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

module.exports = router
