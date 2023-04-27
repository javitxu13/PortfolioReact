import {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/Inicio';

/*import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import './App.css'; */


function App() {
  const [page, setPage] = useState('navbar');
  const [inicio, setInicio] = useState('inicio');

  
  return (
    <div className="App">
      <Navbar />
      <Inicio />
    </div>
  );
}

export default App;