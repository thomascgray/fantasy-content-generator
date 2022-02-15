import * as Utils from "../utils";
import { IMonsterGenerateProps, IMonsterDomainObject } from "../interfaces";
import MonsterData from "./monster.json";

export const generate = (
  props: IMonsterGenerateProps = {}
): IMonsterDomainObject => {
  let { type, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    type = type ? type : Utils.pick(MonsterData.type);

    const attributes = {
      visual_description: Utils.pick(MonsterData[`visual_description_${type}`]),
      attacks_with: Utils.pick(MonsterData[`attacks_with_${type}`]),
    };

    let templateVariables = {};

    switch (type) {
      case "swarm":
        const grossSwarmVerbs = Utils.pickMany(MonsterData.gross_swarm_verb, 2);
        templateVariables = {
          ...templateVariables,
          gross_swarm_verb_1: grossSwarmVerbs[0],
          gross_swarm_verb_2: grossSwarmVerbs[1],
        };
        break;
    }

    const formattedDescription = Utils.parseTemplate(
      `This {beast/creature} {looks like/resembles} ${attributes.visual_description}. It {hunts using/attacks using} ${attributes.attacks_with}.`,
      templateVariables
    );

    return {
      seed,
      formattedDescription,
    };
  });
};

const functions = {
  generate,
};

export default functions;
