const { add } = require("../utils/string-calculator");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number when only single number passed", () => {
  expect(add("1")).toBe(1);
});

test("should return sum of two comma seperated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("should return sum of multiple numbers seperated by comma", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});
