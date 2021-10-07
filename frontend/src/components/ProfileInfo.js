import React from 'react';
import { useHistory } from "react-router-dom";
import './styles/ProfileInfo.css';


function ProfileInfo({ src, description, name }) {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className='infoProf'>
                <div className="contenedorImg">
                        
                    <img className="imagenProf" src={src} alt=""></img>

                    <div className="boton">
                        <button onClick={() => history.push('/card/new')} className="btn btn--1">
                            <h3 className="letra">Añadir un Plan</h3>
                        </button>
                    </div>
                </div>
                <div className="descriptionInfo">
                <hr></hr>
                    <h2 className="letra">{name}</h2>
                    <hr></hr>
                    <h5 className="letra">{description}</h5>
                    <hr></hr>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileInfo

