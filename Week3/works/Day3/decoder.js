var sentence1 = "Attack her nose under here with an itch"
 
var sentence2 = "Raul Nuñez call never finished"
 
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
 
var sentence4 = "inner peace is overrated"
 
var sentence5 = "Fill the proper tank for the cow"
 
module.exports = [sentence1, sentence2, sentence3, sentence4, sentence5];

var words, message;

function decode (words)	{
	var index = 0;
	var secretMessage = "";

	var array = sentence1.split(" ");
	
	for (var i = 0; i < array.length; i++){
			index = i % 5;
			secretMessage += array[i].charAt(index);
		}
	return secretMessage;
}

console.log(decode(words));	