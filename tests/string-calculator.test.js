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

test("should ignore number greater thane 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1,1000")).toBe(1001);
});

it('supports single custom delimiter of any length', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

it('supports multiple custom delimiters using //[d1][d2]\\n', () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

it('supports multiple custom delimiters longer than one char', () => {
  expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});
