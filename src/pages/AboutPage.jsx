import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const AboutPage = () => {
  const navigate = useNavigate();  // Inicializa el hook useNavigate

  const goToHome = () => {
    navigate('/');  // Redirige a la página de inicio
  };

  const goToContact = () => {
    navigate('/contact');  // Redirige a la página de contacto
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-200">
      <h1 className="text-4xl">Quiénes Somos</h1>
      <p className="text-xl mt-4">Nosotros somos una empresa dedicada a...</p>

      {/* Botón que usa goToHome */}
      <button
        onClick={goToHome}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        Home
      </button>

      {/* Botón que usa goToContact */}
      <button
        onClick={goToContact}
        className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg"
      >
        Contacto
      </button>
    </div>
  );
};

export default AboutPage;
