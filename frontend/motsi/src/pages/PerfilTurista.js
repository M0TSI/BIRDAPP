import React from 'react';
import Grid from '../components/Grid';
import Card from '../components/Grid';
import Header from '../components/Header';
import ProfileInfo from "../components/ProfileInfo";

import './PerfilTurista.css';



function PerfilTurista() {
    return (
        <div>
            <Header />

            <div>
                <div>
                    <ProfileInfo
                        src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?size=626&ext=jpg"
                        description="Hola soy Javier, me gustan los libros, soy taciturno, vegetarioano... Animalista. Hola soy Javier, me gustan los libros, soy taciturno, vegetarioano... Animalist"
                        name="Javier Henao"
                    />
                </div>
                <div className="perfil__section">
                <div className="perfil__sectionHead">
                        <h3>Tus Planes Turísticos</h3>
                    </div>

                    <Grid />

                </div>
            </div>
        </div>
    )
}

export default PerfilTurista