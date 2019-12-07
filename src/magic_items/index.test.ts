import MagicItems from "./index";
import * as Utils from "../utils";

describe("Magic Items", () => {
  test("generate()", () => {
    Utils.forCount(50, () => {
      const item = MagicItems.generate();
      expect(typeof item).toBe("object");
      Object.keys(item).forEach(key => {
        expect(item[key]).not.toEqual("undefined");
      });
    });
  });
});
