import React from "react";

const Persona = (props) => {
    return(
      <div className='persona' 
      style={{
        backgroundColor: props.color,
        }}>
        <h2>ID: {props.id}</h2>
        <h2>Nombre: {props.nombre}</h2>
        <h2>Edad: {props.edad}</h2>
        <h2>Correo: {props.correo}</h2>
        <img src={props.perfil}></img>
      </div>
    )
  }

  export default Persona