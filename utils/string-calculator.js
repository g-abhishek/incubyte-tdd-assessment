const add = (numberStr) => {
  if (!numberStr) return 0;

  let delimeters = /[\n,]/;
  if (numberStr.startsWith("//")) {
    const parts = numberStr.split("\n");
    delimeters = parts[0].substring(2);
    numberStr = parts[1];
  }
  const numbers = numberStr.split(delimeters).map(Number);

  // negative number check
  const negativeNums = numbers.filter((n) => n < 0);
  if (negativeNums.length > 0) {
    throw new Error(`Negative numbers not allowed ${negativeNums.join(",")}`);
  }

  // filter and sum all the numbers
  const sum = numbers
    .filter((num) => num <= 1000)
    .reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
};

module.exports = { add };
