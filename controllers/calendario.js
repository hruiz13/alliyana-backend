const { response } = require('express');
const pool = require('../database/config');

const getCalendario = async(req, res=response) =>{

    const id = req.id; //user ID

    const query = `
        SELECT * FROM calendario
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

const postCalendario = async(req, res=response) =>{

    const {title, startDate, endDate, allDay, rRule, roomId, members, notes} = req.body;

    const query1 = `
            INSERT INTO calendario (title,startDate,endDate,allDay,rRule,roomId,members,notes) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    let result;

    try {
        result = await pool.query(query1, [title,startDate,endDate,allDay,rRule,roomId,members,notes]);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Calendario agregado'
    });

}

const updateCalendario = async(req, res=response) =>{

    const {title, startDate, endDate, allDay, rRule, roomId, members, notes, id} = req.body;

    
    const query1 = `
            UPDATE calendario
            SET title=?,startDate=?,endDate=?,allDay=?,rRule=?,roomId=?,members=?,notes=?
            WHERE id= ?`;

    let result;

    try {
        result = await pool.query(query1, [title,startDate,endDate,allDay,rRule,roomId,members,notes,id]);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Calendario actualizado'
    });

}

const deleteCalendario = async(req, res=response) =>{

    const id = req.params.id;
    
    const query1 = `
            DELETE FROM calendario
            WHERE id = ?`;

    let result;

    try {
        result = await pool.query(query1, [id]);
    } catch (error) {
            return res.status(400).json({
                ok: false,
                msg: 'Error interno, contactel al administrador.',
                error
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'Calendario eliminado'
    });

}


module.exports = {
    getCalendario,
    postCalendario,
    updateCalendario,
    deleteCalendario
}