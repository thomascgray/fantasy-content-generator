import Loots from "./index";
import * as Utils from "../utils";

describe("Loots", () => {
  test("generate loot", () => {
    Utils.forCount(50, () => {
      const loot = Loots.generate();
      expect(typeof loot).toBe("object");
      Object.keys(loot).forEach(key => {
        expect(loot[key]).not.toEqual("undefined");
      });
    });
  });

  test("generate multiple loots", () => {
    Utils.forCount(50, () => {
      const loot = Loots.generate({ quantity: 3 });
      expect(typeof loot).toBe("object");
      expect(loot.formattedData.lootItems.length).toEqual(3);
      Object.keys(loot).forEach(key => {
        expect(loot[key]).not.toEqual("undefined");
      });
    });
  });
});
