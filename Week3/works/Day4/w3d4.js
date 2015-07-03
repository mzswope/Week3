'use strict';

var Animal = function (name, noise) {
	this.name = name;
	this.noise = noise;
};

Animal.prototype.makeNoise = function () {
	console.log(this.name + ": " + this.noise + "!!!!!" );
};


var dog = new Animal('Bob', 'woof');
dog.makeNoise();


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var Animal = function ( ) { //can set parameters instead:  var Aminal = function (name, noise)
	this.name = 'Bulk'; // = name
	this.noise = "Brrr"; // = noise
	
	this.makeNoise = function (){
		console.log(this.noise + '!!!!!');
	}
}

//creating an instance
var dog = new Animal //('name', 'noise');
dog.makeNoise();




