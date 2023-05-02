import { useState, useEffect } from 'react';
import yo from './imagenes/yo.png';
import './css/portada.css';

const Portada = ({ palabras }) => {
  const [palabraActual, setPalabraActual] = useState(palabras[palabras.length - 1]); // Inicializamos la palabra actual con la última palabra del array

  useEffect(() => {
    const intervalId = setInterval(() => {
        // Buscamos la posición de la palabra actual en el array
      const index = palabras.indexOf(palabraActual);
        // Calculamos la posición de la siguiente palabra en el array
      const nuevaPalabra = palabras[(index + 1) % palabras.length];
        // Actualizamos el estado con la nueva palabra
      setPalabraActual(nuevaPalabra);
    }, 2000);

    return () => clearInterval(intervalId);
    // El return dentro de useEffect se ejecuta cuando el componente se desmonta y sirve para limpiar el intervalo de tiempo que creamos.
  }, [palabraActual, palabras]);

  return (
     // Cuando se renderiza el componente, se muestra la palabra actual en el título lin 27
    <div className="portada">
        <div className="pack">
            <h1 className='tituloj'>Javier Gonzalez 
            Desarrollador <span className="ultima-palabra">{palabraActual}</span></h1>
            <p>Desarrollador web especializado en la creación de soluciones<br /> digitales para empresas y organizaciones.</p>
            <button className="boton">Contacto</button>
        </div>
      <img src={yo} alt="JV" />
    </div>



  );
}

export default Portada;











