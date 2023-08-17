const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql')
const port = 3000
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

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM livros'

  db.query(query, (error, data) => {
    if (error) {
      console.log(error)
    }

    const books = data

    res.render('books', { books })
  })
})

app.post('/addclientes', (req, res) => {
  const nome = req.body.nome
  const endereco = req.body.endereco
  const telefone = req.body.telefone // Usando o mesmo nome que no formulário
  const email = req.body.email

  const sql = `INSERT INTO clientes (nome, endereco, numerotel, email) VALUES ('${nome}', '${endereco}', '${telefone}', '${email}')`

  db.query(sql, error => {
    if (error) {
      console.log(error)
    }
    res.redirect('/')
    console.log('Adicionado com sucesso')
  })
})

app.get('/', (req, res) => {
  res.render('home')
})

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'labary'
})

db.connect(error => {
  if (error) {
    console.log(error)
  }

  console.log('bancos de dados conectados com sucesso')

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })
})
