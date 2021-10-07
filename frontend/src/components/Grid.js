import React from "react";
import "./styles/Grid.css";
import Card from "../components/Card";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";

function Grid({ results, navegacionPerfil }) {
  const history = useHistory();
  console.log("navegacion perfil en grid", navegacionPerfil);
  return (
    <React.Fragment>
      <div className="grid">
        {(results ? results.length > 0 : results) ? (
          results.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  navegacionPerfil={navegacionPerfil}
                  id={item.id_activity}
                  src={item.activity_media_file}
                  title={item.activity_description}
                  description={item.description}
                  price={item.activity_ammount}
                />
              </div>
            );
          })
        ) : (
          <div>
            <Alert variant="info" style={{ marginTop: 50, marginBottom: 50 }}>
              Su búsqueda no produjo ningún resultado. Intente con otro término.
            </Alert>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Grid;
