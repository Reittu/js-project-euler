// Euler 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  let result = 0;
  let a = 0, b = 1, c = 1;
  for (let i = 1; i <= n; i++) {
    // c is the last calculated (i:th term) fibonacci number
    c = a + b;
    a = b;
    b = c;
    if (c % 2 === 0)
      result += b;
  }
  return result;
}

fiboEvenSum(10);
