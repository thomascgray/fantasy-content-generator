import Establishments from "./index";
import * as Utils from "../utils";

describe("Establishments", () => {
  test("generate an establishment", () => {
    Utils.forCount(50, () => {
      const establishment = Establishments.generate({ type: "tavern" });
      expect(typeof establishment).toEqual("object");

      console.log("*****");
      console.log("establishment - name:", establishment.formattedData.name);
      establishment.npcs.map((npc) =>
        console.log(`${npc.formattedData.name}: ${npc.formattedData.vocation}`)
      );
      console.log("*****");

      expect(JSON.stringify(establishment)).not.toBe(
        expect.stringContaining("undefined")
      );
    });
  });
});
