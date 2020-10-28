//importar dependencias
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
// iniciando o express
const server = express()
server
    // utilizar arquivo estaticos
    .use(express.static('public'))
    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //criar rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)


//ligar servidor
server.listen(5500)