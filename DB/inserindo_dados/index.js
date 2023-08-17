const express = require('express')

const { engine } = require('express-handlebars')

const mysql = require('mysql')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/inserir', (req, res) => {
  const title = req.body.title
  const pages = req.body.pages
  const query = `INSERT INTO books (title, pages) values ('${title}', '${pages}')`

  db.query(query, err => {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

app.use(express.static('public'))

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
})

db.connect(function (err) {
  if (err) {
    console.log('Nao foi possivel conectar')
  }

  console.log('Banco de dados contectado com sucesso')
  app.listen(3000)
})
