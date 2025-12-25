// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let appearances = 0;
  stack.forEach(value=>{
    if (value == card){
      appearances += 1
    }
  });
  return appearances;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  const rest = type ? 0 : 1;
  let count = 0;
  for (let card of stack){
    if (count % 2 == 1){
      count += 1;
    }
  }
  return count;
}
