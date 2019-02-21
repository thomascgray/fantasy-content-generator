const MagicItems = require('../src/magic_items')

console.log('****MAGIC ITEMS - WEAPONS****');
console.log(MagicItems.generate({ type: 'weapon', schoolOfMagic: 'necromancy' }));