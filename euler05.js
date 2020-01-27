// Euler 5
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  let current = 1;
  while (true) {
    if (checkDivision(current, n))
      return current;
    current++;
  }
}

function checkDivision(number, n) {
  for (let i = 2; i <= n; i++) {
    if (number % i != 0) return false;
  }
  return true;
}

smallestMult(20); // expected 232792560
