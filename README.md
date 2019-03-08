# Fantasy Content Generator


[![npm](https://img.shields.io/npm/v/fantasy-content-generator.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-content-generator)

**Kinda like [Faker.js](https://github.com/marak/Faker.js/), but for D&D 5E themed pieces of content. Need an NPC? A name? A magic item? We gotchu'**

Features:

- Easy to understand API
- Zero dependencies
- Can be used in both Node & browser
- Flavoursome content, designed for roleplaying and quick inspiration for DMs
- Ties-in to D&D 5E mechanics (weapon stats, magic effects, etc.)

---

# Installing

### Node/Webpack

`npm install --save fantasy-content-generator`

```js
const FCG = require('fantasy-content-generator');
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

Below are some usage examples of the library

```js
const FCG = require('fantasy-content-generator');

FCG.Names.elf();
// 'Hadarai Liadon'

FCG.Storyhooks.npcActs()
// 'An NPC takes a liking to a PC'

FCG.NPCs.generate();
/*
{
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
```
# API

There are a number of "sets" available. These are 

- `Names` - generates names based on race and gender
- `Storyhooks` - generates storyhooks
- `NPCs` - generates full NPCs
- `Settlements` - generates settlement information
- `MagicItems` - generates magic items

and can all be found on the base Fantasy Content Generator object.

Most sets exposes a `generate()` function, some expose others unique to that set.

See our [API Reference](./docs/API.md) for full details of the API methods available.

# Tests

```
npm test
```

# Contributing

Open up a PR!

Please make sure your PR includes;

- a thorough description, including what you're changing and why
- tests
    - if you're touching utils stuff, tests to ensure behaviour is correct
    - if you're adding/amending sets, tests to ensure that the final returned object doesn't contain any `undefined`'s, etc.

_If you want to use content taken from other sources, please check with their licensing first. For example, D&D 5E content is OK, as long its from the SRD._

# Credits

[d100 Community](https://www.reddit.com/r/d100/) - Endless Inspiration

[tmcgry](https://twitter.com/tmcgry) - Code & Content

[SkyD1vingNun](https://twitter.com/SkyD1vingNun) - Additional Content