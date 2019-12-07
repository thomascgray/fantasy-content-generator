import Settlements from "./index";
import * as Utils from "../utils";

describe("Settlements", () => {
  test("generate()", () => {
    Utils.forCount(50, () => {
      const settlement = Settlements.generate();
      expect(typeof settlement).toEqual("object");
      Object.keys(settlement).forEach(key => {
        expect(settlement[key]).not.toEqual("undefined");
      });
    });
  });
});
