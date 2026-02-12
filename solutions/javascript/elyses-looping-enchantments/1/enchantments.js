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
  var oddNums = 0;
  var evenNums = 0;
  if (type === true){
    for (let evenNum of stack){
      if (evenNum % 2 == 0){
          evenNums += 1
      }
    }
    return evenNums;
  }else if (type === false){
    for(let oddNum of stack){
      if (oddNum % 2 == 1){
        oddNums += 1
      }
    }
    return oddNums;
  }

}
