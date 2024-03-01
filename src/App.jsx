import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import MiApi from '../src/components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (busqueda) => {
    setSearchTerm(busqueda);
  };

  return (
    <>
      <div>
      <Navbar expand="lg" bg="primary" variant="light" className="fixed-top">
        <Container>
          <Navbar.Brand style={{ fontSize:'30px' ,fontWeight:'bolder',color: 'white' }} href="#">Feriados en Chile</Navbar.Brand>
          <Buscador onBuscar={handleSearch} />
        </Container>
      </Navbar>
      <div>
        <Container style={{ height: '400px', marginTop: '70px', position: 'relative', zIndex: '-1', textAlign: 'center', background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://img.freepik.com/vector-premium/bandera-chile-fondo_19426-623.jpg")', backgroundSize: '100% 100%' }}>
          <h1 style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1',
            fontSize: '25px',
            color: 'white',
            maxWidth: '90%', 
            textAlign: 'center', 
            margin: '0 auto' 
          }}>¡Bienvenido a nuestra , página días feriados en chile! Estamos encantados de tenerte aquí. Nuestra misión es proporcionarte información precisa y confiable sobre los días feriados que son reconocidos por ley. Ya sea que estés planificando tus vacaciones, eventos familiares o simplemente quieras estar al tanto de los días festivos importantes, ¡estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en ponerte en contacto con nosotros. ¡Esperamos que encuentres toda la información que necesitas y que tengas una experiencia excelente navegando por nuestra página! ¡Gracias por visitarnos! </h1>
        </Container>


      </div>


      <Container>
        <MiApi searchTerm={searchTerm} />
      </Container>
    </div>

    <div>
    <footer style={{ display:'flex', backgroundColor: '#f8f9fa', padding: '20px 0',justifyContent:'space-between' }}>
      <Container>
        <p>Desafio Latam react 1</p>
      </Container>
          <div>
          <i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-brands fa-youtube fa-xl"></i>
          <i class="fa-brands fa-github fa-xl"></i>
          </div>
    </footer>
    </div>
    </>
  


  );
}

export default App;
