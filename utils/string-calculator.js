const add = (numberStr) => {
  if (!numberStr) return 0;

  let delimeters = /[\n,]/;
  if (numberStr.startsWith("//")) {
    // create regex to split the numberStr
    const separators = [...numberStr.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
    const escaped = separators.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const parts = numberStr.split("\n");

    delimeters = new RegExp(escaped.join("|"));
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
