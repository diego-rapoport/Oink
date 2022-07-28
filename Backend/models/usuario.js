const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: 'string',
    senha: 'string',
    })

module.exports = mongoose.model('usuario',usuarioSchema)