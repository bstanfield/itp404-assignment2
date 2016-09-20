// TASK 1
var string = {
  pluralize: function(word) {
    if(word.substring(word.length-1) == 'y') {
      return word.substring(0, word.length-1) + 'ies';
    }
    else {
      return word + 's';
    }
  }
};

console.log(string.pluralize("penny"));
console.log(string.pluralize("board"));

// TASK 2
function Book(object) {
  this.title = object.title;
  this.quantity = object.quantity;
  this.price = object.price;
}

Book.prototype.getSubtotal = function() {
  return this.quantity * this.price;
}

var oojsBook = new Book({ title: 'Object Oriented Javascript', quantity: 2, price: 10});
console.log(oojsBook.title);
console.log(oojsBook.quantity);
console.log(oojsBook.price);
console.log(oojsBook.getSubtotal());

function ShoppingCart(items) {
  this.items = items;
}

ShoppingCart.prototype.add = function(book) {
  this.items.push(book);
}

ShoppingCart.prototype.getTotal = function() {
  var total = this.items.reduce(function(accumulator, item) {
    return accumulator + item.getSubtotal();
  }, 0)
  return total;
};

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160

// TASK 3
Array.prototype.map2 = function(callbackFunction) {
  var newArray = [];
    for(var i = 0; i < this.length; i++) {
      newArray.push(callbackFunction(this[i]));
    }
  return newArray;
};


var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
