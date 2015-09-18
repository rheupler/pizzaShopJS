describe('Pizza', function() {
  it('will return small', function() {
      var testPizza = new Pizza("cheese", "Small", 1);
      testPizza.pizzaTopping = "cheese";
      testPizza.pizzaSize = "Small";
      testPizza.pizzaQuantity = 1;
      expect(testPizza.pizzaSize).to.equal("Small");
  });

  it('will return quantity', function() {
      var testPizza = new Pizza("cheese", "Small", 1);
      testPizza.pizzaTopping = "cheese";
      testPizza.pizzaSize = "Small";
      testPizza.pizzaQuantity = 1;
      expect(testPizza.pizzaQuantity).to.equal(1);
  });
});
