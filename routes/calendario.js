/*
    Rutas de usuarios / Calendario
    host + /api/calendario
*/

const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
//const { validarJWT } = require('../middlewares/validar-jwt');
const { postCalendario, getCalendario, updateCalendario, deleteCalendario } = require('../controllers/calendario');
const { validarCampos } = require('../middlewares/validar-campos');



//router.use(validarJWT); //de aqui en adelante aplica este middlewere

router.get(
    '/',
    [
        
    ],
    getCalendario
);

router.post(
    '/add',
    [
        check('startDate', 'La fecha de inicio es obligatoria.').not().isEmpty(),
        check('endDate', 'La fecha de finalizacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    postCalendario
);

router.post(
    '/update',
    [
        check('startDate', 'La fecha de inicio es obligatoria.').not().isEmpty(),
        check('endDate', 'La fecha de finalizacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    updateCalendario
)

router.get(
    '/del/:id',
    [
    
    ],
    deleteCalendario
)



module.exports = router;