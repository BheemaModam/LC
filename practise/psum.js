// SUM OFN NATURAL NUMBERS
// RECURSIVE PROGRAMM

const sumN = (n) => {
  if (n <= 1) {
    return n;
  }

  return n + sumN(n - 1);
};

// const sumN = (n) => {
//   return (n * (n + 1)) / 2;
// };

const example1 = sumN(5);
// const example2 = sumN(10);

console.log("Example1", example1);
// console.log("Example2", example2);
