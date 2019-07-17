const Utils = require('./index');
const _ = require('lodash')

describe('parseTemplate', () => {
    test('no placeholders returns same', () => {
      const test = 'sphinx of black quartz; judge my vow!'
      expect(Utils.parseTemplate(test)).toEqual('sphinx of black quartz; judge my vow!')
    });

    test('single placeholder with 1 option - use that option', () => {
      const test = 'sphinx of {black} quartz; judge my vow!'
      expect(Utils.parseTemplate(test)).toEqual('sphinx of black quartz; judge my vow!')
    });

    test('multiple placeholders, each with 1 option - use those options', () => {
      const test = '{sphinx} of {black} quartz; judge {my} {vow}!'
      expect(Utils.parseTemplate(test)).toEqual('sphinx of black quartz; judge my vow!')
    });

    test('placeholder with 2 options', () => {
      const test = 'sphinx of {black/green} quartz; judge my vow!'

      const tracker = {
        'sphinx of black quartz; judge my vow!': 0,
        'sphinx of green quartz; judge my vow!': 0,
      }

      for (let i = 0; i < 100; i++) {
        const parsed = Utils.parseTemplate(test);
        tracker[parsed] += 1
      }

      expect(tracker['sphinx of black quartz; judge my vow!']).toBeGreaterThan(0);
      expect(tracker['sphinx of green quartz; judge my vow!']).toBeGreaterThan(0);
    });

    test('placeholder with variable replacements', () => {
      const test = 'sphinx of {$colour} quartz; judge my vow!'
      expect(Utils.parseTemplate(test, {
        colour: 'green'
      })).toEqual('sphinx of green quartz; judge my vow!')
    })

    test('placeholder with multiple variable replacements', () => {
      const test = 'sphinx of {$colour} quartz; judge my {$action}!'
      expect(Utils.parseTemplate(test, {
        colour: 'green',
        action: 'hat'
      })).toEqual('sphinx of green quartz; judge my hat!')
    })

    test('placeholder with options and multiple variable replacements', () => {
      const test = '{sphinx/lion} of {$colour} quartz; judge my {$action}!';

      const tracker = {
        'sphinx of green quartz; judge my hat!': 0,
        'lion of green quartz; judge my hat!': 0,
      }

      for (let i = 0; i < 100; i++) {
        const parsed = Utils.parseTemplate(test, {
          colour: 'green',
          action: 'hat',
        });
        tracker[parsed] += 1
      }

      expect(tracker['sphinx of green quartz; judge my hat!']).toBeGreaterThan(0);
      expect(tracker['lion of green quartz; judge my hat!']).toBeGreaterThan(0);
    })

    test('linked placeholders', () => {
      const test = 'the spell was {HEAT::fire/ice} - this made it {HEAT::hot/cold}';

      const tracker = {
        'the spell was fire - this made it hot': 0,
        'the spell was ice - this made it cold': 0,
        'the spell was fire - this made it cold': 0, // should stay zero
        'the spell was ice - this made it hot': 0, // should stay zero
      }

      for (let i = 0; i < 100; i++) {
        const parsed = Utils.parseTemplate(test);
        tracker[parsed] += 1
      }

      expect(tracker['the spell was fire - this made it hot']).toBeGreaterThan(0);
      expect(tracker['the spell was ice - this made it cold']).toBeGreaterThan(0);
      expect(tracker['the spell was fire - this made it cold']).toEqual(0);
      expect(tracker['the spell was ice - this made it hot']).toEqual(0);
    })

    test('linked placeholders - including normal placeholders', () => {
      const test = 'the spell was {weak/strong} and {HEAT::fire/ice} - this made it {HEAT::hot/cold}';

      const tracker = {
        'the spell was weak and fire - this made it hot': 0,
        'the spell was strong and fire - this made it hot': 0,
        'the spell was weak and ice - this made it cold': 0,
        'the spell was strong and ice - this made it cold': 0,
        'the spell was weak and fire - this made it cold': 0, // should stay zero
        'the spell was strong and fire - this made it cold': 0, // should stay zero
        'the spell was weak and ice - this made it hot': 0, // should stay zero
        'the spell was strong and ice - this made it hot': 0, // should stay zero
      }

      for (let i = 0; i < 100; i++) {
        const parsed = Utils.parseTemplate(test);
        tracker[parsed] += 1
      }

      expect(tracker['the spell was weak and fire - this made it hot']).toBeGreaterThan(0);
      expect(tracker['the spell was strong and fire - this made it hot']).toBeGreaterThan(0);
      expect(tracker['the spell was weak and ice - this made it cold']).toBeGreaterThan(0);
      expect(tracker['the spell was strong and ice - this made it cold']).toBeGreaterThan(0);
      expect(tracker['the spell was weak and fire - this made it cold']).toEqual(0);
      expect(tracker['the spell was strong and fire - this made it cold']).toEqual(0);
      expect(tracker['the spell was weak and ice - this made it hot']).toEqual(0);
      expect(tracker['the spell was strong and ice - this made it hot']).toEqual(0);
    })

    test('linked placeholders - including normal placeholders AND reference placeholders', () => {
      const test = 'the spell was {weak/strong} and {$size} and {HEAT::fire/ice} - this made it {HEAT::hot/cold} and {$colour}';

      const tracker = {
        'the spell was weak and big and fire - this made it hot and blue': 0,
        'the spell was strong and big and fire - this made it hot and blue': 0,
        'the spell was weak and big and ice - this made it cold and blue': 0,
        'the spell was strong and big and ice - this made it cold and blue': 0,
        'the spell was weak and big and fire - this made it cold and blue': 0, // should stay zero
        'the spell was strong and big and fire - this made it cold and blue': 0, // should stay zero
        'the spell was weak and big and ice - this made it hot and blue': 0, // should stay zero
        'the spell was strong and big and ice - this made it hot and blue': 0, // should stay zero
      }

      for (let i = 0; i < 100; i++) {
        const parsed = Utils.parseTemplate(test, {
          size: 'big',
          colour: 'blue'
        });
        tracker[parsed] += 1
      }

      expect(tracker['the spell was weak and big and fire - this made it hot and blue']).toBeGreaterThan(0);
      expect(tracker['the spell was strong and big and fire - this made it hot and blue']).toBeGreaterThan(0);
      expect(tracker['the spell was weak and big and ice - this made it cold and blue']).toBeGreaterThan(0);
      expect(tracker['the spell was strong and big and ice - this made it cold and blue']).toBeGreaterThan(0);
      expect(tracker['the spell was weak and big and fire - this made it cold and blue']).toEqual(0);
      expect(tracker['the spell was strong and big and fire - this made it cold and blue']).toEqual(0);
      expect(tracker['the spell was weak and big and ice - this made it hot and blue']).toEqual(0);
      expect(tracker['the spell was strong and big and ice - this made it hot and blue']).toEqual(0);
    })
});

