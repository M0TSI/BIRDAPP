import React from 'react';
import { useHistory } from "react-router-dom";
import './ProfileInfo.css';


function ProfileInfo({ src, description, name }) {
    const history = useHistory();
    return (
        <div>
            <div className='infoProf'>
                <div className="contenedorImg">
                    <div >
                        <img className="imagenProf" src={src} alt=""></img>
                    </div>
                    <div className="boton">
                        <button onClick={() => history.push('/card/new')} className="btn btn--1">
                            <h3 className="letra">Añadir un Plan</h3>
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="letra">{name}</h2>
                    <h5 className="letra">{description}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo

