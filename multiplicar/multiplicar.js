// Requireds
const fs = require('fs'); // Paquete nativo
const colors = require('colors');
//const fs = require('express'); // Libreria externa
//const fs = require('./fs'); // Archivos que creamos que estan en algun lado de nuestro proyecto


let listarTabla = (base, limite = 10) => {
    console.log("===========================".green);
    console.log(`Tabla de ${ base }`.green);
    console.log("===========================".green);
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`table-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = { listarTabla, crearArchivo };