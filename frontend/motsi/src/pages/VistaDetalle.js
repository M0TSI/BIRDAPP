import React from "react";
import Header from "../components/Header";
import InfoPlan from "../components/InfoPlan";
import InfoDetalle from "../components/InfoDetalle";
import { Link } from "react-router-dom";
// import { getActivity } from "../apiValen";
// import { id } from "date-fns/locale";
import axios from "axios";

function VistaDetalle(props) {
  const  id_get =props.location.state.idPlan;
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://motsi-mintic2.herokuapp.com/api/v1/get_activities/'
    ,{
      params:{
        "id": id_get
      }
    })
    .then(response => {setResults(response.data[0]) 
    })
    .catch(e=>{
      console.log(e);
    })
    
    }, []);
  console.log(results.id_activity)
  console.log(results)
    
  return (
    <React.Fragment>
      <Header />
      <Link
        to={props.location.state.navPerfil === true ? "/Perfil" : "/"}
        style={{
          display: "flex",
          alignItems: "left",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          className="header_icon"
          src="https://image.flaticon.com/icons/png/512/483/483355.png"
          alt=""
        />
      </Link>
      <div>
        <InfoPlan results={results} />
        <InfoDetalle resultsAves={results.aves} results={results.imagen_portada} />
      </div>
    </React.Fragment>
  );
}

export default VistaDetalle;
