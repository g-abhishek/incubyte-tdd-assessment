const { add } = require("../utils/string-calculator");

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number when only single number passed", () => {
    expect(add("1")).toBe(1)
})
