const randomString = require("../index");

describe("Probar funcionalidades", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });

  test("Comprobar que no exista una ciudad", () => {
    expect(randomString()).not.toMatch(/Gordoba/);
  });
});
