import { useState } from 'react';
import './css/sobremi.css';

const Inicio = () => {
  const [skills, setSkills] = useState([
    { name: 'Github Copilot', image: 'https://rewind.com/wp-content/uploads/2022/03/github-copilot-logo.jpeg' },
    { name: 'Chat GPT', image: 'https://c2e9a7e8.rocketcdn.me/wp-content/uploads/2023/01/openAI-chat-gpt-1.jpg' }
  ]);

  return (
    <div className="inicio">
      <div className="titulo">
        <h1>Sobre Mi</h1>
        <img src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/03/que-se-necesita-estudiar-para-ser-programador-scaled-1200x900.jpg" alt="JV" />
      </div>
      <p>
        Con ustedes, Javier González, el futuro desarrollador web Full Stack que solo necesita al Chat GPT como su asistente personal. Él se sumerge en su bootcamp con una sonrisa en el rostro, sabiendo que siempre puede contar con la ayuda de Chat GPT para responder a cualquier pregunta o solucionar cualquier problema.
        <br /><br />
        Si alguna vez te preguntas cómo se las arregla para crear sitios web increíbles sin nunca abandonar el chat, es porque él y Chat GPT son como Batman y Robin.
        <br /><br />
        ¡Siempre listos para salvar el día (y el código)!
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <img src={skill.image} alt={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
