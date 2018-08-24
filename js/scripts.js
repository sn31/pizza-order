function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

var sizePricing = { "Small": 5, "Medium": 7, "Large": 9 }
var toppingPricing = {
    "Pepperoni": 0.99,
    "Ham": 0.99,
    "Italian Sausage": 0.99,
    "Mushrooms": 0.49,
    "Pineapple": 0.59,
    "Spinach": 0.49,
}

Pizza.prototype.getPrice = function () {
    var totalToppingPricing = 0;
    for (var i =0; i< this.toppings.length;i++) {
        totalToppingPricing += toppingPricing[this.toppings[i]];
    }
    this.price = (sizePricing[this.size] + totalToppingPricing);
}

$(document).ready(function () {
    $("#orderInput").submit(function (event) {
        event.preventDefault();
        var toppings = [];
        $("input:checkbox:checked").each(function () {
            toppings.push($(this).val());
        })
        var size = $("input:radio:checked").val();
        var newPizza = new Pizza(size, toppings)
        newPizza.getPrice();
        console.log(newPizza.price)
        
    })
})