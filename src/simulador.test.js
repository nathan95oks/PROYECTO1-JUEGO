const { Auto } = require('./simulador');

describe('Auto - Versión 1', () => {
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

    test('Debe avanzar hacia el este correctamente', () => {
        const auto = new Auto(0, 0, 'E', 5, 5);
        auto.avanzar();
        expect(auto.x).toBe(1);
        expect(auto.y).toBe(0);
    });
});