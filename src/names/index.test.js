const Names = require('./index.js');
const Utils = require('../utils');
const NameData = require('../data/names.json')

describe('Names', () => {
    const races = Object.keys(NameData);

    test('generate() with no race and no gender - make a workable string', () => {
        Utils.forCount(50, () => {
            const name = Names.generate();
            expect(typeof name).toBe('string')
            expect(name).toEqual(expect.not.stringContaining('undefined'))
        });
    });

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

    test('generate() with a seed always gives the same result - nothing set', () => {
        expect(Names.generate({ seed: 'a' })).toEqual('Ellyjobell Ningel');
        expect(Names.generate({ seed: 'a' })).toEqual('Ellyjobell Ningel');
        expect(Names.generate({ seed: 'a' })).toEqual('Ellyjobell Ningel');
        expect(Names.generate({ seed: 'b' })).toEqual('Marcon Fezim');
        expect(Names.generate({ seed: 'b' })).toEqual('Marcon Fezim');
        expect(Names.generate({ seed: 'b' })).toEqual('Marcon Fezim');
        expect(Names.generate({ seed: 'c' })).toEqual('Errich Thorngage');
        expect(Names.generate({ seed: 'c' })).toEqual('Errich Thorngage');
        expect(Names.generate({ seed: 'c' })).toEqual('Errich Thorngage');
    });

    test('generate() with a seed always gives the same result - race set', () => {
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Morgran Frostbeard');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Morgran Frostbeard');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Morgran Frostbeard');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Dagnal Torunn');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Dagnal Torunn');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Dagnal Torunn');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Frostbeard');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Frostbeard');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Frostbeard');
    });

    test('generate() with a seed always gives the same result - gender set', () => {
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('Glim Garrick');
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('Glim Garrick');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('Lorilla Garrick');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('Lorilla Garrick');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('Malark Domine');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('Malark Domine');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('Lureene Domine');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('Lureene Domine');
    });
});