
import { useState } from 'react';
import BotonProyecto from './boton';
import "./proyectos.css"
import PropTypes from "prop-types";


function Proyects({ number, changeView }) {
    const [btnActive, setBtnActive] = useState('resposive');

    return (
        <section className="main__proyects">
            <h2 className="proyectCountTitle">Proyecto {number}</h2>

            <article className="proyects__button">
                <BotonProyecto
                    classes="button1"
                    title="Responsivo"
                    onClick={() => {
                        changeView('responsive');
                        setBtnActive('responsive');
                    }}
                    active={btnActive === 'responsive'} />
                <BotonProyecto
                    classes="button2"
                    title="JavaScript"
                    onClick={() => {
                        changeView('JavaScript');
                        setBtnActive('JavaScript');
                    }}
                    active={btnActive === 'JavaScript'} />
                <BotonProyecto
                    classes="button3"
                    title="React"
                    onClick={() => {
                        changeView('React');
                        setBtnActive('React');
                    }}
                    active={btnActive === 'React'} />
            </article>
        </section>
    )
   
}

Proyects.propTypes = {
    number: PropTypes.number,
    changeView: PropTypes.func.isRequired,
}

export default Proyects