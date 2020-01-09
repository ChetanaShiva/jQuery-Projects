//Check off specific todos by click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	// //if li is grey
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color : "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// //else
	// else{
	// 	//turn it grey
	// 	$(this).css({
	// 		color : "grey",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();//refers to li
	});//important
	event.stopPropogation();//to prevent Event-Bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});