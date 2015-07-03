var Car = function(model, noise)	{
	this.model = model;
	this.noise = noise;
	this.numberOfWheels = 4;	
};

Car.prototype.makeNoise = function () {
	console.log(this.model + ": " + this.noise + "!!!!!" );
};

var car1 = new Car("Maxima", "Beep");
car1.makeNoise();
