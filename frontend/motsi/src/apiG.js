import { URL, URL_DPTOS } from "./constants";

export function getAllDepartamentos() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const url = URL_DPTOS;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
      return respuesta;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function getAllMunicipios(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const url = URL_DPTOS + "?cod_depto=" + id;
  console.log("url", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((respuesta) => {
      return respuesta;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
