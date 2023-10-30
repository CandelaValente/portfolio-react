import React from "react";
import marco from './imagenes/marco.png';
import './styles/inicio.css';


export function Inicio() {
    return (
        <>
            <div id="inicio">
                <h1>Candela Valente <span>Portfolio</span></h1>
                <img src={marco.png} alt="Marco decorativo" ></img>
                <p id="p">Hola, mi nombre es Candela. soy programadora web full stack junior. Te invito a darle un
                    vistazo
                    a
                    algunos de
                    mis proyectos.
                </p>
            </div>
        </>
    );
}