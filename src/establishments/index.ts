import * as Utils from "../utils";
import {
  IEstablishmentGenerateProps,
  IEstablishmentDomainObject,
  INPCDomainObject,
  ISeed
} from "../interfaces";
import EstablishmentData from "./establishments.json";
import GenericData from "../genericData.json";
import NPCs from "../npcs";

const _establishmentSecret = () => {
  return Utils.parseTemplate(
    Utils.pick(EstablishmentData.establishmentSecrets)
  );
};

const getNpcLastNames = (npcs: INPCDomainObject[]) => {
  const npcLastNames = npcs.map(npc => npc.formattedData.lastName);
  return npcLastNames;
};

const _establishmentNameSetA = (npcs: INPCDomainObject[]) => {
  const npcLastNames = Utils.pickMany(getNpcLastNames(npcs), 2);
  const anyItemPool = [
    ...GenericData.weapon,
    ...GenericData.armour,
    ...GenericData.commonItem
  ];

  return Utils.parseTemplate(
    Utils.pick(EstablishmentData.establishmentNameSetA),
    {
      anyItem: Utils.pick(anyItemPool),
      animal: Utils.pick(GenericData.animalSingular),
      sizeAdjective: Utils.pick(GenericData.sizeAdjectives),
      colourAdjective: Utils.pick(GenericData.coloursAdjective),
      nounPhysicalAdjective: Utils.pick(GenericData.nounPhysicalAdjectives),
      positiveAdjective: Utils.pick(GenericData.positiveAdjective),
      ownersLastName: npcs[0].formattedData.lastName,
      lastNameA: npcLastNames[0],
      lastNameB: npcLastNames[1]
    }
  );
};

const _establishmentName = (type, npcs) => {
  switch (type) {
    case "general_store":
    case "inn":
    case "tavern":
    case "armorsmith":
    case "weaponsmith":
    case "stable":
    case "carpenter":
    case "leatherworker":
    case "tanner":
    case "cobbler":
    default:
      return _establishmentNameSetA(npcs);
  }
};

const _npcs = (seed: ISeed, establishmentType: string) => {
  const poolOfOptionalVocationTypes = [
    ...EstablishmentData.establishmentVocationsOptional,
    ...(EstablishmentData.establishmentVocationsOptionalPerType[
      establishmentType
    ] || [])
  ];

  // generate with 1 required, and 1 or 2 optional ones
  const workerVocations = [
    Utils.pick(EstablishmentData.establishmentVocationsRequired),
    ...Utils.pickMany(poolOfOptionalVocationTypes, Utils.rand(1, 2))
  ];

  return workerVocations.map((vocation, index) => {
    const npc = NPCs.generate({
      seed: `${seed}${vocation}${index}`
    });
    npc.vocation = vocation;
    npc.formattedData.vocation = Utils.titleCase(vocation);
    return npc;
  });
};

const _establishmentType = () => {
  return Utils.pick(EstablishmentData.establishments);
};

export const generate = (
  props: IEstablishmentGenerateProps = {}
): IEstablishmentDomainObject => {
  let { type, seed } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    type = type ? type : _establishmentType();

    const npcs = _npcs(seed, type);
    const name = _establishmentName(type, npcs);
    const secret = _establishmentSecret();

    return {
      seed,
      name,
      type,
      secret,
      npcs,
      formattedData: {
        name: Utils.titleCase(name),
        type: Utils.titleCase(type),
        secret,
        npcs
      }
    };
  });
};

const functions = {
  generate
};

export default functions;
