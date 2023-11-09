import { useState, useEffect } from 'react';
import "./certificados.css"

function Certificados() {
    const [data, setCertData]=useState([]);
    

    useEffect(()=>{
    async function ObtenerCargarDatos(){
        try {
            const respuesta = await fetch(`https://my-json-server.typicode.com/nitsugasos1/new-api/certificados`);
            if (!respuesta.ok) {
                throw new Error(`No se puedo recuperar los datos`)
            }
            const datos = await respuesta.json();
            setCertData(datos)
        }
        catch (error) {
            console.log(error)
        }
        
    }
    ObtenerCargarDatos()
},[]) 
    const certData = data.slice(0, 1).map((data, index)=>{
        return (<div key={index} className="certificate__frame14">
        <div className="contenedor__certificate__img">
            <img className="certificate__img" src= "./diploma_demo.png" alt="diploma_demo"/>
        </div>

        <div className="certificate_frame15">
            <h2>{data.titulo}</h2>
            <span>{data.fecha}</span>
        </div>
    </div>
        )
    })

    const certDataDos = data.slice(1, 3).map((data, index)=>{
        return (<div key={index} className="certificate__frame14__2">
        <div className="contenedor__certificate__img__1">
            <img className="certificate__img" src="./diploma_demo.png" alt="diploma_demo"/>
        </div>

        <div className="certificate_frame15">
            <h2>{data.titulo}</h2>
            <span>{data.fecha}</span>
        </div>

    </div>)
    })

    return (
        <footer className="certificate__portrait-2">
        <h2>Certificados</h2>
        <div className="certificate__frame__general">
        {certData} {certDataDos}
        </div>
        </footer>
    )
}

export default Certificados