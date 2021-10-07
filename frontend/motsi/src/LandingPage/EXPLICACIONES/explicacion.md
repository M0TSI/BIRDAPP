import {URL } from './constants';

da   en lel     archivo 'constants'
//se le asigna el endpoint a la variable endpoint_cards
const endpoint_cards = '/api/activity'

//se crea una funcion 'cards_form', la cual va a recibir el 'body' de otra vista
export function cards_form (body){
    
    //a body le hacemos un stringify
    let bodyStr = JSON.stringify(body)
    
    //se crea una variable 'requestOptions' en la que se va a contener las condiciones del body
    var requestOptions = 
    const url = URL + endpoint_cards
    return fetch(url)
        .then(
     

    // se crea una constante 'url' en la que se guarda el URL de la API y el endpoint        (response)=> {
                return response.json

    //Se hace un fetch, la que recibe()
            }
        )
        .then(
            (res)=> {
                return res.json()
            }
        )
        .catch(
            (error)=> {
                console.log(error)
                return error 
            }
        )
}



//id: Optional[str]=None
//provider_id: Optional[str]=None
title: str
description:str
price: float
//content : str
//status: bool
//isNegotiable: bool 
//contactNumber: int