import {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Portada from './components/Portada';
import Sobremi from './components/Sobremi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';





function App() {
  const [page, setPage] = useState('navbar');
  const [portada, setPortada] = useState('portada');
  const [sobremi, setSobremi] = useState('sobremi');
  const palabras = ['Web', 'Full Stack', 'Front-end', 'Back-end'];
  const [proyectos, setProyectos] = useState("proyectosData");
  const [contacto, setContacto] = useState("contacto");
  const [footer, setFooter] = useState("footer");
 

  return (
    <div className="App">
      <Navbar />
      <Portada palabras={palabras} />
      <Proyectos />
      <Sobremi />
      <Contacto />
      <Footer />
    </div>

    
  );
}




export default App;

