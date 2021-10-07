import React from 'react';
import '../components/styles/CardAvesE.css'
import {useHistory} from "react-router-dom";


function CardAvesE({ src}) {
    const history = useHistory();
    return (
        <React.Fragment>
        <div className='cardA' /*onClick={() => history.push('/VistaDetallada')}*/>
            <div>
                <img src={src} alt="" />
                <div>
                    <button className="eliminar"></button>
                </div>            
            </div>
        </div>
        </React.Fragment>
    )
}

export default CardAvesE