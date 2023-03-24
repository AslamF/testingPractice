const capitalize = require("../functions/capitalize");

test("capitalizes first letter of string", () => {
  expect(capitalize("fraz")).toMatch("Fraz");
});
