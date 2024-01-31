const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clienteController')

module.exports = function(){
    
    router.post('/clientes',clientesController.nuevo)

    router.get('/clientes/:id',clientesController.clientePorId)

    router.get('/clientes',clientesController.listado)

    router.put('/clientes/:id',clientesController.actualizar)

    router.delete('/clientes/:id',clientesController.eliminar)

    return router;
}