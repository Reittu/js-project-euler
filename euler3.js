// Euler 3
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  let factors = [];
  let currentDivider = 2;
  while (number > 1) {
    if (isPrime(currentDivider))
      if (number % currentDivider === 0) {
        number /= currentDivider;
        factors.push(currentDivider);
      }
    currentDivider++;
  }

  function isPrime(number) {
    // We can stop checking at square root of number
    // since it's impossible for the remaining second factor
    // to be less than the first one.
    for (let i = 2; i <= number ** 0.5; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  return factors.length > 0 ? factors[factors.length - 1] : 1;
}

largestPrimeFactor(600851475143);
