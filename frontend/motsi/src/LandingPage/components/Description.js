import React from 'react';
import '../components/styles/Description.css'

function Description(){
    return(
        <React.Fragment>
        <div className="container">
            <div className="text">
                <h1>viaje al rio</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="offer">
                <div className="NextIcon">
                    <h1>Rio frio</h1>
                    <h3>16 personas  comida</h3>
                </div>
                <div className="icon">
                    <img width="50px" src="https://img.icons8.com/bubbles/452/google-logo.png" alt=""></img>
                </div>
            </div>
            <div className="info">
                <h2>Buen servicio</h2>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Description