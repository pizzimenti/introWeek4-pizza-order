function Pizza (size,topping1,topping2,topping3,topping4,topping5) {
  this.size = size;
  this.toppings = [topping1,topping2,topping3,topping4,topping5]
  this.toppings = this.toppings.filter(function(n){ return n != undefined });
}

Pizza.prototype.basePrice = function() {
  // if(this.size == 1) {
  //   return 4;
  // }
  // if(this.size == 2) {
  //   return 7;
  // }
  // if(this.size == 3) {
  //   return 10;
  // }

  switch (this.size) {
    case 1: return 4;
    case 2: return 7;
    case 3: return 10;
  }
}

Pizza.prototype.pizzaPrice = function(basePrice) {
  // if(this.size === 1) {
  //   var basePrice = 4;
  // }
  // if(this.size === 2) {
  //   var basePrice = 7;
  // }
  // if(this.size === 3) {
  //   var basePrice = 10;
  // }

  var toppingPrice = 2;

  var pizzaPrice = basePrice + toppingPrice * this.toppings.length;

  return pizzaPrice;
}


$(document).ready(function() {

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($('input[name="size"]:checked').val());
    var inputtedTopping1 = $('#topping1').val();
    var inputtedTopping2 = $('#topping2').val();
    var inputtedTopping3 = $('#topping3').val();
    var inputtedTopping4 = $('#topping4').val();
    var inputtedTopping5 = $('#topping5').val();

    var newPizza =
    new Pizza(inputtedSize,
      inputtedTopping1,
      inputtedTopping2,
      inputtedTopping3,
      inputtedTopping4,
      inputtedTopping5)


    if (inputtedSize === '1') {
      var size = "small";
    } if (inputtedSize === '2') {
      var size = "medium";
    } if (inputtedSize === '3')
      var size = "large";

    var basePrice = newPizza.basePrice();
    var pizzaPrice = newPizza.pizzaPrice(basePrice);

    $('#size-display').text(size);
    $('#topping-number').text(newPizza.toppings.length);
    $('#base-price').text('$'+basePrice);

  });
});
