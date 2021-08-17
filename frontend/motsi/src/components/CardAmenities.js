import React from 'react';
import '../components/styles/CardAmenities.css'


function CardAmenities({ src, name}) {
    return (
        <React.Fragment>
        <div className="CardAmeniti">
            <img src={src} alt="" />
            <p>{name}</p>
        </div>
        </React.Fragment>
    )
}

export default CardAmenities