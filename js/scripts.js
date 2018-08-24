function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
    this.description = "";
}

function Order (items, prices) {
 this.items = items;
 this.prices = prices;
 this.totalPrice = 0;
}

var sizePricing = { "small": 5, "medium": 7, "large": 9 }
var toppingPricing = {
    "pepperoni": 0.99,
    "ham": 0.99,
    "italian sausage": 0.99,
    "mushrooms": 0.49,
    "pineapple": 0.59,
    "spinach": 0.49,
}

Pizza.prototype.getPrice = function () {
    var totalToppingPricing = 0;
    for (var i = 0; i < this.toppings.length; i++) {
        totalToppingPricing += toppingPricing[this.toppings[i]];
    }
    this.price = (sizePricing[this.size] + totalToppingPricing);
}

Pizza.prototype.getDescription = function () {
    this.description = this.size + " pizza with " + this.toppings.join(", ");
}

// Order.prototype.getTotalPrice = function() {
//     this.totalPrice += 
// }

$(document).ready(function () {
    $("#orderInput").submit(function (event) {
        event.preventDefault();
        var toppings = [];
        $("input:checkbox:checked").each(function () {
            toppings.push($(this).val());
        })
        var size = $("input:radio:checked").val();
        var newPizza = new Pizza(size, toppings);
        
        newPizza.getPrice();
        newPizza.getDescription();
        var items = [];
        items.push(newPizza.description);
        var prices = 0;
        prices += (newPizza.price);
        var newOrder = new Order(items, prices);
        console.log(newOrder);
        $("#cartContent").append("<li>" + newPizza.description + "</li>");
        $("#total").text("$"+newPizza.price);
        $("input").prop('checked', false);
    })
})