import {URL } from './constants';

const endpoint_cards = "/api/activity"; //añadir más constantes de acuerdo al endpoint de la peticion

//crear nuevas funciones por cada metodo que llamamos o cada endpoint
export function cards_form(body) {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(body),
    redirect: "follow",
  };
  const url = URL + endpoint_cards;
  return fetch(url, requestOptions)
    .then((response) => {
      return response.json();
    })
    /*        .then(
            (respuesta)=> {
                return respuesta
            }
        )
*/ .catch((error) => {
      console.log(error);
      return error;
    });
}





// //id: Optional[str]=None
// //provider_id: Optional[str]=None
// title: str
// description:str
// price: float
// //content : str
// //status: bool
// //isNegotiable: bool 
// //contactNumber: int