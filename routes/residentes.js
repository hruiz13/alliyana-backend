/*
    Rutas de usuarios / Residentes
    host + /api/residentes
*/

const {Router} = require('express');
const router = Router();
//const { validarJWT } = require('../middlewares/validar-jwt');
const { getResidentes } = require('../controllers/residentes');



//router.use(validarJWT); //de aqui en adelante aplica este middlewere

router.get(
    '/',
    [
        
    ],
    getResidentes
);


module.exports = router;