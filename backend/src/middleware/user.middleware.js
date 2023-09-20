// authMiddleware.js, la autentificacion con el token jswt, la contante nos permite que en las rutas o en otros sitio tenga que estar esta verificacion
require('dotenv').config();

const auth0 = require('auth0');

const { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN } = process.env;

const auth0Middleware = () => {
  const auth0Verifier = new auth0.ManagementClient({
    // usas la conf de auth0
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
  });

  return async (req, res, next) => {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      if (!accessToken) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token de acceso no proporcionado.' });
      }

      const userInfo = await auth0Verifier.getAccessTokenInfo({ accessToken });

      if (!userInfo || !userInfo.sub) {
        return res.status(401).json({ message: 'Acceso no autorizado. Token de acceso no válido.' });
      }

      // Agrega los datos del usuario autenticado a req.user
      req.user = userInfo;

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
};

module.exports = auth0Middleware;