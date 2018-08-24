function Pizza(size, toppings) {
    this.size = size;
    this.toppings = [];
    this.price = 0;
}

var sizePricing = { "small": 5, "medium": 7, "large": 9 }
var toppingPricing = {
    "pepperoni": 0.89,
    "ham": 0.99,
    "italian sauage": 0.99,
    "mushroom": 0.49,
    "pineapple": 0.59,
    "spinach": 0.49,
}

Pizza.prototype.getPrice = function() {
    this.price = sizePricing[this.size] + toppingPricing[this.toppings[0]];
}

