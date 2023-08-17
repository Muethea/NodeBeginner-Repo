const express = require('express')

const { engine } = require('express-handlebars')

const mysql = require('mysql')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home')
})

app.use(express.static('public'))

const contion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
})

contion.connect(function (err){
  if (err) {
    console.log(err)
  }
  console.log('Connectacto ao Mysql')
  app.listen(3000)
})

