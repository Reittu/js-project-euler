// Euler 6
// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

function sumOfSquares(n) {
  let result = 0;
  for(let i = 1; i <= n; i++) {
    result += i**2;
  }
  return result;
}

function squareOfSum(n) {
  let result = 0;
  for(let i = 1; i <= n; i++) {
    result += i;
  }
  return result ** 2;
}

sumSquareDifference(100); // expected 25164150
