const Names = require('./index.js');
const Utils = require('../utils');
const NameData = require('../data/names.json')

describe('Names', () => {
    const races = Object.keys(NameData);

    test('generate() with race and no gender - make a workable string', () => {
        Utils.forCount(50, () => {
            const race = Utils.pick(races);
            const name = Names.generate({ race });
            expect(typeof name).toBe('string')
            expect(name).toEqual(expect.not.stringContaining('undefined'))
        });
    });

    test('generate() with gender and no race - make a workable string', () => {
        Utils.forCount(50, () => {
            const gender = Utils.pick(['male', 'female']);
            const name = Names.generate({ gender });
            expect(typeof name).toBe('string')
            expect(name).toEqual(expect.not.stringContaining('undefined'))
        });
    });

    test('function call of every race produces a workable string', () => {
        races.forEach(race => {
            const name = Names[race]();
            expect(typeof name).toBe('string')
            expect(name).toEqual(expect.not.stringContaining('undefined'))
        })
    });
});