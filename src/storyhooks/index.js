const Utils = require("../utils");

const generate = (props = {}, storyhookBank) => {
  const seed =
    props.seed ||
    globalThis.FantasyContentGeneratorSeed || // eslint-disable-line
    Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    return {
      seed,
      storybook: Utils.parseTemplate(Utils.pick(storyhookBank))
    };
  });
};

const functions = {
  npcActs: (props = {}) => generate(props, require("./npc_acts.json")),
  pcRelated: (props = {}) => generate(props, require("./pc_related.json"))
};

module.exports = functions;
