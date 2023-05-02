import { useState } from "react";
import './css/contacto.css'; 


const Contacto = () => {
   const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState("");
   const [mensaje, setMensaje] = useState("");



    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    // actualiza el estado "nombre" del componente con el valor ingresado por el usuario en tiempo real.

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    // actualiza el estado "email" del componente con el valor ingresado por el usuario en tiempo real.

    const handleMensaje = (e) => {
        setMensaje(e.target.value);
    }

    // actualiza el estado "mensaje" del componente con el valor ingresado por el usuario en tiempo real.

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, email, mensaje);
    }

    // previene el comportamiento por defecto del formulario (recargar la página) y muestra en consola los valores ingresados por el usuario.



    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" value={nombre} onChange={handleNombre} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleEmail} />
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" value={mensaje} onChange={handleMensaje} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;