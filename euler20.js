// Euler 20
// Find the sum of the digits n!

function sumFactorialDigits(n) {
  let str = String(factorial(n));
  // Split the string into char array and sum them
  return str.split('').reduce( (acc,val) => acc+Number(val), 0 );
}

// BigInt is necessary for values above 2^53 - 1; otherwise there will be rounding errors.
// If performance is vital, consider https://github.com/MikeMcl/big.js/ instead of BigInt.
function factorial(n) {
  let acc = BigInt(n);
  while (n > BigInt(1))
    acc *= BigInt(--n);
  return acc;
}

sumFactorialDigits(100); // expected 648
