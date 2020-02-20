// Euler 15: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
// there are exactly 6 routes to the bottom right corner. How many such routes are there through a 20×20 grid?

// Combinations of gridWidth * right movements and gridHeight * down movements within gridWidth + gridHeight steps.
// n! / (k! * (n - k)!)
// Where n is total steps, k is width and (n-k) is height.
// Since desired grid is a square, n = 2k => n - k = k

function latticePaths(gridSize) {
  const nFact = factorial(2 * gridSize);
  const kFact = factorial(gridSize);
  return Math.round(nFact / kFact**2);
}

function factorial(n) {
  let result = n;
  for(let i = n - 1; i > 0; i--)
    result *= i;
  return result;
}

console.log(latticePaths(20)); // expected 137846528820

// Easiest way to imagine the problem is through binaries: right movements are 1s and down movements are 0s.
// How many ways can the non-unique ones be arranged in 1100? 4! / (2! * (4-2)!) = 24 / 4 = 6
// If the grid wasn't a square, e.g. 5x3, the example would be 1111 1000 => 8! / (5! * (8-5)!) = 56