describe('pick', () => {
    test('pick an item from array', () => {
      const items = ['a', 'b', 'c']
      const item = Utils.pick(items);

      expect(typeof item).toBe('string')
      expect(item.length).toBe(1)
      expect(items).toContain(item);
    });

    test('pick a different item each time', () => {
      const items = ['a', 'b', 'c']

      const tracker = { 'a' : 0, 'b': 0, 'c': 0 }

      for (let i = 0; i < 100; i++) {
        const item = Utils.pick(items);
        tracker[item] += 1
      }

      expect(tracker['a']).toBeGreaterThan(0);
      expect(tracker['b']).toBeGreaterThan(0);
      expect(tracker['c']).toBeGreaterThan(0);
    });

    test('pick 2 items', () => {
      const items = ['a', 'b', 'c']
      const picked = Utils.pick(items, 2);

      expect(typeof picked).toBe('object')
      expect(Array.isArray(picked)).toBe(true)
      expect(picked.length).toBe(2)
      expect(items).toContain(picked[0])
      expect(items).toContain(picked[1])
    });

    test('pick 3 items', () => {
      const items = ['a', 'b', 'c']
      const picked = Utils.pick(items, 3);

      expect(typeof picked).toBe('object')
      expect(Array.isArray(picked)).toBe(true)

      expect(picked.length).toBe(3)
      expect(items).toContain(picked[0])
      expect(items).toContain(picked[1])
      expect(items).toContain(picked[2])

      // make sure they're not the same
      expect(picked[0]).not.toBe(picked[1])
      expect(picked[0]).not.toBe(picked[2])
      expect(picked[1]).not.toBe(picked[2])

      // make sure they're all unique
      expect(_.uniq(picked).length).toBe(3)
    });
});

