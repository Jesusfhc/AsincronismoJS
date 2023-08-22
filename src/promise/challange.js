import fetch from 'node-fetch'; // se necesita importar esta funcion cuando se trabaja localmente, mas no al momento de usarlo en el navegador (npm i node-fetch)
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI); // fetch es una promesa que realiza el consumo de API https y sus respuesta se maneja a traves del resultado de las promesas
};

// fetchData(`${API}/products`)
//  .then((response) => response.json())
//  .then(products => console.log(products))
//  .catch(error => console.log(error));

 fetchData(`${API}/products`)
  .then((response) => response.json())
  .then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name)
  })
  .catch(error => console.log(error));