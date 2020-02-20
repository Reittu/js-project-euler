/*
Euler 19:

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
1 Jan 1900 was a Monday.
*/

const days = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

function countingSundays(firstYear, lastYear) {
  let sundays = 0;
  // Weekdays are 0 to 6 (monday to sunday)
  let currentWeekday = getFirstWeekday(firstYear);
  for (let currentYear = firstYear; currentYear <= lastYear; currentYear++) {
    for (let currentMonth = 1; currentMonth <= 12; currentMonth++) {
      if (currentWeekday === 6) sundays++;
      const daysAhead = getMonthDays(currentYear, currentMonth);
      currentWeekday = (currentWeekday + daysAhead) % 7;
    }
  }
  return sundays;
}

function getMonthDays(year, month) {
  let result = days[month];
  return month === 2 && isLeapYear(year) ? result + 1 : result;
}

function getFirstWeekday(year) {
  if (year < 1900) return 0; // Not needed for this problem.
  let daysPassedSince = 0;
  for (let i = 1900; i < year; i++) {
    daysPassedSince += 365;
    if (isLeapYear(i)) daysPassedSince += 1;
  }
  return daysPassedSince % 7;
}

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log(countingSundays(1901, 2000)); // expected 171
