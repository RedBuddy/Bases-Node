const fs = require('fs');

const colors = require('colors');

// Forma con async, por defecto retorna una promesa
const CrearTabla = async (base, listar, hasta) => {
    let salida = '', print = '';

    for (let i = 1; i <= hasta; i++) {
        print += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${colors.cyan(i * base)}\n`;
        salida += `${base} x ${i} = ${i * base}\n`;
    };

    if (listar) {
        console.log(`\n${'==='.blue} Tabla del ${colors.italic(base)} ${'==='.blue}\n`);
        console.log(print);
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw `Error, Archivo no creado, ${error}`;
    }
};





module.exports = {
    // CrearTabla: CrearTabla - Es redundante
    CrearTabla
};




/* Forma como funcion
const CrearTabla = (base = 0) => {
    let salida = "";

    for (let i = 0; i <= 10; i++) {
        salida += `${base} x ${i} = ${i * base}\n`;
    };

    console.log("=== Tabla del 5 ===\n");
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return console.log('Tabla-5.txt Creada');

};
*/


/* Forma como Promesa
const CrearTabla = (base) => {
    let salida = "";

    return new Promise((resolve, reject) => {
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${i * base}\n`;
        };

        console.log("=== Tabla del 5 ===\n");
        console.log(salida);

        try {
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        } catch (error) {
            throw reject(`Error, Archivo no creado, ${error}`);
        }
    });
};
*/