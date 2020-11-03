
function addTodo() {
    var text = $("#todoText").val(); //read the text
    $("#todoText").val(''); //clear

    // create an li with the text
    var li = "<li>"+ text +"</li>";
    $("#pendingList").append(li);

    //focus on the input
    $("#todoText").focus();
}

function init() {

    //set the text on the input
    //var input = document.getElementById("todoText");
    //input.value = "Hello there";


    // $("#todoText").val("Hello there!"); //write f you pass a parameter
    // console.log($("#todoText").val()); //read if you don't 

    // $("#todoText").val(""); //clear text



    // catch events
    $("#btnAdd").click(addTodo);

}






//event that gets executed only after the browser finish rendering ALL html
//pass a function name
window.onload = init;