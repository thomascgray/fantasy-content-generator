import Storyhooks from "./index";
import * as Utils from "../utils";

describe("Storyhooks", () => {
  test("npcActs()", () => {
    Utils.forCount(50, () => {
      const storyhook = Storyhooks.npcActs();
      expect(storyhook).not.toEqual("undefined");
    });
  });
});
