
const simularMovimiento = require('./simulador');


const cadenaComandos1 = '5,5/1,2N/IAIAIAIAA';
const resultado1 = simularMovimiento(cadenaComandos1);
console.log(`Entrada: ${cadenaComandos1}`);
console.log(`Posición Final: ${resultado1}\n`);

const cadenaComandos2 = '5,5/3,3E/AADAADADDA';
const resultado2 = simularMovimiento(cadenaComandos2);
console.log(`Entrada: ${cadenaComandos2}`);
console.log(`Posición Final: ${resultado2}`);
