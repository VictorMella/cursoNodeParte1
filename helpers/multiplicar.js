const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base = 1,listar , max = 10) => {
    try {
  
        let salida = ''
        for (let index = 1; index <= max; index++) {
            salida += (`${base} x ${index} = ${base*index} \n`);
        }
        if(listar) {
            console.log('=================='.yellow);
            console.log(`La tabla del: ${colors.blue(base)}`.red);
            console.log('=================='.yellow);
            console.log(salida.rainbow);
        }

        // MANERA 1
        // fs.writeFile(`La_tabla_del_${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // });  

        // MANERA 2
        fs.writeFileSync(`./salida/La_tabla_del_${base}.txt`, salida);

        return `La_tabla_del_${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}