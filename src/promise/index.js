const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('hey')
    } else {
        reject('ney')
    }
});

const cows = 3;

const countCows = new Promise((resolve,reject) => {
    if (cows > 10) {
        resolve(`cumplimos con la demanda, tenemos ${cows} vacas`)
    } else {
        reject('no hay suficientes vakas')
    }
});

countCows
 .then((result) => {
    console.log(result)
})
 .catch((err => console.log(err)))
 .finally(() => console.log('Finally'))