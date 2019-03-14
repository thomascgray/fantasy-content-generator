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

    test('generate() w/ seed - nothing set', () => {
        expect(Names.generate({ seed: 'a' })).toEqual('gnomeFemale2 gnomeLast2');
        expect(Names.generate({ seed: 'a' })).toEqual('gnomeFemale2 gnomeLast2');
        expect(Names.generate({ seed: 'a' })).toEqual('gnomeFemale2 gnomeLast2');
        expect(Names.generate({ seed: 'b' })).toEqual('humanMale2 humanLast3');
        expect(Names.generate({ seed: 'b' })).toEqual('humanMale2 humanLast3');
        expect(Names.generate({ seed: 'b' })).toEqual('humanMale2 humanLast3');
        expect(Names.generate({ seed: 'c' })).toEqual('halflingMale3 halflingLast1');
        expect(Names.generate({ seed: 'c' })).toEqual('halflingMale3 halflingLast1');
        expect(Names.generate({ seed: 'c' })).toEqual('halflingMale3 halflingLast1');
    });

    test('generate() /w seed & race - race set', () => {
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('dwarfMale2 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('dwarfMale2 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('dwarfMale2 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('dwarfFemale3 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('dwarfFemale3 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('dwarfFemale3 dwarfLast2');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('dwarfFemale2 dwarfLast3');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('dwarfFemale2 dwarfLast3');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('dwarfFemale2 dwarfLast3');
    });

    test('generate() /w seed & gender', () => {
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('gnomeMale2 gnomeLast2');
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('gnomeMale2 gnomeLast2');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('gnomeFemale2 gnomeLast2');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('gnomeFemale2 gnomeLast2');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('humanMale3 humanLast2');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('humanMale3 humanLast2');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('humanFemale3 humanLast2');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('humanFemale3 humanLast2');
    });

    test('generate() w/ seed, race & gender', () => {
        const tieflingMaleXxx = 'tieflingMale2';
        const tieflingMaleYyy = 'humanMale1';
        const tieflingMaleZzz = 'tieflingMale1 humanLast3';

        const halflingFemaleXxx = 'halflingFemale3 halflingLast3';
        const halflingFemaleYyy = 'halflingFemale1 halflingLast1';
        const halflingFemaleZzz = 'halflingFemale3 halflingLast3';
        
        // duplicates are deliberate, to test state
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'tiefling', gender: 'male', seed: 'xxx' })).toEqual(tieflingMaleXxx);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'tiefling', gender: 'male', seed: 'yyy' })).toEqual(tieflingMaleYyy);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'tiefling', gender: 'male', seed: 'xxx' })).toEqual(tieflingMaleXxx);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'tiefling', gender: 'male', seed: 'zzz' })).toEqual(tieflingMaleZzz);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'tiefling', gender: 'male', seed: 'xxx' })).toEqual(tieflingMaleXxx);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'halfling', gender: 'female', seed: 'xxx' })).toEqual(halflingFemaleXxx);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'halfling', gender: 'female', seed: 'yyy' })).toEqual(halflingFemaleYyy);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'halfling', gender: 'female', seed: 'xxx' })).toEqual(halflingFemaleXxx);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'halfling', gender: 'female', seed: 'zzz' })).toEqual(halflingFemaleZzz);
        }
        for (let i = 0; i < 100; i++) {
            expect(Names.generate({ race: 'halfling', gender: 'female', seed: 'xxx' })).toEqual(halflingFemaleXxx);
        }
    });
});