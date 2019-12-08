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

  it.only("test with seed", () => {
    const baseNpc = NPCs.generate({ seed: "123" });

    Utils.forCount(50, () => {
      const npc = NPCs.generate({ seed: "123" });

      expect(baseNpc.formattedData.name).toEqual(npc.formattedData.name);
      expect(baseNpc.formattedData.traits[0]).toEqual(
        npc.formattedData.traits[0]
      );
    });
  });
});
