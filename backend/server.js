const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes')
const app = express();

const fs = require('fs'); // un modulo de node.js que sirve para manipular los archivos imagen

const port = process.env.PORT || 5000;
const dbConn = require('./config/db.config');

app.use(cors());
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());

// ---enviar datos del dominio de auth0 
app.get('/login', (req, res) => {
  console.log('Recibida solicitud en /login');
  const auth0Config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET : process.env.AUTH0_CLIENT_SECRET,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  };
  res.json(auth0Config);
});


//--- envia los datos del usuario
app.post('/perfil', (req, res) => {
console.log('Solicitud POST recibida en /perfil');
const { id, username, email } = req.body;
const values = [id, username, email];

const sql = 'INSERT INTO users (auth0_id, username, email) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE username = VALUES(username), email = VALUES(email)';
dbConn.query(sql, values, (err, result) => {
  if (err) {
    console.log("error: ", err);
    res.status(500).send("Error en la inserción o actualización de datos.");
  } else {
    if (result.affectedRows > 0) {
      // Se insertó un nuevo registro o se actualizó uno existente
      console.log("Usuario insertado o actualizado con éxito.");
      res.status(200).send("Usuario insertado o actualizado con éxito.");
    } else {
      // No se insertó ni se actualizó ningún registro (tal vez no había cambios)
      console.log("Ningún cambio en la base de datos.");
      res.status(200).send("Ningún cambio en la base de datos.");
    }
  }
});
});

// --- Crear un jugador
app.post('/CrearJugador', (req, res) => {
  const { nombre, userId } = req.body;
  const imagenBuffer = req.file.buffer; // la imagen esta por serparado por el cambio de formato a binario

  const sql = 'INSERT INTO players (username, auth0_id,imagen) VALUES (?, ?, ?)';
  const values = [nombre, userId,imagenBuffer]; // Utiliza el auth0_id como valor

  // Ejecuta la consulta SQL para insertar el jugador
  dbConn.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar jugador en MySQL: ', err);
      res.status(500).json({ error: 'Error al insertar jugador' });
      return;
    }else {
      // No se insertó ni se actualizó ningún registro (tal vez no había cambios)
      console.log("Jugador insertado");
         // ID del jugador insertado
    const jugadorId = result.insertId;
    
    // Responde con el ID del jugador insertado
    res.status(200).json({ jugadorId });
    }
  });
});

// ---Enviar datos del jugadora  frontend
app.get('/MostrarJugadors/:userId', (req, res) => {
  const userId = req.params.userId; // user id del auth0 del usuario que esta en la web

// app.get('/MostrarJugadors', (req, res) => {
//   const { userId } = req.body;

  // const auth0Id = req.user.sub; 

  // const { id, username, email } = req.body;

  const sql = 'SELECT username,imagen FROM players WHERE auth0_id = ?';
  const values = [userId]; // Utiliza el auth0_id como valor

  // const sql = 'INSERT INTO players (username) VALUES (?)';
  // const values = [nombre ]; // Utiliza el auth0_id como valor

  dbConn.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al enviar jugador a Frontend: ', err);
      res.status(500).json({ error: 'Error al enviar jugador a Frontend' });
      return;
    }else {
      // No se insertó ni se actualizó ningún registro (tal vez no había cambios)
      console.log("Api Jugadore enviado");
         // ID del jugador insertado
    const jugadorId = result.insertId;
    
    // Responde con el ID del jugador insertado
    res.status(200).json({ jugadorId });
    }
  });
});

app.use('/', userRoutes)

app.get('/', (req, res) => {
  res.send( 'Api conectad')
});

app.post('/', (req, res) => {
  res.send('datos guardado')
});

app.get('/protected', async (req, res) => { //sirve para ver los datos del usuario autenticado
  try {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Acceso no autorizado. Token de acceso no proporcionado.' });
    }
    
    // Dividir el encabezado de autorización en base al espacio
    const parts = authorizationHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Acceso no autorizado. Token de acceso no válido.' });
    }

    const accessToken = parts[1];

    // Ahora que tenemos el token, podemos hacer la solicitud a la URL de userinfo de Auth0
    const response = await axios.get('https://dev-lgz8outtbace26ob.us.auth0.com/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userinfo = response.data;

    // Aquí puedes hacer lo que necesites con la información del usuario
    // userinfo contiene los datos del usuario autenticado

    res.json(userinfo);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// ---escuchar el puerto
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 