$(document).ready(function(){
	var generate = function(num){
		var box = (Math.ceil($("#container").width()) - ((2 * num) + 1)) / num;
		for(var i = 0; i < (num * num); i++){
			var $div = $("<div class='grid'></div>");
			$("#container").append($div);
		}
		$(".grid").css({"height": box, "width": box});
	};
	generate(64);
	
	var colour = $(".input").val();
	$(".grid").mouseenter(function(){
			$(this).css("background", colour);
		});
	$(".clear").on("click", function(){
		$(".grid").remove();
		var amount = prompt("Enter the new grid size");
		generate(amount);
		$(".grid").mouseenter(function(){
			$(this).css("background", colour);
		});
	});

	$(".change").on("click", function(){
		colour = $(".input").val();
		$(".grid").mouseenter(function(){
			$(this).css("background", colour);
		});

	});
});