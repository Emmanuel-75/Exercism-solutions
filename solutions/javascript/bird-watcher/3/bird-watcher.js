// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let Total = 0;
  for (let num = 0; num < birdsPerDay.length; num++){
    Total += birdsPerDay[num]
  };
  return Total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weekCount = 0;
  for (let num = 7*(week-1);num < 7 * week; num++){
    weekCount += birdsPerDay[num]
  }
  return weekCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let num = 0; num < birdsPerDay.length; num++){
    if (num % 2 == 0){
        birdsPerDay[num] += 1
    }
  }
}
