const LootData = require('./loots.json')
const Utils = require('../utils')

const sourceFunc = props => {
    if (props == null) {
        props = {}
    }

    const source = (props.source) ? props.source : Utils.pick(LootData.loot_source);

    const lootItem = Utils.pick(LootData.loot_per_loot_source[source]);

    if (lootItem) {
        return {
            source,
            loot: Utils.parseTemplate(lootItem)
        }
    }
}

const functions = {
    source: sourceFunc
}

module.exports = functions