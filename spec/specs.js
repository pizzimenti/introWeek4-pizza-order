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

describe("Pizza Price Prototype", function() {
  it("has no toppings", function() {
    var testPizza = new Pizza (2);
    expect(testPizza.price()).to.equal(7);
  });
  it("has one topping", function() {
    var testPizza = new Pizza (2,"cheese");
    expect(testPizza.price()).to.equal(9);
  });
  it("has two toppings", function() {
    var testPizza = new Pizza (2,"cheese","pepperoni");
    expect(testPizza.price()).to.equal(11);
  });
});
