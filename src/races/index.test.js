const Races = require('./index.js');
const Utils = require('../utils');
const Data = require('../data.json');

describe('generate', () => {
    test('generate with a known race produces a workable string', () => {
        const race = Utils.pick(Data.races);
        const name = Races.generate({ race });
        expect(typeof name).toBe('string')
        expect(name).toEqual(expect.not.stringContaining('undefined'))
    });
});