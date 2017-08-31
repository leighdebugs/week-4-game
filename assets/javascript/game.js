var wins = 0
var losses = 0
var userGuesses = []


$(document).ready(function(game) {

	var targetScore = Math.floor(Math.random() * (120 - 19) + 19);
			console.log(targetScore);
			$("#total").html(targetScore);

	var diamondRandom = Math.floor(Math.random() * (12 - 1) + 1);
			console.log(diamondRandom);
	var pyramidRandom = Math.floor(Math.random() * (12 - 1) + 1);
			console.log(pyramidRandom);
	var eggRandom = Math.floor(Math.random() * (12 - 1) + 1);
			console.log(eggRandom);
	var quartzRandom = Math.floor(Math.random() * (12 - 1) + 1);
			console.log(quartzRandom);

	$("#diamond, #pyramid, #eggcrystal, #quartz").click(function(clicks) {

		if (this.id == "diamond") {
			userGuesses.push(diamondRandom);
			console.log(userGuesses);
		} else if (this.id == "pyramid") {
			userGuesses.push(pyramidRandom);
			console.log(userGuesses);
		} else if (this.id == "eggcrystal") {
			userGuesses.push(eggRandom);
			console.log(userGuesses);
		} else if (this.id == "quartz") {
			userGuesses.push(quartzRandom);
			console.log(userGuesses);
		} else {
			console.log(error);
		};	
		var currentScore = 0
		for (var i = 0; i < userGuesses.length; i++) {
				currentScore += userGuesses[i] << 0;
				console.log(currentScore);
				$("#current").html(currentScore);
			};

			//conditionals
			var wins = 0;
			var losses = 0;

			if (currentScore === targetScore) {
				$("#status").html("Yay, you won!")
				wins++
				$("#wins").html(wins)
			} else if (currentScore > targetScore) {
				$("#status").html("Boo, you lost!");
				losses++
				console.log(losses);
				$("#losses").html(losses);
			} else {
				console.log("continue");
			};

	});


});