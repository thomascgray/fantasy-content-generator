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
        expect(Names.generate({ seed: 'a' })).toEqual('Mardnab Ningel');
        expect(Names.generate({ seed: 'a' })).toEqual('Mardnab Ningel');
        expect(Names.generate({ seed: 'a' })).toEqual('Mardnab Ningel');
        expect(Names.generate({ seed: 'b' })).toEqual('Urth Kao');
        expect(Names.generate({ seed: 'b' })).toEqual('Urth Kao');
        expect(Names.generate({ seed: 'b' })).toEqual('Urth Kao');
        expect(Names.generate({ seed: 'c' })).toEqual('Perrin Brushgather');
        expect(Names.generate({ seed: 'c' })).toEqual('Perrin Brushgather');
        expect(Names.generate({ seed: 'c' })).toEqual('Perrin Brushgather');
    });

    test('generate() /w seed & race - race set', () => {
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Einkil Ironfist');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Einkil Ironfist');
        expect(Names.generate({ race: 'dwarf', seed: 'a' })).toEqual('Einkil Ironfist');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Torgga Holderhek');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Torgga Holderhek');
        expect(Names.generate({ race: 'dwarf', seed: 'b' })).toEqual('Torgga Holderhek');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Rumnaheim');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Rumnaheim');
        expect(Names.generate({ race: 'dwarf', seed: 'c' })).toEqual('Finellen Rumnaheim');
    });

    test('generate() /w seed & gender', () => {
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('Fonkin Ningel');
        expect(Names.generate({ gender: 'male', seed: 'a' })).toEqual('Fonkin Ningel');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('Ellyjobell Ningel');
        expect(Names.generate({ gender: 'female', seed: 'a' })).toEqual('Ellyjobell Ningel');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('Marcon Fezim');
        expect(Names.generate({ gender: 'male', seed: 'b' })).toEqual('Marcon Fezim');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('Luisa Fezim');
        expect(Names.generate({ gender: 'female', seed: 'b' })).toEqual('Luisa Fezim');
    });

    test('generate() w/ seed, race & gender', () => {
        const tieflingMaleXxx = 'Kairon';
        const tieflingMaleYyy = 'Grigor';
        const tieflingMaleZzz = 'Akmenos Pisacar';

        const halflingFemaleXxx = 'Seraphina Thorngage';
        const halflingFemaleYyy = 'Euphemia Greenbottle';
        const halflingFemaleZzz = 'Portia Underbough';
        
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