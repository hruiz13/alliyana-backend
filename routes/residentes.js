/*
    Rutas de usuarios / Residentes
    host + /api/residentes
*/

const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
//const { validarJWT } = require('../middlewares/validar-jwt');
const { getResidentes, postResidentes, delResidentes, updateResidentes } = require('../controllers/residentes');
const { validarCampos } = require('../middlewares/validar-campos');



//router.use(validarJWT); //de aqui en adelante aplica este middlewere

router.get(
    '/',
    [
        
    ],
    getResidentes
);

router.post(
    '/add',
    [
        check('nombre', 'El usuario es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio y/o email incorrecto.').isEmail(),
        check('celular', 'El celular es obligatorio y/o celular incorrecto.').not().isEmpty(),
        check('lote', 'El lote es obligatorio y/o lote incorrecto.').isNumeric(),
        validarCampos
    ],
    postResidentes
);

router.post(
    '/edit/:id',
    [
        check('nombre', 'El usuario es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio y/o email incorrecto.').isEmail(),
        check('celular', 'El celular es obligatorio y/o celular incorrecto.').not().isEmpty(),
        check('lote', 'El lote es obligatorio y/o lote incorrecto.').isNumeric(),
        validarCampos
    ],
    updateResidentes
);

router.delete(
    '/del/:id',
    [
        
    ],
    delResidentes
);


module.exports = router;