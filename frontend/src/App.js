import React, {useState,useEffect} from 'react';
import './styles/App.css';
import CrearJugador from './components/CrearJugador';
import Main from './components/Main';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Officialpage from './components/Officialpage';
import Sectionnumbers from './components/JuegoNumManoVideo/Sectionnumbers';
import VSectionnumbers from './components/JuegoLetraManoVideo/VSectionnumbers';
import Jugadores from './components/Jugadores';
import PlayerSelector from './components/PlayerSelector';

// import Webcam from "react-webcam";

function App() {
  const { user, isAuthenticated } = useAuth0();
// Agrega un estado para controlar si los datos del usuario se han guardado
const [userDataSaved, setUserDataSaved] = useState(false);

useEffect(() => {
  if ( !userDataSaved && isAuthenticated) {
    // El usuario ha iniciado sesión con éxito y los datos aún no se han guardado
    // Obtén el ID de usuario del objeto "user" proporcionado por Auth0
    const userId = user.sub; // "sub" es la propiedad que contiene el ID de usuario
    const username = user.nickname;
    const email = user.email;
    // Crea un objeto con los datos del usuario
    const userData = {
      id: userId,
      username: username,
      email: email,
    };
    console.log(userData)
    // Realiza una solicitud POST para guardar los datos del usuario
    axios.post('http://localhost:5000/perfil', userData)
      .then(response => {
        // Maneja la respuesta del servidor, si es necesario
        setUserDataSaved(true); // Marca los datos como guardados para evitar repeticiones
      })
      .catch(error => {
        // Maneja errores de la solicitud, si es necesario
        console.error('Error al guardar datos del usuario:', error);
      });
  }
}, [ userDataSaved, user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> {/* Donde se ve */}

            {/* <Route path="/rutasnuevas" element={< Cambiarcomponente />} />
            <Route path="/rutasnuevas" element={< Cambiarcomponente />} />
            <Route path="/rutasnuevas" element={< Cambiarcomponente />} />
            <Route path="/rutasnuevas" element={< Cambiarcomponente />} />
            <Route path="/rutasnuevas" element={< Cambiarcomponente />} /> */}
          
          <Route path="/Officialpage" element={<Officialpage />} /> {/* Donde se ve los botones para jugar*/}
          <Route path="/Sectionnumbers" element={<Sectionnumbers />} /> {/* Donde se ve Juego Num */}
          <Route path="/VSectionnumbers" element={<VSectionnumbers />} /> {/* Donde se ve Juego vid Num */}
          <Route path='/Jugadores' element={<Jugadores />} /> {/* Donde se ve */}
          <Route path='/PlayerSelector' element={<PlayerSelector />} /> {/* Donde se ve */}
          <Route path='/' element={<PlayerSelector />} /> {/* Donde se ve */}
          {isAuthenticated ? (
            <Route path='/Jugadores' element={<Jugadores />} /> 
          ) : (
            <Route path="/login" element={<Login />} /> 
          )}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}



export default App;
