import React from 'react';
import './styles/SelectorFoto.css';
import CardForm from '../components/CardForm';
import { cards_form } from '../api';


function SelectorFoto(props) {


    return (
        <div className="centro">
            <div>
                
                <div className="drag-drop">

                    <input
                        className="input"
                        type="file"
                        multiple="multiple"
                        id="photo"
                        onChange={props.HandleChangeFile}
                    />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-cloud fa-stack-2x bottom pulsating"></i>
                        <i className="fa fa-circle fa-stack-1x top medium"></i>
                        <i className="fa fa-arrow-circle-fa-stack-1x top"></i>
                    </span>
                    <span className="desc">Pulse aquí para añadir archivos</span>
                </div>
            </div>

        </div>
    )
}

export default SelectorFoto