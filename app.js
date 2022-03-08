
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
var colors = require('colors');



console.clear();

base = argv.base

crearArchivo(base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(err => console.log(err));

    // // const [, , arg3 = 'base=5'] = process.argv;
// // const [, base = 5 ] =arg3.split('=');
// // console.log(base);