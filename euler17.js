/*
Euler 17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const words = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "onehundred",
  200: "twohundred",
  300: "threehundred",
  400: "fourhundred",
  500: "fivehundred",
  600: "sixhundred",
  700: "sevenhundred",
  800: "eighthundred",
  900: "ninehundred",
  1000: "onethousand",
}

function numberLetterCounts(limit) {
  let total = 0;
  for (let i = 1; i <= limit; i++)
    total += numberLetterCount(i);
  return total;
}

function numberLetterCount(number) {
  if (words[number]) return words[number].length;
  let count = 0;
  const precision = number > 100 ? 100 : 10; // Sufficient since max number is 1000
  const firstPart = Math.floor(number / precision) * precision;
  const secondPart = number - firstPart;
  count += words[firstPart].length;
  if (words[secondPart]) count += words[secondPart].length
  else { // split the second part into two parts
    count += words[Math.floor(secondPart / 10) * 10].length;
    count += words[secondPart % 10].length;
  }
  if (number > 100 && number % 100 !== 0) count += 3; // checks for "and"
  return count;
}

console.log(numberLetterCounts(1000)) // expected 21124
