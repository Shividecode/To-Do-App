$("#input-field").keypress(function(event){
    if(event.which === 13){
        var todoTask = $("#input-field").val();
        $("#input-field").val("");
        $("#item-list").append('<li>' + todoTask + '<span><i class="fa fa-trash"></i></span>')
    }
});

$("#item-list").on("click", "span", function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#ul").on("click", "li" , function(){
    $(this).toggleClass("new");
})
