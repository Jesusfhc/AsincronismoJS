const XMLHttpRequest = require('xmlhttprequest'); // objeto Javascript que se utiliza para consumir API
const API = 'https://api.escuelajs.co/api/v1'; // api que se pretende consumir 

function fetchData(urlApi, callback) {
    let xhhtp = new XMLHttpRequest(); // creando una nueva instancia del objeto

    xhhtp.open('GET', urlApi, true); //metodo que se utiliza para solicitar al api
    xhhtp.onreadystatechange = function (event) {
        if(xhhtp.readyState === 4) { // 4 significa que hubo coneccion 
            if(xhhtp.status === 200) { // 200 que la solicitud fue correcta
                callback(null, JSON.parse(xhhtp.resposeText)); //responseText, el resultado de la API en un texto
            }
        } else {
            const error = new Error('Error'+ urlApi)
            return callback(error, null)
        }
    }
    xhhtp.send(); //envia el request presentado
}