const Utils = require('./utils');

const generate = storyhookBank => {
    const storyhooks = require(`./storyhooks/${storyhookBank}.json`)
    return Utils.parseStringWithPlaceholders(Utils.pick(storyhooks));
}

const functions = {
    npcActs: () => {
        return generate('npc_acts')
    },
    pcRelated: () => {
        return generate('pc_related')
    },
}

module.exports = functions