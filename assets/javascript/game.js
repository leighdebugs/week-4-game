// You'll want to get in the habit of placing all of your client side JS code within a document ready block,
// an iife (immediately invoked function expression), or some other functional context
// The reason for this is to not leak variables onto the global scope.
// In this case, your game variables and all of your game functions are readily
// available for a malicious user to tamper withm(ie they could set their wins to be 1000000 😮).

var wins = 0
var losses = 0
var userGuesses = []


var reset = function() {
	userGuesses = [];
	currentScore = 0;
	// targetScore();
	// diamondRandom();
	// pyramidRandom();
	// eggRandom();
	// quartzRandom();
};

var crystals = function() {
	// Since the string of code for generating random numbers
	// is rather unwieldy I'd suggest placing it in a utility function
	targetScore = getRandomNum(120, 19)

	// console.log's are awesome for validating your work when developing a program
	// but it's generally best practice to remove them from production code
	// console.log("Target score: " + targetScore);
	// I know it can seem like a trivial detail, but consistent indentation
	// really does pay dividends towards code maintainability 🙌
	$("#total").html(targetScore);
	diamondRandom = getRandomNum(12, 1)
	// console.log("Diamond: " + diamondRandom);
	pyramidRandom = getRandomNum(12, 1)
	// console.log("Pyramid: " + pyramidRandom);
	eggRandom = getRandomNum(12, 1)
	// console.log("Egg: " + eggRandom);
	quartzRandom = getRandomNum(12, 1)
	// console.log("Quartz: " + quartzRandom);
};

function getRandomNum (max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}


$(document).ready(function(game) {

	crystals();

	// var targetScore = Math.floor(Math.random() * (120 - 19) + 19);
	// 		console.log(targetScore);
	// 		$("#total").html(targetScore);

	// var diamondRandom = Math.floor(Math.random() * (12 - 1) + 1);
	// 		console.log(diamondRandom);
	// var pyramidRandom = Math.floor(Math.random() * (12 - 1) + 1);
	// 		console.log(pyramidRandom);
	// var eggRandom = Math.floor(Math.random() * (12 - 1) + 1);
	// 		console.log(eggRandom);
	// var quartzRandom = Math.floor(Math.random() * (12 - 1) + 1);
	// 		console.log(quartzRandom);


	$("#diamond, #pyramid, #eggcrystal, #quartz").click(function(clicks) {



		if (this.id == "diamond") {
			userGuesses.push(diamondRandom);
			// console.log(userGuesses);
		} else if (this.id == "pyramid") {
			userGuesses.push(pyramidRandom);
			// console.log(userGuesses);
		} else if (this.id == "eggcrystal") {
			userGuesses.push(eggRandom);
			// console.log(userGuesses);
		} else if (this.id == "quartz") {
			userGuesses.push(quartzRandom);
			// console.log(userGuesses);
		} else {
			// this error variable isn't defined anywhere, so this would actually throw 
			// an `error is not defined` error
			// console.log(error);
		};	

		// instead of recalculating the currentScore based on all the values in the 
		// userGuesses array, it may be a bit more straightforward to keep track of the 
		// currentScore as a variable within the scope of the document ready block.
		// That way you'd only need to add the most recent guess to that variable 
		// to determine the score instead of looping through the array every time.
		var currentScore = 0
		for (var i = 0; i < userGuesses.length; i++) {
				currentScore += userGuesses[i] << 0;
				// console.log(currentScore);
				$("#current").html(currentScore);
			};

			//conditionals

			if (currentScore === targetScore) {
				$("#status").html("Yay, you won!")
				wins++;
				document.querySelector("#wins").innerHTML = wins;
				reset();
				crystals();
			} else if (currentScore > targetScore) {
				$("#status").html("Boo, you lost!");
				losses++;
				// console.log(losses);
				document.querySelector("#losses").innerHTML = losses;
				reset();
				crystals();
			} else {
				// console.log("continue");
			};

	});


});