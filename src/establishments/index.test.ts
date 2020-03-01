import Establishments from "./index";
import * as Utils from "../utils";

describe("Establishments", () => {
  test("generate an establishment", () => {
    Utils.forCount(50, () => {
      const establishment = Establishments.generate();
      expect(typeof establishment).toEqual("object");
      expect(JSON.stringify(establishment)).not.toBe(
        expect.stringContaining("undefined")
      );
    });
  });
});
