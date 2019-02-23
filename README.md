# Fantasy Content Generator

[![npm](https://img.shields.io/npm/v/fantasy-content-generator.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-content-generator)

_[Very WIP!]_

> Generate fantasy content for your app, video game, website and more

## Using the Library

### Node/Webpack

`npm install --save fantasy-content-generator`

```js
const FCG = require('fantasy-content-generator');

FCG.Names.orc(); // 'Dunzub Gruulbav'
```

### Direct `<script>` include

Download `./fantasy_content_generator.js` direct from Github and include in a script tag like

```html
<script src="./fantasy_content_generator.js"></script>
```

The API will be available on the global `window.FantasyContentGenerator` object.

```js
window.FantasyContentGenerator.Names.orc(); // 'Dunzub Gruulbav'
```

### Browser

to browserify with bundling built in
`browserify -r through -r duplexer -r ./src/index.js:my-module > bundle.js`

## Tests

```
npm test
```

to run the Jest tests

# Api Reference

## Names

Generate names based on races

```js
const FCG = require('fantasy-content-generator')

FCG.Names.elf(); // 'Hadarai Liadon'
```

## Storyhooks

Generate short, interesting actions for an NPC to take, sparking actions or interest from the player(s)

```js
const FCG = require('fantasy-content-generator')

FCG.Storyhooks.npcActs(); // 'An NPC becomes fearful'
```

## NPCs

Generate NPCs

```js
const FCG = require('fantasy-content-generator')

FCG.NPCs.generate(); // 'An NPC becomes fearful'
```