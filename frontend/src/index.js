import './styles/index.css';
import * as ReactDOMClient from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import { Auth0Provider} from '@auth0/auth0-react';
import App from './App';
import axios from 'axios';

function Auth0ProviderWithConfig() {
  const [auth0Config, setAuth0Config] = useState(null);

  useEffect(() => {
    // Realizar una solicitud al backend para obtener la configuración de Auth0
    axios.get('http://localhost:5000/login') // tiene que concidir con la que he hecho en el backend(lo que puse en el app.get)
      .then((response) => {
        setAuth0Config(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la configuración de Auth0', error);
      });
  }, []);

  if (!auth0Config) {
    return <div>Cargando...</div>;
  }

  const { AUTH0_CLIENT_ID, AUTH0_DOMAIN } = auth0Config;

return (
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{ redirect_uri: 'http://localhost:3000/CrearJugador'}}
  >
    <App />
  </Auth0Provider>
);
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Auth0ProviderWithConfig />
</React.StrictMode>
);


