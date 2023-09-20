const User = require('../models/user.model');
require('dotenv').config();
const dbConn = require('../../config/db.config');
const auth0 = require('auth0');
const mysql = require('mysql')
const bcrypt = require('bcrypt');



const { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN } = process.env;

const auth0Verifier = new auth0.ManagementClient({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
});

exports.findAll = function (req, res) {
    User.findAll(function (err, User) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', User);
        res.send(User);
    });
};

// exports.saveUserInfo = (req, res) => {
//     const { id, username, email } = req.body;
//     console.log('ID:', id);
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log(req.body);

//     // Inserta la información en MySQL
//     const sql = 'INSERT INTO users (auth0_id, username, email) VALUES (?, ?, ?)';
//     const values = [id, username, email];

//     dbConn.query(sql, values, (error, results) => {
//         if (error) {
//             console.error('Error al insertar en MySQL:', error);
//             res.status(500).json({ error: 'Error al insertar en MySQL' });
//         } else {
//             console.log('Usuario insertado en MySQL con éxito');
//             res.status(200).json({ message: 'Usuario insertado en MySQL con éxito' });
//         }
//     });
// };

// exports.saveUserInfo = async (req, res) => {
//     try {
//         // Obtener la información del usuario autenticado desde Auth0
//         const accessToken = req.headers.authorization.split(" ")[1];
//         const userInfo = await auth0Verifier.getAccessTokenInfo({ accessToken });
//         const { auth0_id, username, email } = req.body;

//         if (!userInfo || !userInfo.sub) {
//             return res.status(401).json({ message: "Acceso no autorizado." });
//         }

//         // Aquí puedes utilizar la conexión dbConn para insertar o actualizar la información del usuario
//         //   const { sub, email, name } = userInfo;
//         const sql = "INSERT INTO users (auth0_id, username, email) VALUES (?, ?, ?)";
//         const values = [auth0_id, username, email];

//         dbConn.query(sql, values, (err, result) => {
//             if (err) {
//                 console.error("Error al guardar la información del usuario:", err);
//                 return res.status(500).json({ message: "Error interno del servidor" });
//             }

//             return res.json({ message: "Información del usuario guardada correctamente." });
//         });
//     } catch (error) {
//         console.error("Error al obtener la información del usuario:", error);
//         return res.status(500).json({ message: "Error interno del servidor" });
//     }
// };


exports.create = function (req, res) {
    const new_User = new User(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_User, function (err, User) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "User added successfully!", data: User });
        });
    }
};

exports.findById = function (req, res) {
    User.findById(req.params.id, function (err, User) {
        if (err)
            res.send(err);
        res.json(User);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.update(req.params.id, new User(req.body), function (err, User) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }
};

exports.deleteUser = function (req, res) {
    User.deleteUser(req.params.id, function (err, User) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'User successfully deleted' });
    });
};

// module.exports = {
//     login,
//     findAll,
//     create,
//     findById,
//     update,
//     deleteUser
// };
