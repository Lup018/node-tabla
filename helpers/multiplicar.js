const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = "";
        
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;

        }

        if (listar) {
            console.log(salida);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        console.log(base)
    
        return(`tabla-${base}.txt`);
    } catch (error) {
        throw err
    }
}

module.exports = {
    crearArchivo
}