import React, { useState } from 'react';
import './css/proyectos.css';

const proyectosData = [
  {
    titulo: 'Proyecto Cultural React',
    imagen: 'https://garajedelrock.com/wp-content/uploads/2020/05/Guns-XConciertos-1024x555.jpg',
    url: "https://github.com/javitxu13/CulturaReact"
  },
  {
    titulo: 'Proyecto Cocktails',
    imagen: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/09/Cold-Strawberry-Cocktail-with-Fresh-Strawberries-and-Mint.jpg',
    url:  'https://github.com/javitxu13/Proyecto_Cocktails'
  },
  {
    titulo: 'Proyecto  3 en raya',
    imagen: 'https://piruletea.com/wp-content/uploads/2020/04/Captura-de-pantalla-2020-04-29-a-las-9.03.34-1024x721.png',
    url:'https://github.com/javitxu13/3-en-raya'
  },

];

function Proyectos() {
  const [proyectos, setProyectos] = useState(proyectosData);

  return (

    <div className='contenedor'>
        <h1 className='tp'>Proyectos</h1>
    
      {proyectos.map((proyecto, index) => (

        //El atributo map se utiliza para recorrer el array de proyectos y renderizar un elemento por cada proyecto.

        //El atributo key es necesario para que React pueda identificar cada elemento de la lista de proyectos y actualizar solo los que cambian.
        <div key={index} className="proyecto-container"> 
          <h2>{proyecto.titulo}</h2>
          <img src={proyecto.imagen} alt={proyecto.titulo} />
          <a href={proyecto.url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
      ))}
    </div>
     // El atributo target="_blank" rel="noopener noreferrer" se utiliza para que el enlace se abra en una nueva pestaña.
  );
}

export default Proyectos;

