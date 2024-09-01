const simularMovimiento = require('./simulador');

function procesarEntrada(cadenaComandos) {
    const resultado = simularMovimiento(cadenaComandos);
    return resultado;
}

module.exports = { procesarEntrada };
