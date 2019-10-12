function redTheme(){
    let darkRed = "#5D080B";
    let red = "#9F171D";
    let pink = "#D72C39";
    let white = "#DED7CE";
    let tan = "#8F6952";
    $(".navbar").css("background-color", pink);
    $("#listNav").css("background-color", darkRed);
    $("#addNew").css("background-color", darkRed);
    $("#addNew").hover(function(){
        $("#addNew").css({"background-color":red, "border-bottom":`2px solid ${tan}`});
    });
    $("#listItem").hover(function(){
        $("#listItem").css({"background-color":red, "border-bottom":`1px solid ${tan}`});
    });
    $("#todoContainer").css("background-color", white);
    // $("").css("background-color", )
    // $("").css("background-color", )
}
function blueTheme() {
    let darkBlue = "#010626";
    let lightBlue = "#024059";
    let white = "#F2F2F2";
    let grey = "#A6A6A6";
    let black = "#2a2a2a";
    $(".navbar").css("background-color", lightBlue);
    $("#listNav").css("background-color", darkBlue);
    $("#addNew").css("background-color", darkBlue);
    $("#addNew").hover(function(){
        $("#addNew").css("background-color", grey);
    });
    $("#listItem").hover(function(){
        $("#listItem").css("background-color", grey)
    });
    $("#todoContainer").css("background-color", white);


}
function greyTheme(){
    let black = "#060808";
    let cyan = "#6AB69D";
    let lightGrey = "#7B7D7B";
    let blueGrey = "#334141";
    let darkGrey = "#3F4340";
    $(".navbar").css("background-color", cyan);
    $("#listNav").css("background-color", blueGrey);
    $("#addNew").css("background-color", blueGrey);
    $("#addNew").hover(function(){
        $("#addNew").css("background-color", darkGrey);
    });
    $("#listItem").hover(function(){
        $("#listItem").css("background-color", darkGrey)
    });
    $("#todoContainer").css("background-color", lightGrey);
    // $("").css("background-color", )
}
function greenTheme(){
    let grey = "#3E3740";
    let white = "#D7D7D9";
    let darkGreen = "#022601";
    let green = "#6DD93B";
    let lightGreen = "#9df55d";
    $(".navbar").css("background-color", lightGreen);
    $("#listNav").css("background-color", darkGreen);
    $("#addNew").css("background-color", darkGreen);
    $("#addNew").hover(function(){
        $("#addNew").css("background-color", green);
    });
    $("#listItem").hover(function(){
        $("#listItem").css("background-color", green);
    });
    $("#todoContainer").css("background-color", white);
}
function purpleTheme(){
    let black = "#190F26";
    let darkPurple = "#392259";
    let purple = "#5A378C";
    let lightPurple = "#8850BF";
    let white = "#E0C4F2";
    $(".navbar").css({"background-color":purple, "borderBottom":white});
    $("#listNav").css("background-color", darkPurple);
    $("#addNew").css("background-color", darkPurple);
    $("#addNew").hover(function(){
        $("#addNew").css("background-color", lightPurple);
    });
    $("#listItem").hover(function(){
        $("#listItem").css("background-color", lightPurple)
    });
    $("#todoContainer").css("background-color", white);
}

function theme(color){
    switch (color){
        case (color === 'red'):
            redTheme();
            break;
        case (color === 'blue'):
            blueTheme();
            break;
        case (color === 'grey'):
            greyTheme();
            break;
        case (color === 'green'):
            greenTheme();
            break;
        case (color === 'purple'):
            purpleTheme();
            break;
        default:
            break;
    }
}
