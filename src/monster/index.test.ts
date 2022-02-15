import { generate } from "./index";
import * as Utils from "../utils";

describe("monster tests", () => {
  it("does a generate", () => {
    const descriptions = [];
    Utils.forCount(25, () => {
      const output = generate();
      descriptions.push(output.formattedDescription);
    });
    console.log("descriptions", JSON.stringify(descriptions, null, 2));
  });
});
