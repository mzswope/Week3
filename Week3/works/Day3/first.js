
//exercise 1
var numbers = '80:70:90:100';

var array = numbers.split(":");
var arrayOfInt = [];
	
for (var i = 0; i < array.length; i++) {
		arrayOfInt.push(parseInt(array[i]));
	}
	
	var sum = arrayOfInt.reduce(function (num, num1) {
		return num + num1;
	});
		
var average = sum/array.length;
	
console.log(average);
