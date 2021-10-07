import React from 'react';
import { useHistory } from "react-router-dom";
import './styles/ProfileInfo.css';


function ProfileInfo({ src, description,description2, name }) {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className='infoProf'>
                <div className="contenedorImg">
                        
                    <img className="imagenProf" src={src} alt=""></img>

                    
                </div>
                <div className="descriptionInfo">
                <hr></hr>
                    <h2 className="letra">{name}</h2>
                    <hr></hr>
                    
                    <h4 className="letra">Información de Contacto:</h4>
                    <h5 className="letra">{description}</h5>
                    <h5 className="letra">{description2}</h5>
                    <hr></hr>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileInfo
