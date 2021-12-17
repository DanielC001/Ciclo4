import React from "react";
import '../styles/Form.css'
import { Link } from 'react-router-dom'
import imagen from './imagenProyecto.jpg'
function Tarjeta ({nombre,general,especifico,presupuesto,url}) {
    return (
        <div>
            <div class="card cardStyle" >
                <img src={imagen} class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h4 >{nombre}</h4>
                <h6>{general}</h6>
                <p>{especifico}</p>
                <p>{presupuesto}</p>
                <Link to={url}>
                    <button className="btn btn-info">Actualizar</button>
                </Link>
                </div>
            </div>
        </div>

    );
};

export default Tarjeta;
