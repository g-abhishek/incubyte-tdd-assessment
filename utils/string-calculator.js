const add = (numberStr) => {
  if (!numberStr) return 0;

  let delimeters = /[\n,]/;
  if (numberStr.startsWith("//")) {
    const parts = numberStr.split("\n");
    delimeters = parts[0].substring(2);
    numberStr = parts[1];
  }
  const parts = numberStr.split(delimeters);
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
};

module.exports = { add };
