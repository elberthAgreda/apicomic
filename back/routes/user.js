// Requires
var express = require('express');

var app = express();

var User = require('../models/user');

// ========================================
// Obtener Usuarios
// ========================================
app.get('/', (req, res, next) => {
    User.find({}, 'name email img role')
        .exec(
            (err, users) => {
                if ( err ) {
                    return res.status(500).json({
                        ok: false,
                        message: 'Error cargando usuarios',
                        errors: err
                    });
                }
                res.status(200).json({
                    ok: true,
                    users
                }
            );
        }
    );
});

// ========================================
// Crear Usuarios
// ========================================
app.post('/', (req, res) => {
    var body = req.body;
    var user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        img: body.img,
        role: body.role
    });
    user.save( ( err, usuarioGuardado ) => {
        if ( err ) {
            return res.status(500).json({
                ok: false,
                message: 'Error creando el usuario',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            user: usuarioGuardado
        });
    });
});


module.exports = app;