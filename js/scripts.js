function Pizza(pizzaTopping, pizzaSize, pizzaQuantity) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  this.pizzaQuantity = pizzaQuantity;
}


$(function() {
  $("form#pizzas").submit(function(event) {
    event.preventDefault();

    var selectedTopping = $("select#pizzaTopping option:selected").val();
    var selectedSize = $("select#pizzaSize option:selected").val();
    var pizzaQuantity = parseInt($("select#pizzaQuantity option:selected").val());
    var newPizza = new Pizza(selectedTopping, selectedSize, pizzaQuantity);

    var pizzaPrice = 8;
    if (newPizza.pizzaTopping === ("mushroom") || newPizza.pizzaTopping === ("pepperoni") || newPizza.pizzaTopping === ("sausage")) {
      pizzaPrice += 2;
    }  else {
      pizzaPrice;
    }

    if (newPizza.pizzaSize === ("Medium")) {
      pizzaPrice +=2;
    } else if (newPizza.pizzaSize === ("Large")) {
        pizzaPrice += 4;
      } else {
        pizzaPrice;
      }

    if (pizzaQuantity === 2) {
      pizzaPrice *= 2;
    } else if (pizzaQuantity === 3) {
      pizzaPrice *= 3;
    } else if (pizzaQuantity === 4) {
      pizzaPrice *= 4;
    } else {
      pizzaPrice;
    }

    $("#display-price").empty().append("<h2><span class='pizza-cost'>" + pizzaPrice + "</span> Dollars</h2>");
  });
});
