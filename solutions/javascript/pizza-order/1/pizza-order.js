/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    if (pizza === 'Margherita') return 7;
    if (pizza === 'Caprese') return 9;
    if (pizza === 'Formaggio') return 10;
  }

  // Process the first extra, then recursively handle the rest
  const [first, ...rest] = extras;
  let extraCost = 0;

  if (first === 'ExtraSauce') extraCost = 1;
  else if (first === 'ExtraToppings') extraCost = 2;

  return pizzaPrice(pizza, ...rest) + extraCost;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 *
class PizzaOrder {
  constructor(pizza, ...extras) {
    this.pizza = pizza;
    this.extras = extras;
  }
}

 * 
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const orderMenu = {'Margherita': 7, 'Caprese': 9, 'Formaggio': 10, 'ExtraSauce': 1, 'ExtraToppings': 2}
  let totalBill = 0;
  for (let order of pizzaOrders){
    totalBill += orderMenu[order]
  }
  return totalBill;
}
