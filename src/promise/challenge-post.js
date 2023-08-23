import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: 'POST', //modalidad para enviar datos
        mode: 'cors', // el modo de la peticion
        credentials: 'same-origin', // credenciales para autenticaciones
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)//convirtiendo el json a string
    });
    return response;
}

const data = {
    "title": "Eternal Posse",
    "price": 1000000000,
    "description": "A direct map to the One Piece",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

postData(`${API}/products`, data)
 .then((response) => response.json())
 .then((response) => console.log(response))
 .catch(error => console.log(error));
