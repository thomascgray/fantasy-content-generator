const LootData = require("./loots.json");
import * as Utils from "../utils";
import { ILootGenerateProps } from "../interfaces";

export const generate = (props: ILootGenerateProps = {}) => {
  let { source, seed } = props;

  seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); // eslint-disable-line

  return Utils.withSeed(seed, () => {
    source = source || Utils.pick(LootData.loot_source);

    const lootItem = Utils.pick(LootData.loot_per_loot_source[source]);

    return {
      seed,
      source,
      lootItem
    };
  });
};

const functions = {
  generate
};

export default functions;
