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

var sizePricing = { "Small": 5, "Medium": 7, "Large": 9 }
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
    this.description = (this.toppings.length !== 0) ? (this.size + " pizza with " + this.toppings.join(", ")) : (this.size + " pizza");
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
        $("#itemPrice").append("<li> $" + newPizza.price.toFixed(2) + "</li>");
        $("#total").text("$"+ (newOrder.totalPrice + newOrder.tax).toFixed(2));
        $(".subTotal").text(" $"+ (newOrder.totalPrice).toFixed(2));
        $("#tax").text("$"+ (newOrder.tax).toFixed(2));
        $("input:checkbox").prop('checked', false);
    })

    $("#orderButton").click(function() {
        $(".receipt").toggle("500ms");
    })
    // Moving letters
    $('.movingHeader .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });
      
      anime.timeline({loop: true})
        .add({
          targets: '.movingHeader .line',
          scaleX: [0,1],
          opacity: [0.5,1],
          easing: "easeInOutExpo",
          duration: 900
        }).add({
          targets: '.movingHeader .letter',
          opacity: [0,1],
          translateX: [40,0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: '-=600',
          delay: function(el, i) {
            return 150 + 25 * i;
          }
        }).add({
          targets: '.movingHeader',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
});

