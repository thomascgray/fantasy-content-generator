import { IGender } from "../interfaces";

import SeedRandom from "seedrandom";

/**
 * pick 1 or more unique values from an array, and return a new array of those picked values
 *
 * @param {any[]} array an array of values to pick from
 * @param {number} count how many unique array values to pick out
 */
export const pick = array => {
  return pickMany(array, 1)[0];
};

export const randomRace = () => {};

export const randomGender = (): IGender => {
  return pick(["male", "female"]);
};

export const pickMany = (array, count = 1) => {
  const arrayCopy = Array.from(array);
  const pickedValues = [];

  for (let i = 0; i < count; i++) {
    let pickedIndex = rand(0, arrayCopy.length - 1);
    pickedValues.push(arrayCopy[pickedIndex]);
    arrayCopy.splice(pickedIndex, 1);
  }

  return pickedValues;
};

/**
 * parse our special template syntax
 *
 * handles multiple "kinds" of template syntax
 *
 * a string container '{alpha/beta}' will choose one at random
 *
 * a string starting with a $ symbol is a reference for any passed content
 *   so '{$colour}' becomes 'blue' if `content` was passed as { colour: 'blue' }
 *
 * a string container using the linked format (symbol, double colon) e.g {X::aplha/beta}
 *   will ensure that any other placeholder in the string that uses the same linked symbol
 *   returns the same index of random that the first placeholder with that symbol did
 *
 * @param {string} string
 */
export const parseTemplate = (string, content = {}, seed = null) => {
  const regex = /{(.+?)}/gm;

  const matches = string.match(regex);

  const linkedPlaceholderIndexes = {};

  if (matches) {
    // is our match a placeholder setup
    matches.forEach(match => {
      const linkedPlaceholderMatches = /{(.+?)::(.+?)}/gm.exec(match);
      if (linkedPlaceholderMatches) {
        const rawLinkToken = linkedPlaceholderMatches[1];
        if (linkedPlaceholderIndexes[rawLinkToken] != null) {
          // if we're already setup
          let replacement = linkedPlaceholderMatches[2].split("/")[
            linkedPlaceholderIndexes[rawLinkToken]
          ];
          string = string.replace(match, replacement);
        } else {
          // if not, we need to do the first one and add the index into the linkedPlaceholderIndexes
          const allPlaceholderChunks = linkedPlaceholderMatches[2].split("/");
          const newIndex = rand(0, allPlaceholderChunks.length - 1);
          let replacement = allPlaceholderChunks[newIndex];
          linkedPlaceholderIndexes[rawLinkToken] = newIndex; // set it up for further matches
          string = string.replace(match, replacement);
        }
      }
    });

    matches.forEach(match => {
      if (match.charAt(1) === "$") {
        const replacementVarName = match.substring(2, match.length - 1);
        string = string.replace(match, content[replacementVarName]);
      } else {
        let replacement = pick(
          match
            .substring(1)
            .substring(0, match.length - 2)
            .split("/")
        );
        string = string.replace(match, replacement);
      }
    });
  }

  return string;
};

/**
 * generate a random number between 2 inclusive values
 *
 * @param {number} min minimum number to return (inclusive)
 * @param {number} max maximum number to return (inclusive)
 * @param {any} seed
 */
export const rand = (min, max) => {
  let randomFunc;

  if (globalThis.FantasyContentGeneratorSeed) {
    randomFunc = SeedRandom(globalThis.FantasyContentGeneratorSeed);
  } else {
    randomFunc = Math.random;
  }
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(randomFunc() * (max - min + 1)) + min;
};

/**
 *
 * @param {number} number
 * @param {function} func
 */
export const forCount = (number, func) => {
  for (let i = 0; i < number; i++) {
    func();
  }
};

export const titleCase = string =>
  string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const formatRace = race => {
  switch (race) {
    case "halfOrc":
      return "Half-Orc";
    case "halfElf":
      return "Half-Elf";
    default:
      return titleCase(race);
  }
};

export const generateUUID = () => {
  // Public Domain/MIT
  var d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const withSeed = (seed, callback) => {
  const isNotFirstPass = seed === globalThis.FantasyContentGeneratorSeed;

  globalThis.FantasyContentGeneratorSeed = seed; //eslint-disable-line

  const returnValue = callback();

  if (!isNotFirstPass) {
    globalThis.FantasyContentGeneratorSeed = null; //eslint-disable-line
  }

  return returnValue;
};
