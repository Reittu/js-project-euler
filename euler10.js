// Euler 10
// Find the sum of all the primes below two million.

function primeSummation(n) {
  let currentSum = 0;
  for(let i = 2; i < n; i++) {
    if(isPrime(i))
      currentSum += i;
  }
  return currentSum;
}

function isPrime(n) {
  for(let i = 2; i <= n ** 0.5; i++)
    if(n % i === 0)
      return false;
  return true;
}

primeSummation(2000000); // expected result: 142913828922
