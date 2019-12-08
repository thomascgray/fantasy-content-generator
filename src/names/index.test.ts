import * as Utils from "../utils";
import Names from "./index";

describe("Names", () => {
  describe("generating without seed", () => {
    it("generate a name", () => {
      const nameObject = Names.generate();

      expect(nameObject.race).not.toBeUndefined();
      expect(nameObject.gender).not.toBeUndefined();
      expect(nameObject.name).not.toBeUndefined();
      expect(nameObject.seed).not.toBeUndefined();
    });

    it("generate 2 names with different seeds should be different name, race and gender", () => {
      const nameObject1 = Names.generate({ seed: "123" });
      const nameObject2 = Names.generate({ seed: "456" });

      expect(nameObject1).not.toMatchObject(nameObject2);
    });

    it("generating with same race and gender should give a different seed each time", () => {
      const nameObject1 = Names.generate({ race: "tiefling", gender: "male" });
      const nameObject2 = Names.generate({ race: "tiefling", gender: "male" });
      const nameObject3 = Names.generate({ race: "tiefling", gender: "male" });

      expect([nameObject1.seed]).not.toContain(nameObject2.seed);
      expect([nameObject1.seed, nameObject2.seed]).not.toContain(
        nameObject3.seed
      );
    });
  });

  describe("generating with a seed", () => {
    describe("generating with seed via props", () => {
      it("generating via name generate with a seed in the props should give the exact same match", () => {
        const nameObject = Names.generate({ seed: "123" });

        expect(nameObject).toMatchObject(Names.generate({ seed: "123" }));
        expect(nameObject).toMatchObject(Names.generate({ seed: "123" }));
        expect(nameObject).toMatchObject(Names.generate({ seed: "123" }));
        expect(nameObject).toMatchObject(Names.generate({ seed: "123" }));
        expect(nameObject).toMatchObject(Names.generate({ seed: "123" }));
      });
    });

    describe("generating with seed via withSeed", () => {
      it("generating via withSeed should give the exact same match", () => {
        let nameObject;

        Utils.withSeed("aaa", () => {
          nameObject = Names.generate();
        });

        Utils.withSeed("aaa", () => {
          expect(nameObject).toMatchObject(Names.generate());
        });
        Utils.withSeed("aaa", () => {
          expect(nameObject).toMatchObject(Names.generate());
        });
        Utils.withSeed("aaa", () => {
          expect(nameObject).toMatchObject(Names.generate());
        });
        Utils.withSeed("aaa", () => {
          expect(nameObject).toMatchObject(Names.generate());
        });
      });
    });
  });
});
