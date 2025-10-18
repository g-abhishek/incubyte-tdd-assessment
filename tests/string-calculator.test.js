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

test("should handle new lines as delimeters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support custom delimeters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw error if negative number found", () => {
  try {
    add("1,-2,3,-4");
  } catch (error) {
    expect(error.message).toBe("Negative numbers not allowed -2,-4");
  }
});
