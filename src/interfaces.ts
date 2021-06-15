export type IRace =
  | "dragonborn"
  | "dwarf"
  | "elf"
  | "gnome"
  | "halfling"
  | "human"
  | "halfOrc"
  | "halfElf"
  | "tiefling";

export type IEstablishmentType =
  | "general_store"
  | "stable"
  | "tavern"
  | "grocers"
  | "blacksmith"
  | "tradehouse";

export type IGender = "male" | "female";

export type ISeed = string | number;

export interface INameGenerateProps {
  race?: IRace;
  gender?: IGender;
  seed?: ISeed;
}

export interface INameDomainObject {
  seed: string;
  name: string;
  race: IRace;
  gender: IGender;
  firstName: string;
  lastName: string;
  formattedData: {
    name: string;
    race: string;
    gender: string;
    firstName: string;
    lastName: string;
  };
}

export interface INPCGenerateProps {
  race?: IRace;
  gender?: IGender;
  seed?: ISeed;
  shouldGenerateRelations?: boolean;
}

export interface INPCRelationObject {
  relationTitle: string;
  npc: INameDomainObject;
}

export interface INPCDomainObject {
  seed: ISeed;
  nameObject: INameDomainObject;
  gender: IGender;
  race: IRace;
  traits: string[];
  desires: string[];
  formattedData: {
    name: string;
    firstName: string;
    lastName: string;
    gender: string;
    race: string;
    traits: string[];
    desires: string[];
    relations: INPCRelationObject[];
    vocation?: string;
  };
  relations: INPCRelationObject[];
  vocation?: string;
}

export interface ISettlementGenerateProps {
  type?: string;
  seed?: ISeed;
}

export interface ISettlementDomainObject {
  seed: ISeed;
  type: string;
  population: string;
}

export interface IStoryhookGenerateProps {
  seed?: ISeed;
}

export interface IStoryhookDomainObject {
  seed: ISeed;
  storyhook: string;
}

export interface IMagicItemGenerateProps {
  seed?: ISeed;
  type?: string;
  powerLevel?: string;
  schoolOfMagic?: string;
  effects?: string[];
  subtype?: string;
}

export interface IMagicItemDomainObject {
  type: string;
  subtype: string;
  powerLevel: string;
  schoolOfMagic: string;
  effects: string[];
  formattedData: {
    title: any;
    owner: any;
    tagline: any;
  };
}

export interface ILootGenerateProps {
  source?: string;
  seed?: string;
  quantity?: number;
}

export interface ILootDomainObject {
  seed: string;
  source: string;
  lootItems: string[];
  quantity: number;
  formattedData: {
    lootItems: string[];
    quantity: number;
    label: string;
  };
}

export interface IEstablishmentGenerateProps {
  seed?: ISeed;
  type?: IEstablishmentType;
  name?: string;
}

export interface IEstablishmentDomainObject {
  seed: ISeed;
  type: string;
  name: string;
  npcs: INPCDomainObject[];
  secret: string;
  formattedData: {
    name: string;
    type: string;
    secret: string;
    npcs: INPCDomainObject[];
  };
}

export type IGuildPrimaryType =
  | "mages"
  | "merchants"
  | "thieves"
  | "fighters"
  | "hunters"
  | "farmers"
  | "laborers";

export interface IGuildGenerateProps {
  seed?: ISeed;
  type?: IGuildPrimaryType;
  name?: string;
}

export interface IGuildDomainObject {
  seed: ISeed;
  type: IGuildPrimaryType;
  name: string;
  npcs: INPCDomainObject[];
  formattedData: {
    name: string;
    type: IGuildPrimaryType;
    npcs: INPCDomainObject[];
  };
}
