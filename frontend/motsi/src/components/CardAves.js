import React from 'react';
import '../components/styles/CardAves.css'
import {useHistory} from "react-router-dom";


function CardAves({ src}) {
    const history = useHistory();
    return (
        <React.Fragment>
        <div className="cardAves">
            <img src={src} alt="" />
        </div>
        </React.Fragment>
    )
}

export default CardAves