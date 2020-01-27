// Euler 9
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
    let c = 0;
    // a < b < c
    for (let a = 1; a < (n / 3); a++) {
        for (let b = a + 1; b < (2 / 3 * n); b++) {
            c = (a ** 2 + b ** 2) ** 0.5;
            if (a + b + c === n)
                return a * b * c;
        }
    }
}

specialPythagoreanTriplet(1000); // expected result: 31875000