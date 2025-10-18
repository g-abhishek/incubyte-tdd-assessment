const add = (numberStr) => {
  if (!numberStr) return 0;

  const parts = numberStr.split(",");
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
};

module.exports = { add };
