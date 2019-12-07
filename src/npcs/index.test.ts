import NPCs from "./index";
import * as Utils from "../utils";

describe("NPCs", () => {
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
