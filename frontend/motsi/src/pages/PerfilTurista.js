import React from 'react';
import Grid from '../components/Grid_UserProfile';

import Header from '../components/Header';
import ProfileInfo from "../components/ProfileInfo";

import './styles/PerfilTurista.css';

function PerfilTurista() {
    const [resultsByUser, setResultsByUser] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState({});
    const [resultsByUserActivities, setresultsByUserActivities] = React.useState({});
    const navegacionPerfil = true;

    React.useEffect(() => {
      //correr metodos de getUser y getPlanesByUser

      setUserInfo({
        src: "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?size=626&ext=jpg",
        description:
          "Hola soy Javier, me gustan los libros, soy taciturno, vegetariano, animalista. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eos!",
        name: "Javier Henao",
      });
      setresultsByUserActivities([
        {
          src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          title: "Titulo",
          id: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia.",
          price: "$120/noche",
          units: "por noche", //valor adicional????
        },
      ]);
      setResultsByUser([
        {
          src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          title: "Titulo",
          id: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia.",
          price: "$120/noche",
          units: "por noche", //valor adicional????
        },
        {
          src: "https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80",
          title: "Titulo 2",
          id: 2,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cupiditate atque ipsa.",
          price: "$110/noche",
        },
        {
          src: "https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
          title: "Titulo 3",
          id: 3,
          description: " Lorem ipsum dolor,",
          price: "$150/noche",
        },
      ]);
    }, []);
    console.log(setresultsByUserActivities.id);
    return (
      <div>
        <Header />

        <div>
          <div>
            <ProfileInfo
              src={userInfo.src ? userInfo.src : ""}
              description={userInfo.description ? userInfo.description : ""}
              name={userInfo.name ? userInfo.name : ""}
            />
          </div>
          <div className="perfil__section">
            <div className="perfil__sectionHead">
              <h3>Servicios</h3>
            </div>

            <Grid results={resultsByUser} navegacionPerfil={navegacionPerfil} />
          </div>
          <div className="perfil__section">
            <div className="perfil__sectionHead">
              <h3>Actividades</h3>
            </div>
            <Grid
              results={resultsByUserActivities}
              navegacionPerfil={navegacionPerfil}
            />
          </div>
        </div>
      </div>
    );
}

export default PerfilTurista