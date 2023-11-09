import { useState, useEffect } from 'react';
import Proyects from './Proyectos';
import "./preview.css"

function Preview() {
    const [data, setPreviewData] = useState([]);
    const [currentView, setCurrentView] = useState('responsive');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/nitsugasos1/new-api/Proyectos');
                if (response.ok) {
                    const jsonData = await response.json();
                    setPreviewData(jsonData);
                } else {
                    throw new Error('Error al cargar los datos de la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Agrega una comprobación para asegurarte de que data[currentView] existe
    const number = data[currentView] ? data[currentView].length : 0;

    const changeView = (vista) => {
        setCurrentView(vista);
    };

    return (
        <>
        <Proyects number={number} changeView={changeView} />
            {data[currentView] && data[currentView].map((info, index) => (
            <section key={index} className="preview"> {}   
                <div  className="preview__frame">
                    <div className="preview__Mask">
                        <img src= "./portfolio.png" alt="vista previa del proyecto" className="preview__Mask__img"/>
                    </div>
                    <div className="preview__info">
                        <div className="preview__titulo">
                            <span className="preview__hashtags">{info.etiqueta}</span>
                            <h4>{info.titulo}</h4>
                        </div>

                        <p>
                            {info.descripcion}
                        </p>

                        <nav className="preview__nav">
                            <a href="" className="preview__nav__button">Demo</a>
                            <a href="" className="preview__nav__button__two">Code</a>
                        </nav>
                    </div>
                </div>
                </section>
            ))}

        
        </>
    );
}

export default Preview;