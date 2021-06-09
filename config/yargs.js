const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La bandera -b (numero) sera el numero a multiplicar'
    })
    .check((argv, options) => {
        console.log('YARGS', argv);
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'La bandera -l es para ver si se ven los datos impesosen la consola'
    })

    .option('m', {
        alias: 'max',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Limitar el numero por el cual sera multiplicada la base, ej: base * max'
    })
    .argv

    module.exports = {
        argv
    }
