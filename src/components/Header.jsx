import { useState, useEffect } from 'react';
import "./header.css"

function Header(){
  const [data, setPerfilData]=useState([]);
    
useEffect(()=>{
    async function ObtenerCargarDatos(){
        try {
            const respuesta = await fetch(`https://my-json-server.typicode.com/nitsugasos1/new-api/Perfil`);
            if (!respuesta.ok) {
                throw new Error(`No se puedo recuperar los datos`)
            }
            const datos = await respuesta.json();
            setPerfilData(datos)
        }
        catch (error) {
            console.log(error)
        }
        
    }
    ObtenerCargarDatos()
},[]) 

    return(
        <header className="header">
        <article  className="header__article__profile">
        <div className="header__article__div__img">
        <img className="header__first__img" src='./perfil_image.jpeg' alt="imagen-del-perfil"/>
        </div>
        <div className="header__div__info">
        <div className="header__info__name">
            <h1>{data.nombre}</h1>
            <h2>{data.prof}</h2>
        </div>
        <div className="header__info__contact">
            <i className="fa-solid fa-envelope"></i>
            <span>{data.mail}</span>
            <br/>
            <i className="fa-solid fa-phone"></i>
            <span>{data.tel}</span>
        </div>
        <p>{data.tel}</p>
        </div>
        </article>
        </header>
        )
}

export default Header
