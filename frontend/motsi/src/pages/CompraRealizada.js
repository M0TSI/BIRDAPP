import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import './styles/CompraRealizada.css'
function CompraRealizada() {
    return (
        <React.Fragment>
            <Header/>
            <div className="all">
                <div className="wrapper">
                    <div className="outer">
                        <div className="contentEndPurchase animated fadeInLeft">
                            <span className="bgEndPurchase animated fadeInDown">Terminaste</span><br></br><br></br>
                                <h2 >¡GRACIAS POR TU COMPRA!</h2>
                                <p>Esperamos que disfrutes tu plan.<br/> 
                                Por favor haz click en el botón de abajo para retornar a las actividades</p>
                
                            <button class="buttonEndPurchase">
                               <Link to='/' className="returnEndPurchase" href>VOLVER A LAS ACTIVIDADES</Link>
                            </button>
                
                        </div> 
                    <img className="imageEndPurchase animated fadeInRight" src="https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="300px"  alt=''></img>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CompraRealizada
