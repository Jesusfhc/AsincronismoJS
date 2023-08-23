// se crea una promesa 
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
         ? setTimeout(()=>resolve('Async'), 2000) 
         : reject(new Error('Error!'))
    })
}

const anotherFn = async() => { // se senala como la nueva funcion es asincrona
    const something = await fnAsync(); // dentro de la logica de la funcion se senala con await la promesa que se espera 
    console.log(something); // trabajando con la data
    console.log('hello!')
}

console.log('before')
anotherFn();
console.log('affter')