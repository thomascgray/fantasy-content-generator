const NPCs = require('./index');
const Utils = require('../utils');

describe('NPCs', () => {
    test('generate()', () => {
        Utils.forCount(50, () => {
            const npc = NPCs.generate();
            expect(typeof npc).toBe('object')
            Object.keys(npc).forEach(key => {
                expect(npc[key]).not.toEqual('undefined');
            })
        });
    });

    test('seeded npc - props: {}', () => {
        const npcWithOnlySeedA = {
            name: 'Lilli Murnig',
            gender: 'female',
            race: 'gnome',
            traits: ['I have lots of freckles.', 'I\'m very clumsy.'],
            desires: ['I want to master a musical instrument.'],
            seed: 'a',
            formattedData:
            {
                name: 'Lilli Murnig',
                gender: 'Female',
                race: 'Gnome',
                traits: ['I have lots of freckles.', 'I\'m very clumsy.'],
                desires: ['I want to master a musical instrument.']
            }
        }

        console.log(NPCs.generate({ seed: 'a' }))

        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
    });

    test('seeded npc - props: {race}', () => {
        const seededDwarf = {
            name: 'Morgran Balderk',
            gender: 'male',
            race: 'dwarf',
            traits: ['I never remember a face.',
                'I lost my right eye protecting my family.'
            ],
            desires: ['I want to see my brother succeed.'],
            seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0',
            formattedData: {
                name: 'Morgran Balderk',
                gender: 'Male',
                race: 'Dwarf',
                traits: ['I never remember a face.',
                    'I lost my right eye protecting my family.'
                ],
                desires: ['I want to see my brother succeed.']
            }
        }

        const seededElf = {
            name: 'Bethrynna Naïlo',
            gender: 'female',
            race: 'elf',
            traits: ['My hair is an unusual colour for my race.',
                'I lost my right eye protecting my family.'
            ],
            desires: ['I want to be taken more seriously by the guild of my profession...even if it means playing dirty.'],
            seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0',
            formattedData: {
                name: 'Bethrynna Naïlo',
                gender: 'Female',
                race: 'Elf',
                traits: ['My hair is an unusual colour for my race.',
                    'I lost my right eye protecting my family.'
                ],
                desires: ['I want to be taken more seriously by the guild of my profession...even if it means playing dirty.']
            }
        }

        for (let i = 0; i < 10; i++) {
            expect(NPCs.generate({ race: 'dwarf', seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0' })).toEqual(seededDwarf);
        }

        for (let i = 0; i < 10; i++) {
            expect(NPCs.generate({ race: 'elf', seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0' })).toEqual(seededElf);
        }
    });

    test('seeded npc - props: {gender}', () => {
        const seededMale = {
            name: 'Eldon Brushgather',
            gender: 'male',
            race: 'halfling',
            traits:
                ['I am deaf in my right ear.',
                    'I have an unusually small nose.'],
            desires:
                ['I want to travel and see the world, but I can\'t because of I\'m scared of danger.'],
            seed: '7a12d861-3760-4cb7-8fb9-8ea820a794f0',
            formattedData:
            {
                name: 'Eldon Brushgather',
                gender: 'Male',
                race: 'Halfling',
                traits:
                    ['I am deaf in my right ear.',
                        'I have an unusually small nose.'],
                desires:
                    ['I want to travel and see the world, but I can\'t because of I\'m scared of danger.']
            }
        }

        const seededFemale = {
            name: 'Jelenneth Liadon',
            gender: 'female',
            race: 'elf',
            traits: ['I am germaphobic.', 'I have a very quiet voice.'],
            desires:
                ['I want to find my brother - he left to be a cleric and I don\'t know where he is.'],
            seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0',
            formattedData:
            {
                name: 'Jelenneth Liadon',
                gender: 'Female',
                race: 'Elf',
                traits: ['I am germaphobic.', 'I have a very quiet voice.'],
                desires:
                    ['I want to find my brother - he left to be a cleric and I don\'t know where he is.']
            }
        }

        for (let i = 0; i < 10; i++) {
            expect(NPCs.generate({ gender: 'male', seed: '7a12d861-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededMale);
        }

        for (let i = 0; i < 10; i++) {
            expect(NPCs.generate({ gender: 'female', seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededFemale);
        }
    });
});