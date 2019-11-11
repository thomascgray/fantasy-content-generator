const NPCs = require("./index");
const Utils = require("../utils");

describe("Settlements", () => {
  test("generate()", () => {
    Utils.forCount(50, () => {
      const npc = NPCs.generate();
      expect(typeof npc).toEqual("object");
      Object.keys(npc).forEach(key => {
        expect(npc[key]).not.toEqual("undefined");
      });
    });
  });
});
