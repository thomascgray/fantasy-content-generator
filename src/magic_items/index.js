const MagicItemData = require('./magic_items.json')
const Utils = require('../utils')
const Names = require('../names');

const _type = () => Utils.pick(MagicItemData.types);
const _powerLevel = () => Utils.pick(MagicItemData.power_levels);
const _schoolOfMagic = type => {
    if (type === 'weapon') {
        return Utils.pick(Object.keys(MagicItemData.school_weapon_effects_per_level));
    }
    return Utils.pick(MagicItemData.schools_of_magic);
}

const _effects = (schoolOfMagic, powerLevel) => {
    const effectsCount = Utils.parseTemplate(MagicItemData.item_effects_per_level[powerLevel])
    return Utils.pick(MagicItemData.school_weapon_effects_per_level[schoolOfMagic][powerLevel], effectsCount, true)
        .map(Utils.parseTemplate)
}

const generate = props => {
    if (props == null) {
        props = {};
    }
    const type = (props.type) ? props.type : _type();
    const powerLevel = (props.powerLevel) ? props.powerLevel : _powerLevel();
    const schoolOfMagic = (props.schoolOfMagic) ? props.schoolOfMagic : _schoolOfMagic(type);
    const effects = (props.effects) ? props.effects : _effects(schoolOfMagic, powerLevel);
    const subtype = Utils.pick(MagicItemData.subtypes[type]);

    const formattedData = {}

    if (powerLevel === 'supreme') {
        formattedData.owner = Names.generate();
    }

    formattedData.title = `${subtype} of ${Utils.titleCase(powerLevel)} ${Utils.titleCase(schoolOfMagic)}`

    return {
        type,
        subtype,
        powerLevel,
        schoolOfMagic,
        effects,
        formattedData
    }
}

const functions = {
    generate
}

module.exports = functions