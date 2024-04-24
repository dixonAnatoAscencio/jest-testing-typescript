import { getAge } from "../../src/plugins";

describe("plugins/get-age.plugins.ts", () => {
  test("getAge should return the age of the user", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge Should return current age", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995); // Mocking Date.prototype.getFullYear

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);

    expect(age).toBe(0);
    console.log(spy);
  });
});
