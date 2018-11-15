const Random = require("random-js")();

/**
 * 
 * @param {any[]} array an array of values to pick from
 */
const pick = array => {
    return array[Random.integer(0, array.length - 1)];
}

/**
 * 
 * @param {string} string 
 */
const parseStringWithPlaceholders = string => {
    const regex = /{(.+?)}/gm;

    const matches = string.match(regex);

    if (matches) {
        matches.forEach(match => {
            let replacement = pick(match.substring(1).substring(0, match.length - 2).split('/'));
            string = string.replace(match, replacement);
        })
    }

    return string;
}

module.exports = {
    pick,
    parseStringWithPlaceholders
}