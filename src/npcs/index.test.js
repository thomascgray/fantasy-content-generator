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

    test('seed output with no props', () => {
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

        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
        expect(NPCs.generate({ seed: 'a' })).toEqual(npcWithOnlySeedA);
    });

    test.only('seed output with no props', () => {
        const seededDwarf = {
            name: 'Riswynn Balderk',
            gender: 'female',
            race: 'dwarf',
            traits: ['My voice is harsh from years of smoking.',
                'My hair is an unusual colour for my race.'
            ],
            desires: ['I want revenge against my sister for murdering our mother for her own financial gain.'],
            seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0',
            formattedData: {
                name: 'Riswynn Balderk',
                gender: 'Female',
                race: 'Dwarf',
                traits: ['My voice is harsh from years of smoking.',
                    'My hair is an unusual colour for my race.'
                ],
                desires: ['I want revenge against my sister for murdering our mother for her own financial gain.']
            }
        }
  
        console.log(NPCs.generate({ race: 'dwarf', seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0' }));

        // expect(NPCs.generate({ race: 'dwarf', seed: '9a12d861-3760-4cb7-8fb9-8ea835a794f0' })).toEqual(seededDwarf);
        // expect(NPCs.generate({ race: 'dwarf', seed: '9a12d861-3760-4cb7-8fb9-8ea835a794f0' })).toEqual(seededDwarf);
        // expect(NPCs.generate({ race: 'elf', seed: 'a' })).toEqual(seededElf);
        // expect(NPCs.generate({ race: 'elf', seed: 'a' })).toEqual(seededElf);
    });
});