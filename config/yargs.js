const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check( (argv , option) => {
                if (isNaN(argv.b)){
                    throw 'La base debe ser un numero'
                }
                return true;
            } )
            .option('l', {
                alias: 'list',
                default: false,
                type: 'boolean',
                describe: 'Muestra la tabla por consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                defaul: 10,
                describe: 'Limite de la tabla de multiplicar'
            })
            .argv;


module.exports = argv;