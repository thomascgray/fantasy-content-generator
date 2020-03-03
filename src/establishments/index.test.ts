import Establishments from "./index";
import * as Utils from "../utils";

describe("Establishments", () => {
  test("generate an establishment", () => {
    Utils.forCount(1, () => {
      const establishment = Establishments.generate({ type: "inn" });

      console.log("establishment", JSON.stringify(establishment, null, 2));
      expect(typeof establishment).toEqual("object");
      expect(JSON.stringify(establishment)).not.toBe(
        expect.stringContaining("undefined")
      );
    });
  });
});
