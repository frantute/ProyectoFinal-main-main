import React from 'react';
import { useRouter } from 'next/router';
import style from '../styles/compartimiento.module.css';
import Header from '../components/Header';

function Compartimiento() {
  const router = useRouter();
  
  const compartimento1 = async (e) => {
    e.preventDefault();
    
    // Definir compartimento aquí o donde sea necesario
    const compartimento = '1';
  
    try {
      const response = await fetch('http://localhost:5000/compartimento1');
  
      if (response.ok) {
        console.log('Se guardó la información correctamente');
        router.push('/compartimento1');
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  const compartimento2 = async (e) => {
    e.preventDefault();
    
    // Definir compartimento aquí o donde sea necesario
    const compartimento = '2';
  
    try {
      const response = await fetch('http://localhost:5000/compartimento2');
  
      if (response.ok) {
        console.log('Se guardó la información correctamente');
        router.push('/compartimento2');
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  const compartimento3 = async (e) => {
    e.preventDefault();
    
    // Definir compartimento aquí o donde sea necesario
    const compartimento = '3';
  
    try {
      const response = await fetch('http://localhost:5000/compartimento3');
  
      if (response.ok) {
        console.log('Se guardó la información correctamente');
        router.push('/compartimento3');
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const compartimento4 = async (e) => {
    e.preventDefault();
    
    // Definir compartimento aquí o donde sea necesario
    const compartimento = '4';
  
    try {
      const response = await fetch('http://localhost:5000/compartimento4');
  
      if (response.ok) {
        console.log('Se guardó la información correctamente');
        router.push('/compartimento4');
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form>
      <Header />
      <h1 className={style.title}>Seleccione el compartimiento</h1>
      <div className={style.container}>
        <div className={style.containerimg}>
          <div className={style.botonComp1}>
            <button className={style.calendario} onClick={compartimento1}>
              <img
                src='/Image/btn1.png' // Ruta de imagen correcta
                alt="Botón 1" 
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
          <div className={style.botonComp2}>
            <button className={style.calendario} onClick={(compartimento2)}>
              <img
                src='/Image/btn2.png' // Ruta de imagen correcta
                alt="Botón 2"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
        </div>

        <div className={style.containerimg}>
          <div className={style.botonComp3}>
            <button className={style.calendario} onClick={(compartimento3) }>
              <img
                src='/Image/btn3.png' // Ruta de imagen correcta
                alt="Botón 3"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
          <div className={style.botonComp4}>
            <button className={style.calendario} onClick={(compartimento4)}>
              <img
                src='/Image/btn4.png' // Ruta de imagen correcta
                alt="Botón 4"
                className="boton-imagen"
              />
            </button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}

export default Compartimiento;