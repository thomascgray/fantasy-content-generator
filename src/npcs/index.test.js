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
        const npcSeeded = {
            name: 'Urth Marivaldi',
            gender: 'male',
            race: 'halfElf',
            traits:
                ['I am germaphobic.',
                    'My right leg is false. I lost it in an accident.'],
            desires:
                ['I want revenge against my brother for murdering our father for his own financial gain.'],
            seed: '7a12d861-3760-4cb7-8fb9-8ea111a794f0',
            formattedData:
            {
                name: 'Urth Marivaldi',
                gender: 'Male',
                race: 'Half-Elf',
                traits:
                    ['I am germaphobic.',
                        'My right leg is false. I lost it in an accident.'],
                desires:
                    ['I want revenge against my brother for murdering our father for his own financial gain.']
            }
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ seed: '7a12d861-3760-4cb7-8fb9-8ea111a794f0' })).toEqual(npcSeeded);
        }
    });

    test('seeded npc - props: {race}', () => {
        const seededDwarf = {
            name: 'Alberich Battlehammer',
            gender: 'male',
            race: 'dwarf',
            traits: ['I never remember a face.',
                'I lost my right eye protecting my family.'
            ],
            desires: ['I want to see my brother succeed.'],
            seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0',
            formattedData: {
                name: 'Alberich Battlehammer',
                gender: 'Male',
                race: 'Dwarf',
                traits: ['I never remember a face.',
                    'I lost my right eye protecting my family.'
                ],
                desires: ['I want to see my brother succeed.']
            }
        }

        const seededElf = {
            name: 'Shanairra Ilphelkiir',
            gender: 'female',
            race: 'elf',
            traits: ['My hair is an unusual colour for my race.',
                'I lost my right eye protecting my family.'
            ],
            desires: ['I want to be taken more seriously by the guild of my profession...even if it means playing dirty.'],
            seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0',
            formattedData: {
                name: 'Shanairra Ilphelkiir',
                gender: 'Female',
                race: 'Elf',
                traits: ['My hair is an unusual colour for my race.',
                    'I lost my right eye protecting my family.'
                ],
                desires: ['I want to be taken more seriously by the guild of my profession...even if it means playing dirty.']
            }
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'dwarf', seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0' })).toEqual(seededDwarf);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'elf', seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0' })).toEqual(seededElf);
        }
    });

    test('seeded npc - props: {gender}', () => {
        const seededMale = {
            name: 'Alton Goodbarrel',
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
                name: 'Alton Goodbarrel',
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
            name: 'Lia Amastacia',
            gender: 'female',
            race: 'elf',
            traits: ['I am germaphobic.', 'I have a very quiet voice.'],
            desires:
                ['I want to find my brother - he left to be a cleric and I don\'t know where he is.'],
            seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0',
            formattedData:
            {
                name: 'Lia Amastacia',
                gender: 'Female',
                race: 'Elf',
                traits: ['I am germaphobic.', 'I have a very quiet voice.'],
                desires:
                    ['I want to find my brother - he left to be a cleric and I don\'t know where he is.']
            }
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ gender: 'male', seed: '7a12d861-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededMale);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ gender: 'female', seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededFemale);
        }
    });

    test('seeded npc - props: {race, gender}', () => {
        const seededTieflingMale = {
            name: 'Aseir',
            gender: 'male',
            race: 'tiefling',
            traits:
                ['I am unusually tall for my race.',
                    'I talk too much when I get nervous.'],
            desires:
                ['I want to prove myself in combat, so I\'m going to beat the local champion.'],
            seed: '1a11d111-3160-4cb1-8fb9-8ea820a194f0',
            formattedData:
            {
                name: 'Aseir',
                gender: 'Male',
                race: 'Tiefling',
                traits:
                    ['I am unusually tall for my race.',
                        'I talk too much when I get nervous.'],
                desires:
                    ['I want to prove myself in combat, so I\'m going to beat the local champion.']
            }
        }

        const seededGnomeFemale = {
            name: 'Donella Beren',
            gender: 'female',
            race: 'gnome',
            traits:
                ['My eyes are very piercing, and bright green.',
                    'I am deaf in my left ear.'],
            desires:
                ['I want to disappear from the law - I\'m on the run for a crime I didn\'t commit.'],
            seed: '7a12d861-3760-2cb2-2fb2-2ea220a794f0',
            formattedData:
            {
                name: 'Donella Beren',
                gender: 'Female',
                race: 'Gnome',
                traits:
                    ['My eyes are very piercing, and bright green.',
                        'I am deaf in my left ear.'],
                desires:
                    ['I want to disappear from the law - I\'m on the run for a crime I didn\'t commit.']
            }
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'tiefling', gender: 'male', seed: '1a11d111-3160-4cb1-8fb9-8ea820a194f0' })).toEqual(seededTieflingMale);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'gnome', gender: 'female', seed: '7a12d861-3760-2cb2-2fb2-2ea220a794f0' })).toEqual(seededGnomeFemale);
        }
    });
});