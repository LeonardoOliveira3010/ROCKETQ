const express = require('express')
const app = express()
const route = require('./route')
const path = require('path')

app.use(express.static('public'))

// Configuração do EJS utilizando o modulo path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(route)


app.listen(3000, () => console.log('Servidor rodando: http://localhost:3000'))

