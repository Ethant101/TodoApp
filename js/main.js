let biglist = [];
let idcount = 0;

$(".listbox").sortable({
    stop: function( event, ui ){executecode();}
}); //makes it so you can drag and drop items
function saveitem(event){
    switch(event.which){
        case 13:
            let myval = $("#todoinput").val();
            console.log(myval);
            let tempObj = {};
            tempObj.id = idcount;
            tempObj.listname = myval;
            tempObj.listcol = [];
            biglist.push(tempObj);
            printmypage();
            /*$(".listbox").append(
                `<div class='list' id="${myval}">
                 <span>${myval}</span>
                 <i class="fas fa-trash-alt" onclick="remove(this)"></i></div>`); */
            //appends userin to listbox
            $("#todoinput").val("");
            idcount ++;
            break;
        default:
        //do nothing
    }
}
function printmypage(){
    $(".listbox").html("");
    for(var i = 0; i < biglist.length; i++){ //for everything in the object do these things
        $(".listbox").append(`<div class='list'>
                 <i class="fas fa-trash-alt" onclick="remove(this, ${biglist[i].id})"></i>
                 <span>${biglist[i].listname}</span>
                 </div>`);
    }
}
function remove(el){
    /*$(el).parent().fadeOut("slow", function(){
        //after animation is done, this fires.
    });*/
    //$(el).parent().slideUp(); removes it with a slide up animation
//     $(el).parent().remove();//we need to remove from object instead now
    for(var i = 0; i < biglist.length; i++){
        if(myid === biglist[i].id){
            biglist.splice(i, 1)//removes parent list object
        }
    }

    $(el).parent().animate({
        opacity:0,
        left: "-=50",
        height:0
    }, 600, function(){
        //animation complete
        $(el).parent().remove();
        printmypage();
    });
}
function executecode(){
    console.log("hola");
    let listarray = $(".listbox").children();
    for(let i = 0; i < listaray.length; i++){
        //console.log(listarray[i]);
        $(listarray[i]).attr("id", `litstnum${i}`);
    }
    //$(listarray[0]).addClass("activeitem");
}
*/