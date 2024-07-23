const Productos = require('../modelos/productoModelo');

module.exports.CrearProducto = (req, res) => {
  const { titulo, precio, descripcion } = req.body;

  Productos.create({
    titulo,
    precio,
    descripcion,
})
    .then(producto => res.json(producto))
    .catch(err => {
        console.error("Error al crear el producto:", err);
        res.status(500).json({ message: "Algo salió mal al crear el producto", error: err });
    });
};
