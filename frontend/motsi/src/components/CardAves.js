import React from 'react';
import '../components/styles/CardAves.css'
import {useHistory} from "react-router-dom";


function CardAves({ src, title}) {
    const history = useHistory();
    return (
        <div className='card' onClick={() => history.push('/VistaDetallada')}>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default CardAves