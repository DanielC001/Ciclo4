import React from "react";
import '../styles/Form.css'
import { Link } from 'react-router-dom'
import imagen from './imagenProyecto.jpg'
function Tarjeta ({nombre,general,especifico,presupuesto}) {
    return (
        <div>
            <div class="card cardStyle" >
                <img src={imagen} class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h4 >{nombre}</h4>
                <h6>{general}</h6>
                <p>{especifico}</p>
                <p>{presupuesto}</p>
                <a href="#" class ="btn btn-primary">Ver</a>
                </div>
            </div>
        </div>

    );
};

export default Tarjeta;