//todo do something clever here with checking distributions?
describe('rand', () => {
  test('generate between 1 and 10', () => {
    const min = 1;
    const max = 10;

    const tracker = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
    }

    for (let i = 0; i < 100; i++) {
      const x = Utils.rand(min, max);
      expect(x).toBeGreaterThanOrEqual(1);
      expect(x).toBeLessThanOrEqual(10);
      tracker[x] += 1;
    }

    expect(tracker[1]).toBeGreaterThan(0);
    expect(tracker[2]).toBeGreaterThan(0);
    expect(tracker[3]).toBeGreaterThan(0);
    expect(tracker[4]).toBeGreaterThan(0);
    expect(tracker[5]).toBeGreaterThan(0);
    expect(tracker[6]).toBeGreaterThan(0);
    expect(tracker[7]).toBeGreaterThan(0);
    expect(tracker[8]).toBeGreaterThan(0);
    expect(tracker[9]).toBeGreaterThan(0);
    expect(tracker[10]).toBeGreaterThan(0);
  });

  test('generate between 1 and 3', () => {
    const tracker = {
      1: 0,
      2: 0,
      3: 0
    }

    for (let i = 0; i < 500; i++) {
      const v = Utils.rand(1, 3);
      tracker[v] += 1;
    }

    expect(tracker[1]).toBeGreaterThan(0);
    expect(tracker[2]).toBeGreaterThan(0);
    expect(tracker[3]).toBeGreaterThan(0);
  });

  test('generate between 0 and 3', () => {
    const tracker = {
      0: 0,
      1: 0,
      2: 0,
      3: 0
    }

    for (let i = 0; i < 500; i++) {
      const v = Utils.rand(0, 3);
      tracker[v] += 1;
    }

    expect(tracker[0]).toBeGreaterThan(0);
    expect(tracker[1]).toBeGreaterThan(0);
    expect(tracker[2]).toBeGreaterThan(0);
    expect(tracker[3]).toBeGreaterThan(0);
  });
});

describe('forCount', () => {
  test('add value to outside array', () => {
    const vals = [];

    Utils.forCount(2, () => {
      vals.push('a')
    });

    expect(vals.length).toBe(2);
    expect(vals[0]).toBe('a');
    expect(vals[1]).toBe('a');
  });
});

describe('titleCase', () => {
  test('single word negative', () => {
    expect(Utils.titleCase('alpha')).not.toEqual('alpha')
  });

  test('single word', () => {
    expect(Utils.titleCase('alpha')).toEqual('Alpha')
  });

  test('multiple words', () => {
    expect(Utils.titleCase('alpha beta gamma')).toEqual('Alpha Beta Gamma')
  });

  test('hyphens dont count as word breaks', () => {
    expect(Utils.titleCase('half-orc')).toEqual('Half-orc')
  });
});

describe('formatRace', () => {
  test('PHB races', () => {
    expect(Utils.formatRace('dragonborn')).toEqual('Dragonborn')
    expect(Utils.formatRace('dwarf')).toEqual('Dwarf')
    expect(Utils.formatRace('elf')).toEqual('Elf')
    expect(Utils.formatRace('gnome')).toEqual('Gnome')
    expect(Utils.formatRace('halfElf')).toEqual('Half-Elf')
    expect(Utils.formatRace('halfOrc')).toEqual('Half-Orc')
    expect(Utils.formatRace('halfling')).toEqual('Halfling')
    expect(Utils.formatRace('human')).toEqual('Human')
    expect(Utils.formatRace('tiefling')).toEqual('Tiefling')
  });
});

