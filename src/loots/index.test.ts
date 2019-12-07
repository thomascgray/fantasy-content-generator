import Loots from "./index";
import * as Utils from "../utils";

describe("Loots", () => {
  test("source()", () => {
    Utils.forCount(50, () => {
      const loot = Loots.generate();
      expect(typeof loot).toBe("object");
      Object.keys(loot).forEach(key => {
        expect(loot[key]).not.toEqual("undefined");
      });
    });
  });
});
