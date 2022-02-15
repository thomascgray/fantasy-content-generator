# Fantasy Content Generator

[![npm](https://img.shields.io/npm/v/fantasy-content-generator.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-content-generator)

**Simple API for generating flavourful and interesting fantasy gaming content. Need an NPC? A name? A magic item? You came to the right place.**

Top Features Include:

- Interesting, flavoursome, and narrative-focused content, designed for roleplaying and inspiration for DMs
- Easy to understand API
- A single dependency (https://www.npmjs.com/package/seedrandom)
- Can be used in both Node & browser
- Optional seeding for deterministic generation
- Ties-in to D&D 5E mechanics (weapon stats, magic effects, etc.)

_Using this library in a project? [Please let me know!](https://twitter.com/tmcgry)_

---

# Installing

### Node/Webpack

`npm install --save fantasy-content-generator`

```js
import FCG from "fantasy-content-generator";
```

### Browser/Direct `<script>` Include

Download [`fantasy_content_generator.js`](https://raw.githubusercontent.com/thomascgray/fantasy-content-generator/master/fantasy_content_generator.js) direct from Github and include in a script tag.

```html
<script src="./fantasy_content_generator.js" type="text/javascript"></script>

<script>
  // API available on window.FantasyContentGenerator
</script>
```

# Usage

```js
import FCG from "fantasy-content-generator";

FCG.Names.generate();
/*
{
  seed: <uuid>,
  name: 'Sutha Chernin',
  race: 'halfOrc',
  gender: 'female',
  formattedData: {
    name: 'Sutha Chernin',
    race: 'Half-Orc',
    gender: 'Female'
  }
}
*/

FCG.Storyhooks.npcActs();
/*
{
  seed: <uuid>,
  storyhook: 'An NPC takes a liking to a PC'
}
*/

FCG.NPCs.generate();
/*
{
  seed: <uuid>,
  name: 'Biri Drachedandion',
  gender: 'female',
  race: 'dragonborn',
  traits: [
    'I am unusually tall for my race.',
    'I\'m very clumsy.'
  ],
  desires: [
    'I want to prove myself in combat, so I\'m going to win a tournament.'
  ]
}
*/

FCG.Settlements.generate();
/*
{
  seed: <uuid>,
  type: 'large_city',
  population: '45,760'
}
*/

FCG.MagicItems.generate();
/*
{
  seed: <uuid>,
  type: 'weapon',
  subtype: 'Battleaxe',
  powerLevel: 'minor',
  schoolOfMagic: 'necromancy',
  effects: [
    'On a successful attack, target must make a DC 12 CON save or take an extra 1d2 of Necrotic damage. This effect occurs once per day.'
  ],
  formattedData: {
    title: 'Battleaxe of Minor Necromancy'
  }
}
*/
```

# API

[API Reference](https://github.com/thomascgray/fantasy-content-generator/blob/master/docs/API.md)

There are a number of "sets" available. These are

- `Names` - generates names based on race and gender
- `NPCs` - generates full NPCs
- `Loots` - generates loot and treasure
- `MagicItems` - generates magic items
- `Storyhooks` - generates storyhooks
- `Settlements` - generates settlement information

and can all be found on the base Fantasy Content Generator object.

Sets expose a `generate()` function, some expose others unique to that set.

_Many of the sets are currently WIP and quite limited. More content to come soon! Follow [me on Twitter](https://twitter.com/tmcgry) for release and update details._

# Tests

```
npm test
```

If you want to run a specific test file manually, ensure you set `ENVIRONMENT=test`

# Contributing

## Development

If you're wanting to quickly test some changes, the best way is to

- `npm run build:node && node` to get a Node build locally and run a node instance locally
- `const FCG = require('./dist/index.js');` to load FCG into memory
- `FCG.NPCs.generate();` you can then start running generators, and seeing the JSON output in your console

## Open Sourcery

Open up a PR!

Please make sure your PR includes;

- a thorough description, including what you're changing and why
- tests
  - if you're touching utils stuff, tests to ensure behaviour is correct
  - if you're adding/amending sets, tests to ensure that the final returned object doesn't contain any `undefined`'s, etc.

_If you want to use content taken from other sources, please check with their licensing first. For example, D&D 5E content is OK, as long its from the SRD._

## Releasing

With permission to release, simply run any one of;

- `npm run publish:patch`
- `npm run publish:minor`
- `npm run publish:major`

from your CLI and follow the steps. Requires NPM to be installed locally on your machine.

# Credits

[d100 Community](https://www.reddit.com/r/d100/) - Endless Inspiration

[tmcgry](https://twitter.com/tmcgry) - Code & Content

[SkyD1vingNun](https://twitter.com/SkyD1vingNun) - Additional Content

[https://github.com/davidbau/seedrandom](https://github.com/davidbau/seedrandom) - Random seeding code, huge thank you
