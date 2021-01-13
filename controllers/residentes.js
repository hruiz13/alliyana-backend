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

const postResidentes = async(req, res=response) =>{

    const {nombre, email, celular, lote} = req.body;

    const query1 = `
            INSERT INTO residentes (nombre, email, celular, lote) 
            VALUES (?, ?, ?, ?)`;

    let result;

    try {
        result = await pool.query(query1, [nombre,email,celular,lote]);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Ususario guardado'
    });

}

const updateResidentes = async(req, res=response) =>{

    const {nombre, email, celular, lote} = req.body;
    const id = req.params.id;

    const query1 = `
            UPDATE residentes
            SET nombre = ?, email= ?, celular=?, lote=?
            WHERE id= ?`;

    let result;

    try {
        result = await pool.query(query1, [nombre,email,celular,lote, id]);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Ususario actualizado'
    });

}

const delResidentes = async(req, res=response) =>{

    const id = req.params.id;

    const query1 = `
            DELETE FROM residentes 
            WHERE id = ${id} `;

    let result;

    try {
        result = await pool.query(query1);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Usuario Eliminado'
    });

}


module.exports = {
    getResidentes,
    updateResidentes,
    postResidentes,
    delResidentes
}