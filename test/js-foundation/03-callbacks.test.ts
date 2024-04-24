import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("Test in 03-callbacks.ts", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done(); //lo llamamos para que jest espere a que se ejecute el callback
    });
  });

  test("getUserById should return John Doe", (done) => {
    const id = 1;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: "John Doe" });

      done(); //lo llamamos para que jest espere a que se ejecute el callback
    });
  });
});
