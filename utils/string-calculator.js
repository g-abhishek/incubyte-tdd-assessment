const add = (numberStr) => {
  if (!numberStr) return 0;

  const delimeters = /[\n,]/;
  const parts = numberStr.split(delimeters);
  const sum = parts.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
};

module.exports = { add };
