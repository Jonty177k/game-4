//<script>

	$(document).ready(function() {

		var crystalSum = 0;

		var targetNum = getTargetNum(25, 60);
		getCrystalValue(1,12);

		$("#targetNumber").html("<div> Hit This Number: " + targetNum + "</div>");
		$("#playerNumber").text("Player Score: " + crystalSum + " ");

		var rupees1Val = getCrystalValue(1, 12);  
		var rupees2Val = getCrystalValue(1, 12);
		var rupees3Val = getCrystalValue(1, 12);
		var rupees4Val = getCrystalValue(1, 12);

		console.log(rupees1Val);
		console.log(rupees2Val);
		console.log(rupees3Val);
		console.log(rupees4Val);

		var crystalAudio = new Audio("sounds/crystal.wav");
		var winAudio = new Audio("sounds/win.wav");
		var loseAudio = new Audio("sounds/lose.flac");

		function getTargetNum(min, max) {
  			return Math.floor(Math.random() * (max - min + 1) + min);
		};
		function getCrystalValue (min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};


		var playerWins = 0;
		var playerLosses = 0;

		function addWin() {
			playerWins++;
			alert("You Win!");
			winAudio.play();
			$("#wins").text("Wins: " + playerWins);
			crystalSum=0;
			targetNum = getTargetNum(25, 60);
			$("#targetNumber").html("<div> Hit This Number: " + targetNum + "</div>");
			rupees1Val = getCrystalValue(1, 12);  
			rupees2Val = getCrystalValue(1, 12);
			rupees3Val = getCrystalValue(1, 12);
			rupees4Val = getCrystalValue(1, 12);
		};

		function addLose() {
			playerLosses++;
			alert("You Lose!");
			loseAudio.play();
			$("#losses").text("Losses: " + playerLosses);
			crystalSum=0;
			targetNum = getTargetNum(25, 60);
			$("#targetNumber").html("<div> Hit This Number: " + targetNum + "</div>");
			rupees1Val = getCrystalValue(1, 12);  
			rupees2Val = getCrystalValue(1, 12);
			rupees3Val = getCrystalValue(1, 12);
			rupees4Val = getCrystalValue(1, 12);
		};

		$("#rupees1").on("click", function() {
			crystalSum=crystalSum+rupees1Val;
			$("#playerNumber").text("Player Score: " + crystalSum + " ");
			crystalAudio.play();
			if (crystalSum == targetNum){
				addWin();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
			if (crystalSum > targetNum){
				addLose();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
		});
		$("#rupees2").on("click", function() {
			crystalSum=crystalSum+rupees2Val;
			$("#playerNumber").text("Player Score: " + crystalSum + " ");
			crystalAudio.play();
			if (crystalSum == targetNum){
				addWin();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
			if (crystalSum > targetNum){
				addLose();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
		});
		$("#rupees3").on("click", function() {
			crystalSum=crystalSum+rupees3Val;
			$("#playerNumber").text("Player Score: " + crystalSum + " ");
			crystalAudio.play();
			if (crystalSum == targetNum){
				addWin();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
			if (crystalSum > targetNum){
				addLose();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}		
		});
		$("#rupees4").on("click", function() {
			crystalSum=crystalSum+rupees4Val;
			$("#playerNumber").text("Player Score: " + crystalSum + " ");
			crystalAudio.play();
			if (crystalSum == targetNum){
				addWin();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
			if (crystalSum > targetNum){
				addLose();
				//setTimeout(function(){window.location.reload(true)}, 3000);
				}
		});
	});



//</script>