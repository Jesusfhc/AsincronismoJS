function* iterate(array) { //reserve word function* al hacer esto iniciamos un generador
    for (let value of array) {
        yield value // reserve word para generators
    }
}

const it = iterate(['oscar', 'david', 'ulices', 'jennifer', 'ana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
