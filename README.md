# Fantasy Content Generator

_[Very WIP!]_

> Generate fantasy content for your app, video game, website and more

## Using the Library

`npm install --save fantasy-content-generator`

```js
// app.js

const FCG = require('fantasy-content-generator')

FCG.Races.orc();
// 'Dunzub Gruulbav'

FCG.NPCs.generate();
// {
//  name: 'Zephlickle Fentombus',
//  race: 'gnome',
//  traits: [
//   'Spits',
//   'Bruises easily'
//  ],
//  flaws: [
//   'I make a joke out of everything.'
//  ]
// }

FCG.Storyhooks.npcActs();
// 'An NPC is caught palming a weapon by the PCs'
```