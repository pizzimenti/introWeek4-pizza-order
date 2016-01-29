describe("Pizza Constructor", function() {
  var testPizza = new Pizza (2,"cheese","pepperoni");
  it("has two toppings the user can select", function() {
    expect(testPizza.topping1).to.equal("cheese");
    expect(testPizza.topping2).to.equal("pepperoni");
  });
  it("has a size the user can select", function() {
    expect(testPizza.size).to.equal(2);
  })
});
