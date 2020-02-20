// Euler 16: 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

function powerDigitSum(exponent) {
  return String(BigInt(2 ** exponent)).split('').reduce((acc, val) => acc + Number(val), 0);
}

console.log(powerDigitSum(1000)); // expected 1366
