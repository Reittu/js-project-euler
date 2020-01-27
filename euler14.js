// Euler 14
// Which starting number, under one million, produces the longest chain?

function longestCollatzSequence(n = 1000000) {
	let chainLengths = new Array(n).fill(0);
	let currentVal;
	// Calculate chain length of each value from 2 to n.
	for (let value = 2; value < n; value++) {
		currentVal = value;
		while (currentVal > 1) {
			chainLengths[value] += 1;
			currentVal = currentVal % 2 === 0 ? processEven(currentVal) : processOdd(currentVal);
		}
	}
	// Note that chainLengths[value] = chainLength, so we need the index
	// pointing to longest chain.
	return chainLengths.reduce((acc, current, index) => current > chainLengths[acc] ? index : acc, 0);

}

function processEven(val) {
	return val / 2;
}

function processOdd(val) {
	return 3 * val + 1;
}

longestCollatzSequence(1000000); // expected 77031
