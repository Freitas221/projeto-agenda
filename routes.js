const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactControllers = require("./src/controllers/contactController")

route.get('/', homeController.paginaInicial)

route.get('/contact', contactControllers.contactUs)
route.get('/usuarios/:userData?/:extraData?', homeController.extraData)

route.post('/', homeController.submitForm)

module.exports = route