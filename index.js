const express = require('express');
require('dotenv').config();
const cors = require('cors');
const pool = require('./database/config');

const app = express();

//base de datos
//pool();

//cors
app.use(cors());

//dir publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/residentes', require('./routes/residentes'));





app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})