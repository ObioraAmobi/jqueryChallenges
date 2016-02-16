$(document).ready(function() {

	$("p").on("click", function(){
		$("p").css("color","red"); //all paragraph's text becomes red when clicked
	});
	$("h2").on("mouseenter", function(){
		$("h2").css("background-color","lightblue"); //h2 bg color changes to lightblue when hovered
	});
	$("h2").on("mouseleave", function(){
		$("h2").css("background-color","white"); //h2 bg color changes back to white when mouse moved off
	});
	var card = $(".card_head")[0];
	$(card).on("mouseenter", function(){
		$(card).css("font-size","30px");
	});
	$(card).on("mouseleave", function(){
		$(card).css("font-size","16px");
	});
	$("a").on("mouseenter", function(){
		$("body").css("background-color","black");
	});
	$("a").on("mouseleave", function(){
		$("body").css("background-color","grey");
	});
});