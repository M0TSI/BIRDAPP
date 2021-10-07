import React from 'react';
import './styles/InfoPlan.css';
import { Link } from "react-router-dom";


function InfoPlan({ results}) {
    
    return (
        <React.Fragment>
            <div className="infoplan">
                <img className="Imagen" src={results.src} alt=""></img>

                <div className="PriceNameC">
                    <div>
                        <h3 className="Bold">{results.title}</h3>
                        <h3 className="BoldPrice">${results.price} COP</h3>
                    </div>
                    <div className="Info">
                        <div>
                            <p id="departamento">{results.depto}</p>
                            <p>{results.municipio}</p>
                        </div>
                        <p>Fecha: {results.fecha}</p>
                    </div>
                </div>
                <div className="divInfo">
                    <h1>Descipción</h1>
                    <p>{results.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoPlan