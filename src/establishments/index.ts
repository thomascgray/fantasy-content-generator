import * as Utils from "../utils";
import {
  IEstablishmentGenerateProps,
  IEstablishmentDomainObject,
  INPCDomainObject,
  ISeed,
  IEstablishmentType
} from "../interfaces";
import EstablishmentData from "./establishments.json";
import GenericData from "../genericData.json";
import NPCs from "../npcs";

const _establishmentSecret = () => {
  return Utils.parseTemplate(
    Utils.pick(EstablishmentData.establishmentSecrets)
  );
};

const getNpcStoreFrontNames = (npcs: INPCDomainObject[]) => {
  const names = npcs.map(npc =>
    npc.formattedData.lastName
      ? npc.formattedData.lastName
      : npc.formattedData.firstName
  );
  return names;
};

const _establishmentName = (type, npcs) => {
  const _establishmentNameSetA = (npcs: INPCDomainObject[]) => {
    const npcStoreFrontNames = Utils.pickMany(getNpcStoreFrontNames(npcs), 2);
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
        ownersLastName: npcStoreFrontNames[0],
        lastNameA: npcStoreFrontNames[0],
        lastNameB: npcStoreFrontNames[1]
      }
    );
  };

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

const _npcs = (seed: ISeed, establishmentType: IEstablishmentType) => {
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

const _description = (type: IEstablishmentType) => {
  const lookAndAppearance =
    "This establishment " +
    Utils.pick(EstablishmentData.establishmentGeneralLookAndAppearances);
  const builtFrom = Utils.pick(EstablishmentData.establishmentBuiltFrom);

  const enteringAndPatrons = `${Utils.pick(
    EstablishmentData.establishmentEnteringAndPatrons.i
  )} ${Utils.pick(EstablishmentData.establishmentEnteringAndPatrons.ii)}`;

  // get 2 random lines from the establishment specific descriptions, and format them correctly
  let establishmentSpecificLines = [];

  switch (type) {
    case "inn":
    case "tavern":
      establishmentSpecificLines = Utils.pickMany(
        EstablishmentData.establishmentDescriptionsInn,
        2
      );
      break;
    case "armoursmith":
    case "weaponsmith":
      establishmentSpecificLines = Utils.pickMany(
        EstablishmentData.establishmentDescriptionsArmoursmith,
        2
      );
      break;
    default:
      establishmentSpecificLines = Utils.pickMany(
        EstablishmentData.establishmentDescriptionsDefault,
        2
      );
      break;
  }

  const typeSpecificLine = `${establishmentSpecificLines[0]}, and ${establishmentSpecificLines[1]}.`;

  return Utils.parseTemplate(
    `${lookAndAppearance} ${builtFrom} ${enteringAndPatrons} ${Utils.firstCharacterUppercase(
      typeSpecificLine
    )}`
  );
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
    const description = _description(type);

    return {
      seed,
      name,
      type,
      secret,
      npcs,
      description,
      formattedData: {
        name: Utils.titleCase(name),
        type: Utils.titleCase(type),
        secret,
        npcs,
        description
      }
    };
  });
};

const functions = {
  generate
};

export default functions;
