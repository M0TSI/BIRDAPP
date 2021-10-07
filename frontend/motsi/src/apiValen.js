import {URL } from './constants';

const endpoint_signin = '/api/signin'
const endpoint_login = '/api/login'
const endpoint_getTiposDeUsuario = '/api/getTiposDeUsuario'

export function signin_form (body){
//    let bodyStr = JSON.stringify(body)
    var requestOptions = {
        method : 'POST',
        body : JSON.stringify(body)
//        redirect: 'follow'
    }
    const url = URL + endpoint_signin
    return fetch(url, requestOptions)
        .then(
            (response)=> {
                return response.json()
            }
        )
/*        .then(
            (respuesta)=> {
                return respuesta.json()
            }
        )
*/        .catch(
            (error)=> {
                console.log(error)
                return error 
            }
        )
}

export function getTiposDeUsuario (){
    //    let bodyStr = JSON.stringify(body)
        var requestOptions = {
            method : 'GET',
    //        redirect: 'follow'
        }
        const url = URL + endpoint_getTiposDeUsuario
        return fetch(url, requestOptions)
            .then(
                (response)=> {
                    return response.json()
                }
            )
    /*        .then(
                (respuesta)=> {
                    return respuesta.json()
                }
            )
    */        .catch(
                (error)=> {
                    console.log(error)
                    return error 
                }
            )
    }

    export function login_form (body){
        //    let bodyStr = JSON.stringify(body)
            var requestOptions = {
                method : 'POST',
                body : JSON.stringify(body)
        //        redirect: 'follow'
            }
            const url = URL + endpoint_login
            return fetch(url, requestOptions)
                .then(
                    (response)=> {
                        return response.json()
                    }
                )
        /*        .then(
                    (respuesta)=> {
                        return respuesta.json()
                    }
                )
        */        .catch(
                    (error)=> {
                        console.log(error)
                        return error 
                    }
                )
        }
    