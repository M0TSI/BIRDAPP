import React from 'react';
import './styles/InfoDetalle.css';
import CardAves from './CardAves';
import Alert from "react-bootstrap/Alert";
import CardAmenities from './CardAmenities';

function InfoDetalle({ results, resultsAves }) {
    return (
        <React.Fragment>
        <div>
            <div className="infoDetalle">
                <div className="titulos">
                    <h1 >Aves</h1>
                </div>
                {(results ? results.length > 0 : results) ? (
          resultsAves.map((item, index) => {
            return (
              <div key={index}>
                <CardAves
                  src={item.src}
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
        


            <div className="infoDetalle">
                <div className="titulos">
                    <h1 >Servicios</h1>
                </div>
                {(results ? results.length > 0 : results) ? (
                    results.map((item, index) => {
                        return (
                        <div key={index}>
                            <CardAmenities
                            src={item.src}
                            name={item.name}
                            />
                        </div>
                        );
                    })
                    ) : (
                    <div>
                        <Alert variant="info" style={{ marginTop: 50, marginBottom: 50 }}>
                        No se encuentran servicios registrados
                        </Alert>
                    </div>
                    )}

            </div>

        </div>
        </React.Fragment>
    )
}

export default InfoDetalle