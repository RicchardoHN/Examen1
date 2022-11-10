const {Router} = require('express');
const { Getevento, Postevento, putevento, deleteevento } = require('../controllers/evento');
const router = Router();
    
    router.get('/', Getevento)
    router.post('/', Postevento)
    router.put('/', putevento)
    router.delete('/', deleteevento)

    module.exports = router