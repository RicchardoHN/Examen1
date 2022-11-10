const {Router} = require('express');
const { Getfecha, Postfecha, putfecha, deletefecha } = require('../controllers/fecha');
const router = Router();
    
    router.get('/', Getfecha)
    router.post('/', Postfecha)
    router.put('/', putfecha)
    router.delete('/', deletefecha)

    module.exports = router