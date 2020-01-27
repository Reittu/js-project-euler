// Euler 12
// What is the value of the first triangle number to have over n divisors?
// Triangle numbers: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

function divisibleTriangleNumber(n) {
  // Add current index to previous value to get next triangle number
  let currentTriangle = 0;
  for(let i = 1 ;; i++) {
    currentTriangle += i;
    if(numOfFactors(currentTriangle) > n)
      return currentTriangle;   
  }
}

function numOfFactors(number) {
  let divisors = 0;
  // Find the factors in pairs to get O(sqrt(n)) time complexity
  for(let i = 1; i <= number ** 0.5; i++) {
    if(number % i === 0) {
      if(number / i === i) divisors++;	// e.g. 100 / 10 -> factors.push(i)
      else divisors += 2; // e.g. 100 / 2 -> factors.push(number/i) and factors.push(i)
    }
  }
  return divisors;
}

divisibleTriangleNumber(500); // expected result 76576500
