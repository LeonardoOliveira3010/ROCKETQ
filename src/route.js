const express = require('express')

const route = express.Router()

route.get('/home', (req, res) => res.render('index'))

route.get('/room', (req, res) => res.render('room'))

route.get('/create-pass', (req, res) => res.render('create-pass'))

// Fomato que o formulario do modal deve passar a informação


module.exports = route
