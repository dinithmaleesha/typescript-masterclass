"use strict";
// classes 101
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
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
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizzaOne);
function addMushroomtsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
// addMushroomtsToPizzas([pizzaOne, pizzaTwo])
