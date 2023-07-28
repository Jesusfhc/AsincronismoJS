// es una funcion que se pasa a otra funcion como un argumento, que luego es invocado dentro del llamado

function sum(n1,n2) {
    return n1 + n2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);
}

console.log(calc(15,55,sum));

//ejemplo de callback
function saludo(nombre) {
    console.log('hola '+nombre)
}

setTimeout(saludo,5000, 'Oscar')// despues del tiempo se toman los argumentos que van dirigidos a la callback
