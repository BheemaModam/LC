const deBi = (n, r) => {
  if (n === 0) return r;
  // n%2+result
  r = (n % 2) + r;
  return deBi(n / 2, (r = 0));
};

const example1 = deBi(5);
const example2 = deBi(10);

console.log("Example1", example1);
console.log("Example2", example2);
