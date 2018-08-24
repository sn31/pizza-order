function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
    this.description = "";
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
    for (var i =0; i< this.toppings.length;i++) {
        totalToppingPricing += toppingPricing[this.toppings[i]];
    }
    this.price = (sizePricing[this.size] + totalToppingPricing);
}

Pizza.prototype.getDescription = function () {
    this.description = this.size + " pizza with " + this.toppings.join(", ") ;
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
        newPizza.getDescription();
        $("#orderReceipt").append(newPizza.getDescription());
        console.log(newPizza.price);
        console.log(newPizza.description);
        
    })
})