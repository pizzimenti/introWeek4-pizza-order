function Pizza (size,topping1,topping2,topping3,topping4,topping5) {
  this.size = size;
  this.toppings = [topping1,topping2,topping3,topping4,topping5]
  this.toppings = this.toppings.filter(function(n){ return n != undefined });
}

Pizza.prototype.price = function() {
  var basePrice = 7;
  var toppingPrice = 2;



  var pizzaPrice = basePrice + toppingPrice * this.toppings.length;

  return pizzaPrice;
}
