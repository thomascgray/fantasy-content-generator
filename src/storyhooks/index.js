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

const npcActs = (props = {}) => generate(props, require("./npc_acts.json"));

const pcRelated = (props = {}) => generate(props, require("./pc_related.json"));

const functions = {
  generate: (props = {}) => {
    const seed =
      props.seed ||
      globalThis.FantasyContentGeneratorSeed || // eslint-disable-line
      Utils.generateUUID();

    return Utils.withSeed(seed, () => {
      return Utils.pick([npcActs, pcRelated])(props);
    });
  },
  npcActs,
  pcRelated
};

module.exports = functions;
