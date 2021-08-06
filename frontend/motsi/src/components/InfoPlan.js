import React from 'react';
import { useHistory } from "react-router-dom";
import './styles/InfoPlan.css';
import { Link } from "react-router-dom";


function InfoPlan({ src, description, name, price }) {
    const history = useHistory();
    return (
        <div>
            <div className="infoplan">
                <div className="ImagenC">
                    <img className="Imagen" src={src} alt=""></img>
                </div>

                <div className="PriceNameC">
                    <h3 className="Bold">{name}</h3>
                    <Link to='/'><h3 className="BoldPrice">${price} usd/dia</h3></Link>
                </div>
                <div className="divInfo">
                <h5>{description}</h5>
                </div>

            </div>

        </div>
    )
}

export default InfoPlan