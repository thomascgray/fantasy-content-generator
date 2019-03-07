const Settlements = require('./index');
const Utils = require('../utils');

describe('Settlements', () => {
    test('npcActs()', () => {
        Utils.forCount(50, () => {
            const settlement = Settlements.generate();
            expect(typeof settlement).toEqual('object');
            Object.keys(settlement).forEach(key => {
                expect(settlement[key]).not.toEqual('undefined');
            })
        });
    });
});