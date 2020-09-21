import * as Utils from "../utils";
import {
  IEstablishmentGenerateProps,
  IEstablishmentDomainObject,
  INPCDomainObject,
  ISeed,
  IEstablishmentType,
} from "../interfaces";
import EstablishmentData from "./establishments.json";
import GenericData from "../genericData.json";
import NPCs from "../npcs";

export const generate = (
  props: IEstablishmentGenerateProps = {}
): IEstablishmentDomainObject => {
  let { type, seed, name } = props;

  seed = seed || Utils.FantasyContentGeneratorSeed || Utils.generateUUID();

  return Utils.withSeed(seed, () => {
    type = type ? type : _establishmentType();
    const npcs = _npcs(seed, type);

    name = name ? name : _establishmentName(type, npcs);

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
        description,
      },
    };
  });
};

const _establishmentSecret = () => {
  return Utils.parseTemplate(
    Utils.pick(EstablishmentData.establishmentSecrets)
  );
};

const getNpcStoreFrontNames = (npcs: INPCDomainObject[]) => {
  const names = npcs.map((npc) =>
    npc.formattedData.lastName
      ? npc.formattedData.lastName
      : npc.formattedData.firstName
  );
  return names;
};

/**
 * generate a name for the establishment. takes the type of establishment
 * and all the npcs
 */
const _establishmentName = (
  type: IEstablishmentType,
  npcs: INPCDomainObject[]
) => {
  const _establishmentNameSetA = (npcs: INPCDomainObject[]) => {
    const npcStoreFrontNames = Utils.pickMany(getNpcStoreFrontNames(npcs), 2);
    const anyItemPool = [
      ...GenericData.weapon,
      ...GenericData.armour,
      ...GenericData.commonItem,
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
        lastNameB: npcStoreFrontNames[1],
      }
    );
  };

  switch (type) {
    case "general_store":
    case "stable":
    case "tavern":
    case "grocers":
    case "blacksmith":
    case "tradehouse":
    default:
      return _establishmentNameSetA(npcs);
  }
};

// generate NPCs for the establishment, taking into account the establishment type
const _npcs = (seed: ISeed, establishmentType: IEstablishmentType) => {
  // build an array of all the optional vocations a worker here could have
  const poolOfOptionalVocationTypes = [
    ...EstablishmentData.establishmentVocationsOptional, // all establishments
    ...(EstablishmentData.establishmentVocationsOptionalPerType[
      establishmentType // just the establishment type
    ] || []),
  ];

  // build 1 worker of the required vocations
  const requiredVocation = Utils.pick(
    EstablishmentData.establishmentVocationsRequired
  );

  const requiredNpc = NPCs.generate({
    seed: `${seed}${requiredVocation}`,
  });

  // generate 1 or 2 optional ones
  const workerVocations = [
    ...Utils.pickMany(poolOfOptionalVocationTypes, Utils.rand(1, 2)),
  ];

  const optionalNpcs = workerVocations.map((vocation, index) => {
    const npc = NPCs.generate({
      seed: `${seed}${vocation}${index}`,
    });
    npc.vocation = vocation;
    npc.formattedData.vocation = Utils.titleCase(vocation);
    return npc;
  });

  return [requiredNpc, ...optionalNpcs];
};

const _establishmentType = () => {
  return Utils.pick(EstablishmentData.establishments);
};

const _description = (type: IEstablishmentType) => {
  /*
  description schema, in order:

  - The words "This establishment"
  - a random `establishmentGeneralLookAndAppearances` 
  - a random `establishmentBuiltFrom`
  - a random `establishmentEnteringAndPatrons.i`
  - a random `establishmentEnteringAndPatrons.ii`
  - a random establishment specific line, title cased
  - the words ", and"
  - a random establishment specific line
  */

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
    case "tavern":
      establishmentSpecificLines = Utils.pickMany(
        EstablishmentData.establishmentDescriptionsInn,
        2
      );
      break;
    case "blacksmith":
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

const functions = {
  generate,
};

export default functions;
