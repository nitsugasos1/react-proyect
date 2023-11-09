import { useState, useEffect } from 'react';
import "./experiencia.css"

function Experiencia (){
    const [data, setExpData]=useState([]);
    

    useEffect(()=>{
    async function ObtenerCargarDatos(){
        try {
            const respuesta = await fetch(`https://my-json-server.typicode.com/nitsugasos1/new-api/experiencia`);
            if (!respuesta.ok) {
                throw new Error(`No se puedo recuperar los datos`)
            }
            const datos = await respuesta.json();
            setExpData(datos)
        }
        catch (error) {
            console.log(error)
        }
        
    }
    ObtenerCargarDatos()
},[]) 

const cardExp = data.slice(0,1).map((data, index)=>{
    return (<article key={index} className="article__experiencia">
        <div className="article__frame13">
            <div className="article__frame15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
                        fill="currentColor" />
                    <path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
                        fill="currentColor" />
                    <path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" />
                </svg>
                <div className="article__frame14">
                    <span>{data.subtitulo}</span>
                    <h2>{data.titulo}</h2>
                </div>
            </div>
            <p className="article__p">{data.descripcion}</p>
        </div>
    </article>)
})

const cardExpExtra = data.slice(1,3).map((data, index)=>{
    return (<article key={index} className="article__experiencia2">
    <div className="article__frame13">
            <div className="article__frame15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
                        fill="currentColor" />
                    <path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
                        fill="currentColor" />
                    <path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" />
                </svg>
                <div className="article__frame14">
                    <span>{data.subtitulo}</span>
                    <h2>{data.titulo}</h2>
                </div>
            </div>
            <p className="article__p">{data.descripcion}</p>
        </div>
</article>)
})

    return (
        <aside className="experiencia">
        <h2>Experiencia</h2>
        <div className="experiencia__div">
        {cardExp}
        {cardExpExtra}
        </div>
        </aside>
    )
}

export default Experiencia

