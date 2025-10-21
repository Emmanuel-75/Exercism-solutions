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
  return pizzaOrders.reduce((result,order) => 
    result + pizzaPrice(order.pizza,...order.extras)
  ,0)
}
