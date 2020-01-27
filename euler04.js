// Euler 4
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct(n) {
	// n digits (e.g. 999 to 99)
	const start = (10 ** n) - 1;
	const end = 10 ** (n - 1) - 1;
	for (let i = start - 2; i > end; i--) {
		// Create a palindrome from current n-digit number (descending)
		const palindrome = Number(String(i) + String(i).split('').reverse().join(''));
		const squareRoot = Number.parseInt(palindrome ** 0.5);
		// First palindrome divisible by a n-digit number greater than its square root is the result. 
		for (let j = start; j > squareRoot; j--)
			if (palindrome % j === 0) return [palindrome, j, palindrome / j];
	}
}

// For big numbers, need to implement BigInt ( > 2^53 - 1)
// For that, you would need to use https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root
// Otherwise the result will be wrong. You can try for example Number("9999000000009999") in console.

