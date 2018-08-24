function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
    this.description = "";
}

function Order () {
 this.items = [];
 this.totalPrice = 0;
 this.tax = 0;
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

Order.prototype.getTax = function() {
    this.tax = this.totalPrice*0.1;
}

$(document).ready(function () {
    var newOrder = new Order();
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
        newOrder.items.push(newPizza.description);
        newOrder.totalPrice += newPizza.price;
        newOrder.getTax();
        
        $("#cartContent").append("<li>" + newPizza.description + "</li>");
        $("#itemPrice").append("<li>" + newPizza.price + "</li>");
        $("#total").text("$"+ (newOrder.totalPrice + newOrder.tax));
        $("#tax").text("$"+ newOrder.tax);
        $("input").prop('checked', false);
    })
})