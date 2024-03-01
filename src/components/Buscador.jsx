
import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

function Buscador({ onBuscar }) {
  const handleChange = (event) => {
    const busqueda = event.target.value;
    onBuscar(busqueda);
  };

  return (
    <div className="col-md-4">
      <InputGroup className="mb-2">
        <InputGroup.Text id="inputGroup-sizing-default">
          Buscar
        </InputGroup.Text>
        <Form.Control
          placeholder='Busca por fecha, ejemplo: 01 de enero de 2004'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}

export default Buscador;
