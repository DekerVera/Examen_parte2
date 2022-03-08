const storage = require('./storage')

function obtenerProductos() {
    return new Promise((resolve, reject) => {
        resolve(storage.obtener())
    })
}

function agregarProducto(producto) {
    return new Promise((resolve, reject) => {
        if (producto.id == null || producto.nombre == null) {
            return reject('No existen los datos')
        }
        resolve(storage.agregar(producto))
    })
}

function actualizarProducto(producto) {
    return new Promise((resolve, reject) => {
        if (producto.id == null || producto.nombre == null) {
            return reject('No existen los datos.')
        }
        resolve(storage.actualizar(producto))
    })
}

function eliminarProducto(producto) {
    return new Promise((resolve, reject) => {
        if (producto.id == null) {
            return reject('No existen los datos.')
        }
        resolve(storage.eliminar(producto))
    })
}

module.exports = {
    obtenerProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
}