$("#red").click(function(){
    let darkRed = "#5D080B";
    let red = "#9F171D";
    let pink = "#D72C39";
    let white = "#DED7CE";
    let tan = "#8F6952";
    let borderProp = "2px solid #ffffff";
    $(".navbar").css({"background-color":pink, borderBottom: borderProp});
    $("#listNav").css("background-color", darkRed);
    $("#addNewbutton").css("background-color", darkRed);
    $("#todoContainer").css("background-color", white);
});
$("#blue").click(function(){
    let darkBlue = "#010626";
    let lightBlue = "#024059";
    let white = "#F2F2F2";
    let grey = "#A6A6A6";
    let black = "#2a2a2a";
    let borderProp = "2px solid #E0C4F2";
    $(".navbar").css("background-color", lightBlue);
    $("#listNav").css("background-color", darkBlue);
    $("#addNewbutton").css("background-color", darkBlue);
    $("#todoContainer").css("background-color", white);
});
$("#grey").click(function(){
    let cyan = "#6AB69D";
    let lightGrey = "#D7D7D9";
    let blueGrey = "#334141";
    let darkGrey = "#3F4340";
    let borderProp = "2px solid #E0C4F2";
    $(".navbar").css({"background-color":cyan, borderBottom: borderProp});
    $("#listNav").css("background-color", blueGrey);
    $("#addNewbutton").css("background-color", blueGrey);
    $("#todoContainer").css("background-color", lightGrey);
    // $("").css("background-color", )
});
$("#green").click(function(){
    let grey = "#3E3740";
    let white = "#D7D7D9";
    let darkGreen = "#022601";
    let green = "#6DD93B";
    let lightGreen = "#69A53E";
    let borderProp = "2px solid #E0C4F2";
    $(".navbar").css({"background-color": lightGreen, borderBottom: borderProp});
    $("#listNav").css("background-color", darkGreen);
    $("#addNewbutton").css("background-color", darkGreen);
    $("#todoContainer").css("background-color", white);
});
$("#purple").click(function(){
    let black = "#190F26";
    let darkPurple = "#392259";
    let purple = "#5A378C";
    let lightPurple = "#8850BF";
    let borderProp = "2px solid #E0C4F2";
    let white = "#E0C4F2";
    $(".navbar").css({"background-color":purple, "borderBottom":borderProp});
    $("#listNav").css("background-color", darkPurple);
    $("#addNewbutton").css("background-color", darkPurple);
    $("#todoContainer").css("background-color", white);
});