'use strict';

var Cart = function () {
	this.items = []; 
	this.total = 0;
};

	Cart.prototype.addItems = function(item) {
		this.items.push(item);
	
	};
	
	Cart.prototype.totalPrice = function()	{
		var total = 0;
		this.items.forEach (function(item){
			total += item.price;
		});	
		this.total = total;
	};
	
var Items = function (name, price)	{
	this.price = price;
	this.name = name;	
};

var myCart = new Cart ();
var apple = new Items("apple", 10);
var banana = new Items("banana", 5);
var orange = new Items("orange", 25);
myCart.addItems(apple);
myCart.addItems(banana);
myCart.addItems(orange);
myCart.totalPrice();

console.log("Your total price is " + myCart.total + " euros");

console.log(myCart.items);
// console.log(totalPrice);




