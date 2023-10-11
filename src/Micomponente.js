import React from 'react';

function MiComponente() {
  return (
    <div>
      <h1>Hola, mundo!</h1>
    </div>
  );
}

function Saludo(props) {
    return <h1>Hola, {props.nombre}</h1>;
  }
  
  import React, { useState } from 'react';

  function Contador() {
    const [contador, setContador] = useState(0);
  
    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
    );
  }
  

export default MiComponente;

