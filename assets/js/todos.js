//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo to list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + newToDo + "</li>");
	}
});