"use strict";
// classes 101
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza('Mario Special', 15);
const pizzaTwo = new Pizza('Dinith Special', 10);
function addMushroomtsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
addMushroomtsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
