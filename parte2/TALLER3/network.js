const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res) {
    const filtroProducto = req.query.texto || null
    controller.obtenerProductos(filtroProducto)
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error))
})

routes.post('/', function(req, res) {
    controller.agregarProducto(req.body)
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error))
})

routes.patch('/', function(req, res) {
    controller.actualizarProducto(req.body)
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error))
})

routes.delete('/', function(req, res) {
    controller.eliminarProducto(req.body)
        .then((data) => response.success(req, res, data))
        .catch((error) => response.error(req, res, error))
})

module.exports = routes