import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  margin-top:10px;
  border-radius: 5px;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, guardarCargando ] = useState (false)

  //Extraer datos
  const { cotizacion, datos } = resumen;

  return (
       <Fragment>
          <Header
            titulo='Cotizador de Seguros'
          />

        <Contenedor>
          <ContenedorFormulario>
            <Formulario
              guardarResumen={guardarResumen}
              guardarCargando={guardarCargando}
            />

            { cargando ? <Spinner/> : null }

            { !cargando 
              ? 
                <Resumen
                datos={datos}
                /> : null
            }
            
            { !cargando 
              ? 
                <Resultado
                  cotizacion={cotizacion}
                /> : null
            }
          </ContenedorFormulario>
        </Contenedor>
       </Fragment>
  );
}

export default App;
