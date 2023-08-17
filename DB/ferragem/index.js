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

app.post('/addclientes', (req, res) => {
  const nome = req.body.nome
  const endereco = req.body.endereco
  const telefone = req.body.telefone // Usando o mesmo
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
  database: 'ferragem'
})

db.connect(error => {
  if (error) {
    console.log('Nao foi possivel conectar com o banco de dados')
  }
  console.log('Conectado com sucesso')

  app.listen(3000)
})
