// Euler 7
// What is the 10 001st prime number?

function nthPrime(n) {
  let primesEncountered = 0;
  let currentNum = 2;
  while(primesEncountered < n) {
    if(isPrime(currentNum))
       primesEncountered++; 
    currentNum++;
  }
  return currentNum - 1;
}

function isPrime(n) {
  for(let i = 2; i <= n**0.5; i++ ) {
    if(n % i === 0) return false;
  }
  return true;
}

nthPrime(10001); // expected 104743
