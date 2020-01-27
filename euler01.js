// Euler 1
// Find the sum of all the multiples of 3 or 5 below 1000

function multiplesOf3and5(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      result += i;
  }
  return result;
}

multiplesOf3and5(1000);
