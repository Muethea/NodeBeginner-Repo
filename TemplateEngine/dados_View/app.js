const express = require('express')
const { engine } = require('express-handlebars')
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const user = {
    name: 'Fernando dos Santos',
    surname: 'Muethea'
  }

  const auth = true
  res.render('home', { auth })
})

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})
