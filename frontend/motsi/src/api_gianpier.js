import {URL} from './constants';

const endpoint_cards = '/user/serviceprovider'

export function get_serviceProviderInfo (body, id)
{
    let bodyStr = JSON.stringify(body)
    var requestOptions = {
        method : 'GET',
        body : bodyStr,
        redirect: 'follow'
}
    const url = URL + endpoint_cards + id
    return fetch(url, requestOptions)
        .then(
            (response)=> {
                return response.json()
            }
        )
        .catch(
            (error)=> {
                console.log(error)
                return error 
            }
        )
}