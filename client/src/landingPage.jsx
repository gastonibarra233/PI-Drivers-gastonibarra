import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/background.jpg';

const LandingPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`, //establece la imagen de fondo
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
      }}
    >
      <h1>Bienvenido a nuestra aplicación</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
    )
}

export default LandingPage;