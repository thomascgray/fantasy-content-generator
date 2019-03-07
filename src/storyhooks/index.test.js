const Storyhooks = require('./index');
const Utils = require('../utils');

describe('Storyhooks', () => {
    test('npcActs()', () => {
        Utils.forCount(50, () => {
            const storyhook = Storyhooks.npcActs();
            expect(storyhook).not.toEqual('undefined');
        });
    });
});