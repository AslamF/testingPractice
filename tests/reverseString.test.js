const reverseString = require("../functions/reverseString");

test("check to see if string is reversed", () => {
  expect(reverseString("fraz")).toMatch("zarf");
});
