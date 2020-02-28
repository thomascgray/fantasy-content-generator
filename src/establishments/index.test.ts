import Establishments from "./index";
import * as Utils from "../utils";

describe("Establishments", () => {
  test("generate an establishment", () => {
    Utils.forCount(50, () => {
      const establishment = Establishments.generate();
      expect(typeof establishment).toEqual("object");
      Object.keys(establishment).forEach(key => {
        expect(establishment[key]).not.toEqual("undefined");
      });
    });
  });
});
