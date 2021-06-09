const {
    crearArchivo
} = require('./helpers/multiplicar')

const {
    argv
} = require('./config/yargs')

const colors = require('colors');




crearArchivo(argv.b, argv.l, argv.m)
    .then(resp => console.log(resp.green))
    .catch(err => console.log(err))
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=')
// console.log(arg3);
// console.log(base);
// for (let index = 1; index <=10; index++) {
//     crearArchivo (index)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

// }