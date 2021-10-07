import React, { useState } from "react";
import "../components/styles/Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner({ showSearch, setShowSearch }) {
  const history = useHistory();
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <React.Fragment>
        <div className="banner">
          <div className="banner__info">
            <h1>Bienvenido</h1>
            <h5>Aquí encontrarás actividades nuevas</h5>
            <Button onClick={() => history.push("/search")} variant="outlined">
              Explora{" "}
            </Button>
          </div>
        </div>
        <div className="banner__search">
          <div className="banner__searchButton">
            <h4>Encuentra el plan que se acomode a tu itinerario</h4>
            <Button className="border" onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? "Ocultar" : "Busca planes por fechas"}
            </Button>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Banner;
