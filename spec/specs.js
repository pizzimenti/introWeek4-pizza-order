describe("Pizza Constructor", function() {
  var testPizza = new Pizza (2,"cheese","pepperoni");
  it("has two toppings the user can select", function() {
    expect(testPizza.toppings[0]).to.equal("cheese");
    expect(testPizza.toppings[1]).to.equal("pepperoni");
  });
  it("has a size the user can select", function() {
    expect(testPizza.size).to.equal(2);
  })
});

describe("Medium Pizza Price Prototype", function() {
  it("has no toppings", function() {
    var testPizza = new Pizza (2);
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(7);
  });
  it("has one topping", function() {
    var testPizza = new Pizza (2,"cheese");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(9);
  });
  it("has two toppings", function() {
    var testPizza = new Pizza (2,"cheese","pepperoni");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(11);  });
  it("has FIVE toppings", function() {
    var testPizza = new Pizza (2,"cheese","pepperoni","anchovies","spinach","roasted garlic");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(17);  });
});


describe("Small Pizza Price Prototype", function() {
  it("has no toppings", function() {
    var testPizza = new Pizza (1);
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(4);  });
  it("has one topping", function() {
    var testPizza = new Pizza (1,"cheese");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(6);  });
  it("has two toppings", function() {
    var testPizza = new Pizza (1,"cheese","pepperoni");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(8);  });
  it("has FIVE toppings", function() {
    var testPizza = new Pizza (1,"cheese","pepperoni","anchovies","spinach","roasted garlic");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(14);  });
});

describe("Large Pizza Price Prototype", function() {
  it("has no toppings", function() {
    var testPizza = new Pizza (3);
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(10);  });
  it("has one topping", function() {
    var testPizza = new Pizza (3,"cheese");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(12);  });
  it("has two toppings", function() {
    var testPizza = new Pizza (3,"cheese","pepperoni");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(14);  });
  it("has FIVE toppings", function() {
    var testPizza = new Pizza  (3,"cheese","pepperoni","anchovies","spinach","roasted garlic");
    var basePrice = testPizza.basePrice();
    expect(testPizza.pizzaPrice(basePrice)).to.equal(20);  });
});
