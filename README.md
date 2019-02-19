# Fantasy Content Generator

[![npm](https://img.shields.io/npm/v/fantasy-content-generator.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-content-generator)

_[Very WIP!]_

> Generate fantasy content for your app, video game, website and more

## Using the Library

`npm install --save fantasy-content-generator`

See API reference for full details of content available to generate

```js
const FCG = require('fantasy-content-generator')

FCG.Names.orc(); // 'Dunzub Gruulbav'
```

## Tests

```
npm test
```

to run the Jest tests

## Api Reference

### Names

Generate names based on races

```js
const FCG = require('fantasy-content-generator')

FCG.Names.elf(); // 'Hadarai Liadon'
```

### Storyhooks

Generate short, interesting actions for an NPC to take, sparking actions or interest from the player(s)

```js
const FCG = require('fantasy-content-generator')

FCG.Storyhooks.npcActs(); // 'An NPC becomes fearful'
```

### NPCs

Generate NPCs

```js
const FCG = require('fantasy-content-generator')

FCG.NPCs.generate(); // 'An NPC becomes fearful'
```