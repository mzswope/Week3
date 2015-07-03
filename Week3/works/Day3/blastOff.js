function blastOff (seconds)	{
	if (seconds > 0) {
		setTimeout(function () {
			console.log(seconds);
			blastOff(seconds - 1);
		}, 1000)
	}
	else {
		console.log("Blast Off");
	}
}

blastOff(5);
