import React from 'react';
import { useHistory } from "react-router-dom";
import './styles/InfoDetalle.css';
import CardAves from './CardAves';


function InfoDetalle({ servicios, actividades }) {
    const history = useHistory();
    return (
        <div>

            <div className="infoDetalle">
                <div className="titulos">
                    <h1 >Aves</h1>
                </div>
                <CardAves
                    src="https://live.staticflickr.com/4667/40481871362_125ff34982_b.jpg"
                    title="Gavilán"
                />
                <CardAves
                    src="https://www.ranchomagico.com.mx/blog/wp-content/uploads/2017/06/guacamaya4.jpg"
                    title="Guacamalla"
                />
                <CardAves
                    src="https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
                    title="Tucán"
                />
                <CardAves
                    src="https://noticiasambientales.com/wp-content/uploads/2019/11/condor_andino_na.jpg"
                    title="Condor"
                />

            </div>
            <div className="infoDetalle">
                <div className="titulos">
                    <h1 >Servicios</h1>
                </div>
            </div>
            <div className="infoDetalle">
                <div className="titulos">
                    <h1 >Actividades</h1>
                </div>
            </div>

        </div>
    )
}

export default InfoDetalle