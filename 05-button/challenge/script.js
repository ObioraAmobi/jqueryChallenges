$(document).ready(function() {

	var $card;

	$("p").on("click", function(){
		$(this).addClass("toRed");
		//$(this).css("color","red"); //all paragraph's text becomes red when clicked
	});
	$("h2").on("mouseenter", function(){
		$(this).css("background-color","lightblue"); //h2 bg color changes to lightblue when hovered
	});
	$("h2").on("mouseleave", function(){
		$(this).css("background-color","white"); //h2 bg color changes back to white when mouse moved off
	});
	
	$card = $(".card_head")[0];
	
	$(card).on("mouseenter", function(){
		$(this).css("font-size","30px");
	});
	$(card).on("mouseleave", function(){
		$(this).css("font-size","16px");
	});
	$("a").on("mouseenter", function(){
		$("body").css("background-color","black");
	});
	$("a").on("mouseleave", function(){
		$("body").css("background-color","grey");
	});
});