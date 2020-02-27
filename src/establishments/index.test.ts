import Establishments from "./index";
import * as Utils from "../utils";

describe("Establishments", () => {
  test("generate()", () => {
    Utils.forCount(50, () => {
      const settlement = Establishments.generate();
      expect(typeof settlement).toEqual("object");
      Object.keys(settlement).forEach(key => {
        expect(settlement[key]).not.toEqual("undefined");
      });
    });
  });
});
