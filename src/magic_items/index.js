const MagicItemData = require("./magic_items.json");
const Utils = require("../utils");
const Names = require("../names");

const _type = () => Utils.pick(MagicItemData.types);
const _powerLevel = () => Utils.pick(MagicItemData.power_levels);
const _schoolOfMagic = type => {
  if (type === "weapon") {
    return Utils.pick(
      Object.keys(MagicItemData.school_weapon_effects_per_level)
    );
  }
  return Utils.pick(MagicItemData.schools_of_magic);
};

const _effects = (schoolOfMagic, powerLevel) => {
  const effectsCount = Utils.parseTemplate(
    MagicItemData.item_effects_per_level[powerLevel]
  );
  return Utils.pick(
    MagicItemData.school_weapon_effects_per_level[schoolOfMagic][powerLevel],
    effectsCount,
    true
  ).map(Utils.parseTemplate);
};

const _tagline = formattedData => {
  const taglineTemplate = Utils.pick(MagicItemData.tagline_templates);
  const generationContent = {};

  if (taglineTemplate.includes("tagline_owned_word")) {
    generationContent.tagline_owned_word = Utils.pick(
      MagicItemData.tagline_owned_words
    );
  }

  if (taglineTemplate.includes("owner_first_name_possessive")) {
    const ownerFirstName = formattedData.owner.split(" ")[0];
    generationContent.owner_first_name_possessive =
      ownerFirstName.substr(-1) === "s"
        ? `${ownerFirstName}'`
        : `${ownerFirstName}'s`;
  }

  return Utils.parseTemplate(taglineTemplate, generationContent);
};

const generate = props => {
  if (props == null) {
    props = {};
  }
  const type = props.type ? props.type : _type();
  const powerLevel = props.powerLevel ? props.powerLevel : _powerLevel();
  const schoolOfMagic = props.schoolOfMagic
    ? props.schoolOfMagic
    : _schoolOfMagic(type);
  const effects = props.effects
    ? props.effects
    : _effects(schoolOfMagic, powerLevel);
  const subtype = Utils.pick(MagicItemData.subtypes[type]);

  let bonus = 0;
  switch (powerLevel) {
    case "minor":
      bonus = 0;
      break;
    case "lesser":
      bonus = 1;
      break;
    case "greater":
      bonus = 2;
      break;
    case "supreme":
      bonus = 3;
      break;
  }

  const formattedData = {
    effects,
    schoolOfMagic: Utils.titleCase(schoolOfMagic),
    type: Utils.titleCase(type),
    subtype: Utils.titleCase(subtype),
    bonus: bonus === 0 ? null : `+${bonus}`
  };

  switch (powerLevel) {
    case "greater":
    case "supreme":
      formattedData.owner = Names.generate();
      formattedData.tagline = _tagline(formattedData);
      break;
  }

  formattedData.title = `${subtype} of ${Utils.titleCase(
    powerLevel
  )} ${Utils.titleCase(schoolOfMagic)}`;

  return {
    type,
    subtype,
    powerLevel,
    schoolOfMagic,
    effects,
    bonus,
    formattedData
  };
};

const functions = {
  generate
};

module.exports = functions;
