import { useState } from 'react';
  const PerfilNetflix  = ({ handleImagenPerfilChange }) => {
    const imagenes = [
      '../assets/avatar/elefante2.png',
      '../assets/avatar/erizo.jpg',
      // Agrega aquí las URL de las otras imágenes disponibles
    ];
  
    const handleSeleccionImagen = (imagen) => {
      handleImagenPerfilChange(imagen); // Llama a la función para actualizar la imagen seleccionada
    };
  
    return (
      <div>
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index}`}
            onClick={() => handleSeleccionImagen(imagen)}
          />
        ))}
      </div>
    );
  };

export default PerfilNetflix;
