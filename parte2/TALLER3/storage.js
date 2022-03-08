const pool = require('../../bd')

async function obtenerProductos(filtroProducto) {
    let results = null
    if (filtroProducto) {
        results = await pool.query('SELECT * FROM producto WHERE nombre LIKE $1', ['%' + filtroProducto + '%'])
    } else {
        results = await pool.query('SELECT * FROM producto')
    }
    return results.rows

}


async function agregarProducto(producto) {
    let resultado = await pool.query('INSERT INTO producto(id_producto, nombre) VALUES($1, $2)', [producto.id, producto.nombre])
    return producto
}

async function actualizarProducto(producto) {
    let resultado = await pool.query('UPDATE producto SET nombre=$1 WHERE id_producto = $2', [producto.nombre, producto.id])
    return producto
}

async function eliminarProducto(producto) {
    let resultado = await pool.query('DELETE FROM producto WHERE id_producto = $1', [producto.id])
    return producto
}


module.exports = {
    obtener: obtenerProductos,
    agregar: agregarProducto,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}