import Storyhooks from "./index";
import * as Utils from "../utils";

describe("Storyhooks", () => {
  test("generate()", () => {
    Utils.forCount(50, () => {
      const storyhook = Storyhooks.generate();
      expect(storyhook).not.toEqual("undefined");
    });
  });
  test("npcActs()", () => {
    Utils.forCount(50, () => {
      const storyhook = Storyhooks.npcActs();
      expect(storyhook).not.toEqual("undefined");
    });
  });
});
