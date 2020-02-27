import * as Utils from "../utils";
import {
  IEstablishmentGenerateProps,
  IEstablishmentDomainObject
} from "../interfaces";
import EstablishmentData from "./establishments.json";
import NPCs from "../npcs";

const _establishmentSecret = () => {
  return Utils.parseTemplate(
    Utils.pick(EstablishmentData.establishmentSecrets)
  );
};

const _generalStoreName = () => {};
const _innOrTavernName = () => {};
const _armorSmithName = () => {};
const _weaponsmithName = () => {};

const _establishmentName = type => {
  switch (type) {
    case "general_store":
      return _generalStoreName();
    case "stable":
      return "";
    case "inn":
    case "tavern":
      return _innOrTavernName();
    case "armorsmith":
      return _armorSmithName();
    case "weaponsmith":
      return _weaponsmithName();
    case "carpenter":
      return "";
    case "leatherworker":
      return "";
    case "tanner":
      return "";
    case "cobbler":
      return "";
  }
};

const _npcs = establishmentType => {
  const poolOfOptionalVocationTypes = [
    ...EstablishmentData.establishmentVocationsOptional,
    ...(EstablishmentData.establishmentVocationsOptionalPerType[
      establishmentType
    ] || [])
  ];

  const workerVocations = [
    Utils.pick(EstablishmentData.establishmentVocationsRequired),
    ...Utils.pickMany(poolOfOptionalVocationTypes, Utils.rand(1, 2))
  ];

  return workerVocations.map(vocation => {
    const npc = NPCs.generate();
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

    return {
      seed,
      type,
      name: _establishmentName(type),
      npcs: _npcs(type),
      secret: _establishmentSecret()
    };
  });
};

const functions = {
  generate
};

export default functions;
