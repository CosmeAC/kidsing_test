import { Link } from 'react-router-dom';

  const SeleccionarPerfil  = ({ handleImagenPerfilChange }) => {
    const imagenes = [

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
        {/* <div> */}
        <Link to="/games">
          <button>Ir a Juegos</button>
        </Link>
        {/* </div> */}
      </div>
        
    );
  };

export default SeleccionarPerfil;
