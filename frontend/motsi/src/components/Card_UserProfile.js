import React from 'react';
import '../components/styles/Card_UserProfile.css'
import {useHistory} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';


function Card({ src, title, description, price, id, navegacionPerfil }) {
  const history = useHistory();
  console.log("id en card", id);
  console.log("naveg perfil en card antes", navegacionPerfil);
  //pasar el id por el history.push para consultar en la nueva pagina el plan por id
  return (
    <React.Fragment>
      <div
        className="card"
        // onClick={() => {
        //   console.log("naveg perfil en card onclick", navegacionPerfil);
          // history.push({
          //   pathname: "/VistaDetallada",
          //   state: {
          //     idPlan: id,
          //     navPerfil: navegacionPerfil,
          //   },
          // });
        // }}
        style={{ overflow: "hidden", borderRadius: 10 }}
      >
        <img src={src} alt="" style={{ display: "flex", flex: 1 }} />
        <div
          className="card__info"
          style={{ display: "flex", flex: 1, flexDirection: "column" }}
        >
          <h2>{title}</h2>
          <div className='divBtnEdit'>        
            <div onClick={() => {
              history.push({
                pathname: "/card/edit",
                state: {
                  idPlan: id,
                },
              });
            }} className='botonEdit btn-outline-success'>
              <a>Editar  <EditIcon></EditIcon></a>
            </div>
          </div>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Card
