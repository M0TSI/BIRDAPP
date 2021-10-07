import {URL } from './constants';

const endpoint_cards = "/api/activity"; 

//crear nuevas funciones por cada metodo que llamamos o cada endpoint
export function Get_InfoPlan(body) {
  var requestOptions = {
    method: "GET",
    body: JSON.stringify(body), //Envío el Id y recibo los Datos
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
export function Post_InfoPlan(body) {
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
export function Put_InfoPlan(body) {
  var requestOptions = {
    method: "PUT",
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
export function Delete_InfoPlan(body) {
  var requestOptions = {
    method: "DELETE",
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