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
        const npcSeeded = { name: 'elfFemale1 humanLast1',
        gender: 'female',
        race: 'halfElf',
        traits:
         [ 'My eyes are very piercing, and bright green.',
           'I have soft, full hair.' ],
        desires: [ 'I want justice for the crimes committed against my clan.' ],
        seed: '7a12d861-3760-4cb7-8fb9-8ea111a794f0',
        formattedData:
         { name: 'elfFemale1 humanLast1',
           gender: 'Female',
           race: 'Half-Elf',
           traits:
            [ 'My eyes are very piercing, and bright green.',
              'I have soft, full hair.' ],
           desires: [ 'I want justice for the crimes committed against my clan.' ] } }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ seed: '7a12d861-3760-4cb7-8fb9-8ea111a794f0' })).toEqual(npcSeeded);
        }
    });

    test('seeded npc - props: {race}', () => {
        const seededDwarf = { name: 'dwarfMale1 dwarfLast1',
        gender: 'male',
        race: 'dwarf',
        traits:
         [ 'I have thick, shaggy hair.',
           'I lost my right eye protecting my family.' ],
        desires:
         [ 'I want to find an ancient shield that I was told of as a child.' ],
        seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0',
        formattedData:
         { name: 'dwarfMale1 dwarfLast1',
           gender: 'Male',
           race: 'Dwarf',
           traits:
            [ 'I have thick, shaggy hair.',
              'I lost my right eye protecting my family.' ],
           desires:
            [ 'I want to find an ancient shield that I was told of as a child.' ] } }

        const seededElf = { name: 'elfFemale1 elfLast3',
        gender: 'female',
        race: 'elf',
        traits:
         [ 'I have soft, full hair.',
           'I lost my left eye in a bar brawl.' ],
        desires:
         [ 'I want to find an ancient shield that I was told of as a child.' ],
        seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0',
        formattedData:
         { name: 'elfFemale1 elfLast3',
           gender: 'Female',
           race: 'Elf',
           traits:
            [ 'I have soft, full hair.',
              'I lost my left eye in a bar brawl.' ],
           desires:
            [ 'I want to find an ancient shield that I was told of as a child.' ] } }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'dwarf', seed: '7a12d861-3760-4cb7-8fb9-8ea835a794f0' })).toEqual(seededDwarf);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'elf', seed: '7a12d861-3060-4cb7-8fb9-7ea835a794f0' })).toEqual(seededElf);
        }
    });

    test('seeded npc - props: {gender}', () => {
        const seededMale = { name: 'halflingMale1 halflingLast1',
        gender: 'male',
        race: 'halfling',
        traits:
         [ 'My eyes are very piercing, and bright green.',
           'I lost my right eye hunting a great beast.' ],
        desires: [ 'All I want is enough money to pay off my debts.' ],
        seed: '7a12d861-3760-4cb7-8fb9-8ea820a794f0',
        formattedData:
         { name: 'halflingMale1 halflingLast1',
           gender: 'Male',
           race: 'Halfling',
           traits:
            [ 'My eyes are very piercing, and bright green.',
              'I lost my right eye hunting a great beast.' ],
           desires: [ 'All I want is enough money to pay off my debts.' ] } }

        const seededFemale = { name: 'elfFemale2 elfLast1',
        gender: 'female',
        race: 'elf',
        traits:
         [ 'My eyes are very piercing, and bright green.',
           'I lost my right eye hunting a great beast.' ],
        desires: [ 'All I want is enough money to pay off my debts.' ],
        seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0',
        formattedData:
         { name: 'elfFemale2 elfLast1',
           gender: 'Female',
           race: 'Elf',
           traits:
            [ 'My eyes are very piercing, and bright green.',
              'I lost my right eye hunting a great beast.' ],
           desires: [ 'All I want is enough money to pay off my debts.' ] } }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ gender: 'male', seed: '7a12d861-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededMale);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ gender: 'female', seed: '7a12d231-3760-4cb7-8fb9-8ea820a794f0' })).toEqual(seededFemale);
        }
    });

    test('seeded npc - props: {race, gender}', () => {
        const seededTieflingMale = { name: 'tieflingMale3',
        gender: 'male',
        race: 'tiefling',
        traits:
         [ 'I lost my left eye in a bar brawl.',
           'My eyes are very piercing, and bright blue.' ],
        desires:
         [ 'I want justice for the crimes committed against my family.' ],
        seed: '1a11d111-3160-4cb1-8fb9-8ea820a194f0',
        formattedData:
         { name: 'tieflingMale3',
           gender: 'Male',
           race: 'Tiefling',
           traits:
            [ 'I lost my left eye in a bar brawl.',
              'My eyes are very piercing, and bright blue.' ],
           desires:
            [ 'I want justice for the crimes committed against my family.' ] } }

        const seededGnomeFemale = { name: 'gnomeFemale1 gnomeLast1',
        gender: 'female',
        race: 'gnome',
        traits:
         [ 'I lost my right eye protecting my family.',
           'I have soft, full hair.' ],
        desires:
         [ 'I want clear my name of false wrongdoings - I didn\'t murder the noble!' ],
        seed: '7a12d861-3760-2cb2-2fb2-2ea220a794f0',
        formattedData:
         { name: 'gnomeFemale1 gnomeLast1',
           gender: 'Female',
           race: 'Gnome',
           traits:
            [ 'I lost my right eye protecting my family.',
              'I have soft, full hair.' ],
           desires:
            [ 'I want clear my name of false wrongdoings - I didn\'t murder the noble!' ] } }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'tiefling', gender: 'male', seed: '1a11d111-3160-4cb1-8fb9-8ea820a194f0' })).toEqual(seededTieflingMale);
        }

        for (let i = 0; i < 100; i++) {
            expect(NPCs.generate({ race: 'gnome', gender: 'female', seed: '7a12d861-3760-2cb2-2fb2-2ea220a794f0' })).toEqual(seededGnomeFemale);
        }
    });

    test('trait()', () => {
      const trait = NPCs.trait();

      expect(typeof trait).toBe('string')
      expect(trait).not.toBe('undefined')
    });

    test('desire()', () => {
      const desire = NPCs.desire();

      expect(typeof desire).toBe('string')
      expect(desire).not.toBe('undefined')
    });

    describe('getRelationTitlesFromDesires()', () => {
      test('get father', () => {
        const desires = [ 'i want to find my father' ]
        const titles = NPCs.getRelationTitlesFromDesires(desires);

        expect(titles.length).toEqual(1);
        expect(titles).toContain('father');
      });
      test('get brother and sister', () => {
        const desires = [ 'i want to find my brother', 'i want to kill my sister' ]
        const titles = NPCs.getRelationTitlesFromDesires(desires);

        expect(titles.length).toEqual(2);
        expect(titles).toContain('brother');
        expect(titles).toContain('sister');
      });
      test('get nothing', () => {
        const desires = [ 'i want to find my dog' ]
        const titles = NPCs.getRelationTitlesFromDesires(desires);

        expect(titles.length).toEqual(0);
      });
    });

    describe('generateRelationships()', () => {
      test('generates a father', () => {
        const desires = [ 'i want to kill my father' ];

        const relations = NPCs.generateRelationships({
          race: 'dwarf',
          gender: 'male',
          desires
        });

        expect(relations.length).toEqual(1);
        expect(relations[0].relationTitle).toEqual('father');
        expect(relations[0].npc.formattedData.gender).toEqual('Male');
        expect(relations[0].npc.formattedData.race).toEqual('Dwarf');
      });

      test('generates a sister', () => {
        const desires = [ 'i want to kill my sister' ];

        const relations = NPCs.generateRelationships({
          race: 'tiefling',
          gender: 'male',
          desires
        });

        expect(relations.length).toEqual(1);
        expect(relations[0].relationTitle).toEqual('sister');
        expect(relations[0].npc.formattedData.gender).toEqual('Female');
        expect(relations[0].npc.formattedData.race).toEqual('Tiefling');
      });

      test('generates a mother and a daughter', () => {
        const desires = [ 'i want to find my mother', 'i want to find my daughter' ];

        const relations = NPCs.generateRelationships({
          race: 'tiefling',
          gender: 'male',
          desires
        });

        expect(relations.length).toEqual(2);
        expect(relations[0].relationTitle).toEqual('mother');
        expect(relations[0].npc.formattedData.gender).toEqual('Female');
        expect(relations[0].npc.formattedData.race).toEqual('Tiefling');
        expect(relations[1].relationTitle).toEqual('daughter');
        expect(relations[1].npc.formattedData.gender).toEqual('Female');
        expect(relations[1].npc.formattedData.race).toEqual('Tiefling');
      });
    });
});