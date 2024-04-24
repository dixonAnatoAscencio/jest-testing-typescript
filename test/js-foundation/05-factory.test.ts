import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory", () => {
  const getUUID = () => "1234";
  const getAge = () => 22;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person object", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "2001-05-29" });
    console.log(johnDoe); //si no sabemos que retorna
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "2001-05-29",
      age: 22,
    });
  });
});
