import React from 'react';
import './styles/InfoPlan.css';



function InfoPlan({ results}) {
    
    return (
        <React.Fragment>
            <div className="infoplan">
                <img className="Imagen" src={results.activity_media_file} alt=""></img>

                <div className="PriceNameC">
                    <div>
                        <h3 className="Bold">{results.activity_description}</h3>
                        <h3 className="BoldPrice">${results.activity_ammount} COP</h3>
                    </div>
                    <div className="Info">
                        <div>
                            <p id="departamento">{results.depto}</p>
                            <p>{results.municipio}</p>
                        </div>
                        <p>Fecha: Disponible del 23 septiembre al 8 octubre 2021.{results.fecha}</p>
                    </div>
                </div>
                <div className="divInfo">
                    <h1>Descipción</h1>
                    <p>Disfruta de un maravilloso dia en familia acompañado de los mejores paisajes y las aves más bellas de Colombia en el grandioso Mirador El Samán. Descubre cada una de las maravillosas especies endémicas que tenemos en nuestra extensa reserva de 750 hectareas. {results.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoPlan