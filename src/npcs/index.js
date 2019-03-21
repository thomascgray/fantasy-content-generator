const Names = require('../names');
const Utils = require('../utils');
let NameData = require('../data/names.json')
let NPCData = require('../data/npcs.json')

if (process.env.ENVIRONMENT === 'test') {
    NameData = require('../../stubData/names.json')
    NPCData = require('../../stubData/npcs.json')
}

const RelationshipKeyWords = [
    'mother',
    'father',
    'son',
    'daughter',
    'brother',
    'sister'
]

/**
 * 
 * @param {object} props 
 * @param {string} props.seed
 * @param {string} props.race
 * @param {string} props.gender
 * @param {string} props.name
 * @param {bool} props.shouldGenerateRelations
 */
const generate = (props = {}) => {
    Utils.resetSeed();

    const seed = props.seed ? props.seed : Utils.generateUUID();
    const traits = Utils.pick(NPCData.traits, 2, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const desires = Utils.pick(NPCData.desires, 1, true, seed).map(val => Utils.parseTemplate(val, null, seed));
    const race = props.race ? props.race : Utils.pick(Object.keys(NameData), 1, false, seed)
    const gender = props.gender ? props.gender : Utils.pick(['male', 'female'], 1, false, seed)
    const name = Names.generate({ race, gender, seed, shouldResetSeed: false });

    let relations = []

    if (props.shouldGenerateRelations) {
        relations = generateRelationships({ name, race, gender, desires })
    }

    const formattedData = {
        name,
        gender: Utils.titleCase(gender),
        race: Utils.formatRace(race),
        traits,
        desires,
    }

    if (props.shouldGenerateRelations) {
        formattedData.relations = relations;
    }

    const npc = {
        name,
        gender,
        race,
        traits,
        desires,
        seed,
        formattedData
    }

    if (props.shouldGenerateRelations) {
        npc.relations = relations;
    }

    return npc
}

const getRelationTitlesFromDesires = desires => {
    const concatonatedDesires = desires.join(':');

    return RelationshipKeyWords
        .filter(relationKeyword => concatonatedDesires.includes(relationKeyword))
}

const generateRelationships = ({ name, race, gender, desires }) => {
    const relationTitles = getRelationTitlesFromDesires(desires);
    return relationTitles.map(relationTitle => {
        switch (relationTitle) {
            case 'father':
            case 'mother':
            case 'brother':
            case 'sister':
            case 'son':
            case 'daughter':
            return {
                relationTitle,
                npc: generateFamilyMember({ name, race, relationTitle })
            }
        }
    })
}

const getSurname = name => {
    if (name == null) {
        return null;
    }
    const names = name.trim().split(' ');
    if (names.length <= 1) {
        return null;
    }
    return names[names.length - 1].trim();
}

const generateFamilyMember = ({ name, race, relationTitle }) => {
    let gender = null;
    switch (relationTitle) {
        case 'father':
        case 'brother':
        case 'son':
            gender = 'male';
            break;
        case 'mother':
        case 'sister':
        case 'daughter':
            gender = 'female';
            break;
    }
    const npc = generate({ race, gender })
    const passedSurname = getSurname(name);
    const npcSurname = getSurname(npc.formattedData.name);
    
    if (passedSurname != null && npcSurname != null) { // both have a surname - normalize it
        npc.name = npc.name.replace(npcSurname, passedSurname);
        npc.formattedData.name = npc.formattedData.name.replace(npcSurname, passedSurname);
    }

    return npc;
}

const functions = {
    generate,
    trait: () => Utils.parseTemplate(Utils.pick(NPCData.traits)),
    desire: () => Utils.parseTemplate(Utils.pick(NPCData.desires))
}

if (process.env.ENVIRONMENT === 'test') {
    functions.getRelationTitlesFromDesires = getRelationTitlesFromDesires
    functions.generateRelationships = generateRelationships;
    functions.getSurname = getSurname;
    functions.generateFamilyMember = generateFamilyMember;
}

module.exports = functions