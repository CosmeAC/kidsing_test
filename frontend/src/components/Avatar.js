
import { Link } from 'react-router-dom';
import React, { useEffect,useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Avatar 
// =
() 
// => 
{

// function Avatar() {
    const [PlayersConfig] = useState(null);
    const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate(); 
    const {userId}= PlayersConfig

    useEffect(() => {
        // Realizar una solicitud al backend para obtener la configuración de Auth0
        axios.get('http://localhost:5000/MostrarJugadors') // tiene que concidir con la que he hecho en el backend(lo que puse en el app.get)
            .then((response) => {
                PlayersConfig(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener la configuración de Auth0', error);
            });
    }, []);

    if (user.sub === userId) {
        return <div>Cargando...</div>;
// };
};

    return (
        <div>
            <div>imagen</div>
            <Link to="/CrearJugador">Crear</Link>
        </div>
    )
}

export default Avatar