var decode = require("./decoder.js");

function super_decoder(sentence, type) {
	var type = type.split("-");
	var words = [];
	
	if (type === "every")	{
		words = sentence.split(" ");
	}
	else if (type === "odd") {
		return index % 2 !=0;
	}
	else if (type === "even") {
		return index === 0 && index % 2 === 0;
	};
}

console.log(decode(words));	
