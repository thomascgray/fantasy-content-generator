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

      for (let i = 0; i < 200; i++) {
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

      for (let i = 0; i < 200; i++) {
        const parsed = Utils.parseTemplate(test, {
          colour: 'green',
          action: 'hat',
        });
        tracker[parsed] += 1
      }

      expect(tracker['sphinx of green quartz; judge my hat!']).toBeGreaterThan(0);
      expect(tracker['lion of green quartz; judge my hat!']).toBeGreaterThan(0);
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

      for (let i = 0; i < 200; i++) {
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

    for (let i = 0; i < 200; i++) {
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