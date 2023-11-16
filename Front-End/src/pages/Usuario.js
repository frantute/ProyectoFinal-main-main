import React from 'react'
import style from '../styles/usuario.module.css';
import Link from 'next/link';
import CenteredContainer from '../components/CenteredContainer2';
import Image from 'next/image'
import Header from '../components/Header';
function Usuario() {
  return (
    <div>
    <Header/>
    <div className={style.container}>
      <h1 className={style.title}>MI PERFIL</h1>
      <div  className={style.img}>
      <Image width={300} height={300} src="/Image/foto.png" alt="foto" /> 
      </div>
      <CenteredContainer>
       <form className='form-container'>
      <div className={style.contenedorflotante}>
       <label className={style.label}> Usuario/Mail: </label>
       <input type="text" id="NOMBRE" name="name"/> <br/>
       <label className={style.label}> Nombre del responsable: </label>
       <input type="text" id="NOMBRE.Resp" name="nameResp"/><br/>
       <label className={style.label}> Telefono del Responsable: </label>
       <input type="text" id="Telefono" name="tel"/><br/>
       <label className={style.label}> Contraseña: </label>
       <input type="text" id="contraseña" name="contra"/>
       </div><br/>
       
      
      <div className={style.seguimiento}>
      <label className={style.cuenta}>
      ¿Olvidaste tu contraseña?
       </label>
        <Link className={style.LINK} href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */}
        </div>

        <button className={style.editar} >
         Editar
        </button>
        </form>
        </CenteredContainer>
    </div>
    </div>
  )
}

export default Usuario
