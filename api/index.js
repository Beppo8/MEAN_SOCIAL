'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 4800;

// Conexion Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/red-social-mean', { useNewUrlParser: true })
    .then(() => {
        console.log("DB is connected")

        // Crear Servidor
        app.listen(port, () => {
            console.log('Server on port 4800')
        });

    })
    .catch(err => console.log(err));