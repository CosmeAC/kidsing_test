import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../styles/Jugadores.css';

  const Jugadores  = () => {
    const { user, isAuthenticated } = useAuth0(); 
    const [player,setPlayer] = useState([]);
    
    
    
    useEffect(() => {
      if (isAuthenticated && user) {
      // Realiza una solicitud al backend para obtener la lista de jugadores
      const auth0Id = user.sub;
      axios
        .get(`http://localhost:5000/MostrarJugadors/${auth0Id}`)
        .then((response) => {
          setPlayer(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error al obtener la lista de jugadores:', error);
        });
      }
    }, [user, isAuthenticated]);

    return (
    //   <div>
    //   <ul>
    //     {Array.isArray(jugadores) ? (
    //       jugadores.map((jugador, index) => (
    //         <li key={index}>
    //           <img src={jugador.imagen} alt={`Imagen ${index}`} />
    //           <p>Nombre: {jugador.username}</p>
    //         </li>
    //       ))
    //     ) : (
    //       <p>No hay jugadores disponibles.</p>
    //     )}
    //   </ul>
    //   <Link to="/PlayerSelector">
    //     <button>crear jugador</button>
    //   </Link>
    // </div>

      <div className="bodyJugadores">
        <div className=''></div>
      <ul className='ulJugadores'>
        {Array.isArray(player.jugadorId) && player.jugadorId.length > 0 ? (
          player.jugadorId.map((jugador, index) => (
            <Link to="/Officialpage"><li key={index}>

              <img className='imgJugadores'src={jugador.imagen}></img>
              
              <p className='Njugadores'>{jugador.username}</p>
            </li></Link>
          ))
        ) : (
          <p></p>
        )}
      </ul>
        <div className='divCrearJugador'>
          <Link to="/PlayerSelector">
            <button className='btnCrearJugador'>+</button>
            <p>Añadir jugador</p>
            {/* <p>jugador</p> */}
          </Link>
        </div>  
      </div>
        
    );
  };

export default Jugadores;
