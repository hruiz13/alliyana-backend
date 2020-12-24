const { response } = require('express');
const pool = require('../database/config');

const getResidentes = async(req, res=response) =>{

    const id = req.id; //user ID

    const query = `
        SELECT * FROM residentes
        `
    let existe = '';
    try {
        existe = await pool.query(query);
    } catch (error) {
        return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }

    res.status(201).json({
        ok: true,
        existe
    });

}


module.exports = {
    getResidentes
}