describe('seedrandom', () => {
  test('pass the same seed and get the same random 10 numbers', () => {
    Utils.resetSeed();
    expect(Utils.rand(1, 1000, 'A')).toEqual(796);
    expect(Utils.rand(1, 1000, 'A')).toEqual(96);
    expect(Utils.rand(1, 1000, 'A')).toEqual(790);
    expect(Utils.rand(1, 1000, 'A')).toEqual(37);
    expect(Utils.rand(1, 1000, 'A')).toEqual(905);
    expect(Utils.rand(1, 1000, 'A')).toEqual(823);
    expect(Utils.rand(1, 1000, 'A')).toEqual(771);
    expect(Utils.rand(1, 1000, 'A')).toEqual(61);
    expect(Utils.rand(1, 1000, 'A')).toEqual(885);
    expect(Utils.rand(1, 1000, 'A')).toEqual(119);
  });

  test('passing the seed, then not passing the seed, then passing the same seed should NOT reset the seed', () => {
    Utils.resetSeed();
    expect(Utils.rand(1, 1000, 'A')).toEqual(796);
    expect(Utils.rand(1, 1000, 'A')).toEqual(96);
    expect(Utils.rand(1, 1000, 'A')).toEqual(790);
    expect(Utils.rand(1, 1000, 'A')).toEqual(37);
    expect(Utils.rand(1, 1000, 'A')).toEqual(905);
    expect(Utils.rand(1, 1000, 'A')).toEqual(823);
    expect(Utils.rand(1, 1000, 'A')).toEqual(771);
    expect(Utils.rand(1, 1000, 'A')).toEqual(61);
    expect(Utils.rand(1, 1000, 'A')).toEqual(885);
    expect(Utils.rand(1, 1000, 'A')).toEqual(119);
    expect(typeof Utils.rand(1, 1000)).toEqual('number');
    expect(Utils.rand(1, 1000, 'A')).toEqual(997);
  });

  test('passing a seed, then passing a DIFFERENT seed, then passing the first seed SHOULD reset the seed', () => {
    Utils.resetSeed();
    expect(Utils.rand(1, 1000, 'A')).toEqual(796);
    expect(Utils.rand(1, 1000, 'A')).toEqual(96);
    expect(Utils.rand(1, 1000, 'A')).toEqual(790);
    expect(Utils.rand(1, 1000, 'A')).toEqual(37);
    expect(Utils.rand(1, 1000, 'A')).toEqual(905);
    expect(Utils.rand(1, 1000, 'A')).toEqual(823);
    expect(Utils.rand(1, 1000, 'A')).toEqual(771);
    expect(Utils.rand(1, 1000, 'A')).toEqual(61);
    expect(Utils.rand(1, 1000, 'A')).toEqual(885);
    expect(Utils.rand(1, 1000, 'A')).toEqual(119);
    expect(Utils.rand(1, 1000, 'B')).toEqual(423);
    expect(Utils.rand(1, 1000, 'B')).toEqual(964);
    expect(Utils.rand(1, 1000, 'A')).toEqual(796); // same as start
    expect(Utils.rand(1, 1000, 'A')).toEqual(96);
    expect(Utils.rand(1, 1000, 'A')).toEqual(790);
    expect(Utils.rand(1, 1000, 'A')).toEqual(37);
    expect(Utils.rand(1, 1000, 'A')).toEqual(905);
    expect(Utils.rand(1, 1000, 'A')).toEqual(823);
    expect(Utils.rand(1, 1000, 'A')).toEqual(771);
    expect(Utils.rand(1, 1000, 'A')).toEqual(61);
    expect(Utils.rand(1, 1000, 'A')).toEqual(885);
    expect(Utils.rand(1, 1000, 'A')).toEqual(119);
  });
});

describe('generateUUID', () => {
  test('generate some uuids that are different and the correct length', () => {
    let uuid = Utils.generateUUID();

    expect(uuid.length).toEqual(36);

    let uuid2 = Utils.generateUUID();

    expect(uuid2).not.toEqual(uuid);
    expect(uuid2.length).toEqual(36);
  });
});