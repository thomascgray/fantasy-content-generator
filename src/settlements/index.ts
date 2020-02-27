import * as Utils from "../utils";
import {
  ISettlementGenerateProps,
  ISettlementDomainObject
} from "../interfaces";
import SettlementData from "./settlements.json";
import NPCs from "../npcs";

const settlementType = () => Utils.pick(Object.keys(SettlementData.types));

const _population = settlementType => {
  const population = Utils.rand(
    SettlementData.types[settlementType].minPop,
    SettlementData.types[settlementType].maxPop
  );

  return population.toLocaleString();
};

const _establishmentSecret = (settlementType, establishmentType) => {
  const secret = Utils.pick(SettlementData.establishmentSecrets);
  return Utils.parseTemplate(secret);
};

const _establishments = settlementType => {
  const establishmentTypes = Utils.pickMany(
    SettlementData.establishments,
    SettlementData.types[settlementType].establishments
  );

  const establishments = establishmentTypes.map(type => {
    return {
      type,
      npcs: _npcs(settlementType, type),
      secret: _establishmentSecret(settlementType, type)
    };
  });

  return establishments;
};

const _npcs = (settlementType, establishmentType) => {
  const poolOfOptionalVocationTypes = [
    ...SettlementData.establishmentVocationsOptional,
    ...(SettlementData.establishmentVocationsOptionalPerType[
      establishmentType
    ] || [])
  ];

  const workerVocations = [
    Utils.pick(SettlementData.establishmentVocationsRequired),
    ...Utils.pickMany(poolOfOptionalVocationTypes, Utils.rand(1, 2))
  ];

  return workerVocations.map(vocation => {
    const npc = NPCs.generate();
    npc.vocation = vocation;
    npc.formattedData.vocation = Utils.titleCase(vocation);
    return npc;
  });
};

export const generate = (
  props: ISettlementGenerateProps = {}
): ISettlementDomainObject => {
  let { type, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    type = type ? type : settlementType();

    return {
      seed,
      type,
      population: _population(type),
      establishments: _establishments(type)
    };
  });
};

const functions = {
  generate
};

export default functions;
