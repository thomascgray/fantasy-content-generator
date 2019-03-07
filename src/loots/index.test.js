const Loots = require('./index');
const Utils = require('../utils');

describe('Loots', () => {
    test('source()', () => {
        Utils.forCount(50, () => {
            const loot = Loots.source();
            expect(typeof loot).toBe('object')
            Object.keys(loot).forEach(key => {
                expect(loot[key]).not.toEqual('undefined');
            })
        });
    });
});