
import { Link } from 'react-router-dom';
import React, { useEffect,useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Avatar() {
    const [objetos, setObjetos] = useState([]);
    const { user, isAuthenticated } = useAuth0(); // Obtiene el usuario y su estado de autenticación de Auth0

    useEffect(() => {
        if (isAuthenticated) {
            // Si el usuario está autenticado, realiza la solicitud al backend
            const userId = user.sub; // Obtiene el user.sub del usuario autenticado

            // Hacer una solicitud a tu backend usando Axios con el userId
            axios.get(`/MostrarJugadors/${userId}`)
                .then((response) => {
                    // Supongamos que 'response.data' contiene una matriz de objetos del backend
                    const data = response.data;
                    setObjetos(data);
                })
                .catch((error) => {
                    console.error('Error al obtener datos del backend:', error);
                });
        }
    }, [isAuthenticated, user]);

    return (
        <div>
            {objetos.map((objeto, index) => (
                <div key={index}>
                    <h2>{objeto.nombre}</h2>
                    <img src={objeto.imagen} alt={`Imagen del objeto ${objeto.nombre}`} />
                </div>
            ))}
            <Link to="/games">
                <button>Ir a Juegos</button>
            </Link>
            <div> 
                <button></button>
            </div>
        </div>
    );
}

// function Avatar 
// // =
// () 
// // => 
// {

// // function Avatar() {
//     const [PlayersConfig] = useState(null);
//     const { user, isAuthenticated } = useAuth0();
//     const navigate = useNavigate(); 
//     const {userId}= PlayersConfig

//     useEffect(() => {
//         // Realizar una solicitud al backend para obtener la configuración de Auth0
//         axios.get('http://localhost:5000/MostrarJugadors') // tiene que concidir con la que he hecho en el backend(lo que puse en el app.get)
//             .then((response) => {
//                 PlayersConfig(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error al obtener la configuración de Auth0', error);
//             });
//     }, []);

//     if (user.sub === userId) {
//         return <div>Cargando...</div>;
// // };
// };

//     return (
//         <div>
//             <div>imagen</div>
//             <Link to="/CrearJugador">Crear</Link>
//         </div>
//     )
// }

export default Avatar