const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

const authMiddleware = require('../middleware/user.middleware')

// Retrieve all employees
router.get('/getAll' ,userController.findAll);
// router.get('/', authMiddleware() ,userController.findAll);
//Take info users auth0
// router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     authController.login(email, password, (err, user) => {
//         if (err) {
//             return res.status(500).json({ error: 'Error en la autenticación, no se envio datos' });
//         }
//         res.json({ user });
//     });
// });
// router.post('/perfil', userController.saveUserInfo);

// Create a new employee
// router.post('/perfil', userController.saveUserInfo); //--------------esta todo junto en el server.js
// Retrieve a single employee with id
router.get('/:id', userController.findById);
// Update a employee with id
router.put('/:id', userController.update);
// Delete a employee with id
router.delete('/:id', userController.deleteUser);
module.exports = router