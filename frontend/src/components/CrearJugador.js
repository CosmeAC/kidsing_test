import Login from './Login'
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; 

const CrearJugador = () => {
  const { user, isAuthenticated } = useAuth0();
  const [nombreJugador, setNombreJugador] = useState('');
  const navigate = useNavigate(); 

  const handleNombreChange = (e) => {
    setNombreJugador(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Enviar info al backen
    try {
      const response = await fetch('http://localhost:5000/CrearJugador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombreJugador,
          userId: user.sub, 
        }),
      });

      if (response.status === 200) {
        // Si la creación del jugador fue exitosa, redirige a la página deseada
        navigate('/Games');
      }
    } catch (error) {
      console.error('Error al crear el jugador:', error);
      // Manejo de errores, si es necesario
    }
  };

  return (
    <div>
      <Login/>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre del Jugador:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombreJugador}
              onChange={handleNombreChange}
            />
          </div>
          <button type="submit">Crear Jugador</button>
        </form>
      ) : (
        <p>Debes iniciar sesión para crear un jugador.</p>
      )}
    </div>
  );
};

export default CrearJugador;
