// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express()

server
// utilizando os arquivos estaticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/pages/', pages.index)
.get('/pages/orphanage', pages.orphanage)
.get('/pages/orphanages', pages.orphanages)
.get('/pages/create-orphanage', pages.createOrphanage)

// ligar o servidor
server.listen(5500)
