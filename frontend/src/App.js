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

//Seleccionar JuegosV 1 Jugador o 2 Jugadores
import SelecGamNum from './components/SeleccJugadores/SelecGamNum '
import SelecGam04 from './components/SeleccJugadores/SelecGam04'
import SelecGam59 from './components/SeleccJugadores/SelecGam59'
import SelecGamVocales from './components/SeleccJugadores/SelecGamVocales'
import SelecGamAE from './components/SeleccJugadores/SelecGamAE'
import SelecGamFJ from './components/SeleccJugadores/SelecGamFJ'
import SelecGamKO from './components/SeleccJugadores/SelecGamKO'
import SelecGamPT from './components/SeleccJugadores/SelecGamPT'
import SelecGamUZ from './components/SeleccJugadores/SelecGamUZ'
import SelecGamAlphabet from './components/SeleccJugadores/SelecGamAlphabet'
import SelecGamGlobal from './components/SeleccJugadores/SelecGamGlobal'
//SIN AYUDA-Seleccionar JuegosV 1 Jugador o 2 Jugadores 
import SelecGamNumSin from './components/SeleccJugadores/SelecGamNumSin'
import SelecGam04Sin from './components/SeleccJugadores/SelecGam04Sin'
import SelecGam59Sin from './components/SeleccJugadores/SelecGam59Sin'
import SelecGamVocalesSin from './components/SeleccJugadores/SelecGamVocalesSin'
import SelecGamAESin from './components/SeleccJugadores/SelecGamAESin'
import SelecGamFJSin from './components/SeleccJugadores/SelecGamFJSin'
import SelecGamKOSin from './components/SeleccJugadores/SelecGamKOSin'
import SelecGamPTSin from './components/SeleccJugadores/SelecGamPTSin'
import SelecGamUZSin from './components/SeleccJugadores/SelecGamUZSin'
import SelecGamAlphabetSin from './components/SeleccJugadores/SelecGamAlphabetSin'
import SelecGamGlobalSin from './components/SeleccJugadores/SelecGamGlobalSin'
//Leccion

//LeccionManoVideo

//Memori
import MemoryGameAE from './components/juegoMemori/MemoryGameAE'
import MemoryGameFJ from './components/juegoMemori/MemoryGameFJ'
import MemoryGameKO from './components/juegoMemori/MemoryGameKO'
import MemoryGamePT from './components/juegoMemori/MemoryGamePT'
import MemoryGameUZ from './components/juegoMemori/MemoryGameUZ'
import MemoryGameVocales from './components/juegoMemori/MemoryGameVocales'
import MemoryGamenum from './components/juegoMemori/MemoryGamenum'
// import MemoryGameAE from './components/juegoMemori/MemoryGamenum' segunda parte


//Juego Relacionar
import QuizzVocales from './components/JuegoRelacionar/quizz_vocales'
import QuizzAE from './components/JuegoRelacionar/quizz_AE'
import QuizzFJ from './components/JuegoRelacionar/quizz_FJ'
import QuizzKO from './components/JuegoRelacionar/quizz_KO'
import QuizzPT from './components/JuegoRelacionar/quizz_PT'
import QuizzUZ from './components/JuegoRelacionar/quizz_UZ'
import Quizz04 from './components/JuegoRelacionar/quizz_04'
import Quizz59 from './components/JuegoRelacionar/quizz_59'
import QuizzNums from './components/JuegoRelacionar/quizz_nums'
import QuizzAlphabet from './components/JuegoRelacionar/quizz_alphabet'
import QuizzGlobal from './components/JuegoRelacionar/quizz_global'



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
          <Route path="/Officialpage" element={<Officialpage />} /> {/* Donde se ve los botones para jugar*/}
            {/*Juegos relacionar*/}
            <Route path="/QuizzVocales" element={< QuizzVocales />} />
            <Route path="/QuizzAE" element={< QuizzAE />} />
            <Route path="/QuizzFJ" element={< QuizzFJ />} />
            <Route path="/QuizzKO" element={< QuizzKO />} />
            <Route path="/QuizzPT" element={< QuizzPT />} />
            <Route path="/QuizzUZ" element={< QuizzUZ />} />
            <Route path="/Quizz04" element={< Quizz04 />} />
            <Route path="/Quizz59" element={< Quizz59 />} />
            <Route path="/QuizzNums" element={< QuizzNums />} />
            <Route path="/QuizzAlphabet" element={< QuizzAlphabet />} />
            <Route path="/QuizzGlobal" element={< QuizzGlobal />} />
            {/*Seleccionar 1jug o 2jug*/}
            <Route path="/SelecGamNum" element={< SelecGamNum />} />
            <Route path="/SelecGam04" element={< SelecGam04 />} />
            <Route path="/SelecGam59" element={< SelecGam59 />} />
            <Route path="/SelecGamVocales" element={< SelecGamVocales />} />
            <Route path="/SelecGamAE" element={< SelecGamAE />} />
            <Route path="/SelecGamFJ" element={< SelecGamFJ />} />
            <Route path="/SelecGamKO" element={< SelecGamKO />} />
            <Route path="/SelecGamPT" element={< SelecGamPT />} />
            <Route path="/SelecGamUZ" element={< SelecGamUZ />} />
            <Route path="/SelecGamAlphabet" element={< SelecGamAlphabet />} />
            <Route path="/SelecGamGlobal" element={< SelecGamGlobal />} />
            {/*SIN AYUDA-Seleccionar 1jug o 2jug*/}
            <Route path="/SelecGamNumSin" element={< SelecGamNumSin />} />
            <Route path="/SelecGam0Sin4" element={< SelecGam04Sin />} />
            <Route path="/SelecGam59Sin" element={< SelecGam59Sin />} />
            <Route path="/SelecGamVocalesSin" element={< SelecGamVocalesSin />} />
            <Route path="/SelecGamAESin" element={< SelecGamAESin />} />
            <Route path="/SelecGamFJSin" element={< SelecGamFJSin />} />
            <Route path="/SelecGamKOSin" element={< SelecGamKOSin />} />
            <Route path="/SelecGamPTSin" element={< SelecGamPTSin />} />
            <Route path="/SelecGamUZSin" element={< SelecGamUZSin />} />
            <Route path="/SelecGamAlphabetSin" element={< SelecGamAlphabetSin />} />
            <Route path="/SelecGamGlobalSin" element={< SelecGamGlobalSin />} />
          
          
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
