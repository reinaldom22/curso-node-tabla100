const fs = require('fs');
var colors = require('colors');

const crearArchivo =  (base, list, h = 10) => {
    return new Promise( (resolve, reject) => {

        console.clear();

        let salida = '';
        let consola = '';
    
        for (let index = 1; index  <= h; index++) {
        salida +=  `${base} x ${index} =  ${base*index}\n`; 
        consola +=  `${base} ${'x'.underline.red} ${index} =  ${base*index}\n`; 
        }
        if(list){
            console.log('======================'.blue);
            console.log(`Tabla del : ${base} `.red);
            console.log('======================'.blue);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida)
        resolve(`tabla-${base}.txt`);
        // console.log('Archivo guardado con exito!');
    });
    }

module.exports = {
    crearArchivo
}
  
