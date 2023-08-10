const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// ... outras configurações e rotas ...

app.get('/', (req, res)=>{
  res.render('home', {layout: false})
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
