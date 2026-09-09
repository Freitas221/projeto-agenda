const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

const {loginRequired} = require('./src/middlewares/middleware')


route.get('/', homeController.index)

route.get('/login', loginController.index)

route.post('/login/login', loginController.login)
route.post('/login/register', loginController.register)

route.get('/login/logout', loginController.logout)
route.get('/contato', contatoController.index)
route.post('/contato/register', loginRequired, contatoController.register)
route.get('/contato/:id', loginRequired, contatoController.editContact)
route.post('/contato/edit/:id', loginRequired, contatoController.edit)

module.exports = route