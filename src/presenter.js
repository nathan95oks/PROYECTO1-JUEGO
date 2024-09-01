import { Auto } from './simulador.js';

function simularMovimiento(cadenaComandos) {
    const [superficie, posicionInicial, comandos] = cadenaComandos.split('/');
    const [x, y, orientacion] = posicionInicial.split(',').map((value, index) => index < 2 ? parseInt(value) : value);
    const [max_x, max_y] = superficie.split(',').map(Number);
    const auto = new Auto(x, y, orientacion, max_x, max_y);

    for (let comando of comandos) {
        if (comando === 'A') auto.avanzar();
        if (comando === 'I' || comando === 'D') auto.girar(comando);
    }

    return `${auto.x},${auto.y} ${auto.orientacion}`;
}

function procesarEntrada(cadenaComandos) {
    const resultado = simularMovimiento(cadenaComandos);
    return resultado;
}

export { procesarEntrada, simularMovimiento };
