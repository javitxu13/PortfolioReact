import { useState } from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      Javier Gonzalez
      <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/sobre-mi">Skills</a>
        </li>
        <li>
          <a href="/proyectos">Proyectos</a>
        </li>
        <li>
          <a href="/proyectos">Sobre Mi</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




  