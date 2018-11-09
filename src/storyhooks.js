const Utils = require('./utils');

const generate = storyhookBank => {
    const storyhooks = require(`../storyhooks/${storyhookBank}.json`)
    const rawStoryhooks = Utils.pick(storyhooks);
    return prepareStoryhook(rawStoryhooks);
}

const prepareStoryhook = storyhook => {
    const regex = /{(.+?)}/gm;

    const matches = storyhook.match(regex);

    if (matches) {
        matches.forEach(match => {
            let replacement = Utils.pick(match.substring(1).substring(0, match.length - 2).split('/'));
            storyhook = storyhook.replace(match, replacement);
        })
    }

    return storyhook;
}

const npcActs = () => {
    return generate('npc_acts')
}

const functions = {
    npcActs
}

module.exports = functions