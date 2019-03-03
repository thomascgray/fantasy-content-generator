# Fantasy Content Generator

[![npm](https://img.shields.io/npm/v/fantasy-content-generator.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-content-generator)

_[Very WIP!]_

> Generate D&D 5E-flavoured fantasy content for your app, video game, website and more

Kinda like [Faker.js](https://github.com/marak/Faker.js/), but for D&D themed pieces of content! Need an NPC? A name? A magic item? We gotchu'.

*Massive thank you to the [d100](https://www.reddit.com/r/d100/) community for both content and inspiration!*

## Installing & Usage

The library can be used as a NPM module or imported directly into a webpage.

### Node/Webpack

`npm install --save fantasy-content-generator`

```js
const FCG = require('fantasy-content-generator');

FCG.Names.orc(); // 'Dunzub Gruulbav'
```

### Browser/Direct `<script>` Include

Download `./fantasy_content_generator.js` direct from Github and include in a script tag like

```html
<script src="./fantasy_content_generator.js" type="text/javascript"></script>
```

The API will be available on the global `window.FantasyContentGenerator` object.

```js
window.FantasyContentGenerator.Names.orc(); // 'Dunzub Gruulbav'
```

## API

There are a number of "sets" available. These are 

- `Names` - generates names based on race and gender
- `Storyhooks` - generates storyhooks
- `NPCs` - generates full NPCs
- `Settlements` - generates settlement information
- `MagicItems` - generates magic items

and can all be found on the base Fantasy Content Generator object.

Each set exposes a `generate()` function, plus others unique to that set.

See our [API Reference](./docs/API.md) for full details of the API methods available.

## Tests

```
npm test
```

to run the Jest tests.

## Contributing

Open up a PR!

Please make sure your PR includes;

- a good, thorough description
- tests
    - if you're touching utils stuff, tests to ensure behaviour is correct
    - if you're adding/amending sets, tests to ensure that the final returned object doesn't contain any `undefined`'s, etc.


_If you want to use content taken from other sources, please check with their licensing first. For example, D&D 5E content is OK, as long its from the SRD._

## Roadmap

- [ ] move data JSON's around, they're a bit all over the place at the minute
- [ ] finish loots and magic items as a priority

## Credits

[d100 Community](https://www.reddit.com/r/d100/) - Content & Endless Inspiration

[tmcgry](https://twitter.com/tmcgry) - Code & Additional Content

[SkyD1vingNun](https://twitter.com/SkyD1vingNun) - Additional Content