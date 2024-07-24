const mongoose = require('mongoose');

const CollecionProductos = new mongoose.Schema({
    titulo: {
        type: String,
    },
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
}, { timestamps: true });

const Productos = mongoose.model('productos', CollecionProductos);

module.exports = Productos;