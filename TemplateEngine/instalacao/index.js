const express = require('express')

const app = express()

const port = 3000

const path = require('path')

const pathBase = path.join(__dirname, 'template')



app.get('/', (req, res) => {
  res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {
  console.log(`Server running port ${port}`)
})
