function Pizza (size,topping1,topping2,topping3,topping4,topping5) {
  this.size = size;
  this.toppings = [topping1,topping2,topping3,topping4,topping5]
  this.toppings = this.toppings.filter(function(n){ return n != undefined });
}

Pizza.prototype.price = function() {
  if(this.size === 1) {
    var basePrice = 4;
  }
  if(this.size === 2) {
    var basePrice = 7;
  }
  if(this.size === 3) {
    var basePrice = 10;
  }

  var toppingPrice = 2;

  var pizzaPrice = basePrice + toppingPrice * this.toppings.length;

  return pizzaPrice;
}


$(document).ready(function() {

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $('input[name="size"]:checked').val();
    var inputtedTopping1 = $('#topping1 option:selected').val();

    // var inputtedTopping1 = $("#topping1 option:selected" ).text();


    var newPizza = new Pizza(inputtedSize,inputtedTopping1)
debugger;
  });
});
