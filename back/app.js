// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

// Inicializacion
var app = express();


// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Import Routes
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');


// Conexión a BD
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/comicApp')
        .then(() => {
            console.log('Conectado con la BD');
        })
        .catch (err => {
            console.log(err);
            process.exit();
        });


// Import Routes
app.use('/usuarios', userRoutes);
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
