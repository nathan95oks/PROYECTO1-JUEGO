import { Auto } from './simulador.js';

describe('Auto - Versión 2', () => {
    test('Debe inicializar el auto en la posición y orientación dadas', () => {
        const auto = new Auto(0, 0, 'N', 5, 5);
        expect(auto.x).toBe(0);
        expect(auto.y).toBe(0);
        expect(auto.orientacion).toBe('N');
    });

    test('Debe avanzar hacia el norte correctamente', () => {
        const auto = new Auto(0, 0, 'N', 5, 5);
        auto.avanzar();
        expect(auto.x).toBe(0);
        expect(auto.y).toBe(1);
    });

    test('Debe girar hacia la derecha correctamente', () => {
        const auto = new Auto(0, 0, 'N', 5, 5);
        auto.girar('D');
        expect(auto.orientacion).toBe('E');
    });

    test('Debe girar hacia la izquierda correctamente', () => {
        const auto = new Auto(0, 0, 'N', 5, 5);
        auto.girar('I');
        expect(auto.orientacion).toBe('O');
    });
});
