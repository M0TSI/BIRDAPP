import React from 'react';
import './styles/InfoDetalle.css';
import CardAves from './CardAves';
import Alert from "react-bootstrap/Alert";
import CardAmenities from './CardAmenities';
import "./styles/Grid.css";

/* Contenido eliminado de la linea del map de aves
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
*/
/* Contenido Eliminado Map Servicios
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
*/

function InfoDetalle({ results, resultsAves }) {
  return (
    <React.Fragment>
      <div>
        <div className="infoDetalle">
          <div className="titulos">
            <h1 >Aves</h1>
          </div>
          <div className="grid">
            <CardAves
              src="https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/en-exclusiva/embargos/la-ciencia-ciudadana-revela-como-evolucionaron-los-picos-de-las-aves/5919115-11-esl-MX/La-ciencia-ciudadana-revela-como-evolucionaron-los-picos-de-las-aves.jpg"
            />
            <CardAves
              src="https://www.hogarmania.com/archivos/201911/aves-848x477x80xX.jpg"
            />
            <CardAves
              src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/aves_cantoras_trastornos_habla.jpg"
            />
          </div>

        </div>



        <div className="infoDetalle">
          <div className="titulos">
            <h1 >Servicios</h1>
          </div>
          <div className="grid">
          <CardAmenities
                    src="https://www.birdlife.org/sites/default/files/clynes_colombia_aves_432_smaller_1_1.jpg"
                    name="Avistamiento de Aves"
                  />
                  <CardAmenities
                    src="data:image/jpeg;base64,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"
                    name="Camping"
                  />
                  <CardAmenities
                    src="https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2019-07/hike-863454_1920_0.jpg"
                    name="Caminata Ecológica"
                  />
          </div>
          

        </div>

      </div>
    </React.Fragment>
  )
}

export default InfoDetalle