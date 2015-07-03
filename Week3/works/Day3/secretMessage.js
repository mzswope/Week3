// var words, message;
// 
// 
// function decode (words)	{
	// var index = 0;
	// var secretMessage = "";
// 	
	// for (var i = 0; i < words.length; i++){
		// index = i % 5;
		// secretMessage += words[i].charAt(index);
	// }
	// return secretMessage
// }
// 
// 
// var words = [
	// 'January',
    // 'lacks',
    // 'caveats',
    // 'hazardous',
    // 'DOORS',
    // 'crying',
    // 'arrogantly',
    // 'climate',
    // 'proponent',
    // 'rebuttal'
	// ];
// 	
	// console.log(decode(words));
	

//Part 2

var words, message;

var sentence = "Attack her nose under here with an itch";

function decode (words)	{
	var index = 0;
	var secretMessage = "";

	var array = sentence.split(" ");
	var arrayRev = array.reverse();

	for (var i = 0; i < arrayRev.length; i++){
			index = i % 5;
			secretMessage += arrayRev[i].charAt(index);
		}
	return secretMessage;
}

	
console.log(decode(words));	


