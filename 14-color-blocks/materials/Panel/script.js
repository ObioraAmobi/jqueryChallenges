$(document).ready(function() {

	$("div.theButton.makeBlue.green").on("click", function(){
		var panelColor = $(this).css("background-color");
		$(".superButton").css("background-color",panelColor);
	});

	$("div.theButton.makeBlue.blue").on("click", function(){
		var panelColor = $(this).css("background-color");
		$(".superButton").css("background-color",panelColor);
	});

	$("div.theButton.makeBlue.red").on("click", function(){
		var panelColor = $(this).css("background-color");
		$(".superButton").css("background-color",panelColor);
	});


});