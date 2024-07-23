
const productoControlador = require('../controladores/productoControlador');
module.exports = function(app) {
    app.get('/api', productoControlador.index);
    app.post('/api/productos', productoControlador.CrearProducto)
}

module.exports = productoRutas;