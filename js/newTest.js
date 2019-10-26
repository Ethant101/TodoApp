

let biglist = [];
let idcount = 0;

$("#listContainer").sortable({
    stop: function( event, ui ){executecode();}
}); //makes it so you can drag and drop items

function newModal(){
    let toggle = document.getElementById("modal");
    if (toggle.style.display == "none"){
        $("#modal").css("display", "flex");
    }
    else{
        $("#modal").css("display", "none");
    }
}

function addNewItem(event){
    switch(event.which){
        case 13:
            let myval = $("#modalAddNew").val();
            if (myval === ""){
                alert("Please enter a name");
            }
            else{
                console.log(myval);
                let tempObj = {};
                tempObj.id = idcount;
                tempObj.listname = myval;
                tempObj.listcontent = {};
                tempObj.listcontent.title = myval;
                tempObj.listcontent.id = Math.random().toString(36).replace(/[^a-z]+/g, '');
                tempObj.listcontent.content = [];
                //tempObj.listcontent.buttons = [`<button class="newEvent" onclick="addNewEvent(self)"><i class="fas fa-plus-circle"></i> New Event</button>`,
                                           //    `<button class="newSubEvent" onclick="addNewSubEvent(self)"><i class="fas fa-plus-circle"></i> Sub Event</button>`];
                tempObj.listcontent.setactive = "newActive"; // "oldActive" "notActive"
                biglist.push(tempObj);
                printmypage();
                //appends userin to listbox
                $("#modalAddNew").val("");
                idcount ++;
                newModal();
            }
            break;
        default:
        //do nothing
    }
}
function printmypage(){
    $("#listContainer").html("");
    $("#todoContainer").children().removeClass("activeContent");
    $("#todoContainer").children().hide();
    for(let i = 0; i < biglist.length; i++){ //for everything in the object do these things
        var identification = biglist[i];
        $("#listContainer").append(`<div class="listItem" onclick="setActiveList(this, ${biglist[i].id}, ${biglist[i].listcontent.id})">
                                         <div class="listItemTitle" contenteditable="true" onkeyup="titleChange(this.innerText, ${identification.listcontent.id})"> ${biglist[i].listname} </div>
                                         <i class="fas fa-trash-alt" onclick="remove(this, ${biglist[i].id})"></i>
                                    </div>`);
    }
    $("#todoContainer").append(`<div class="todo activeContent" id="${identification.listcontent.id}">
<div class="todoTitle ">${identification.listname}</div>
            <div class="todoContent">
                <div class="todoContentInner" onload="placeContent(this, ${identification.listcontent.content}"></div>
                 <button class="newEvent" onclick="addNewEvent(${identification.listcontent.id})"><i class="fas fa-plus-circle"></i> New Event</button>
            </div>
</div>`)
}
function titleChange(title, target){
    $(target).find(".todoTitle").html(title);
}


function setActiveList(el, myid, contentID){
    $("#listContainer").children().removeClass("active");
    $("#todoContainer").children().removeClass("activeContent");
    $("#todoContainer").children().hide();
    for(let i = 0; i < biglist.length; i++){
        if(myid === biglist[i].id) {
            $(el).addClass("active");
            $(contentID).addClass("activeContent");
        }
        $(".activeContent").show();
    }

}
function remove(el, myid, item){//item should be where it is in the object
    for(let i = 0; i < biglist.length; i++){
        if(myid === biglist[i].id){
            biglist.splice(i, 1)//removes parent list from object
        }
    }
    $(el).parent().animate({
        opacity:0,
        left: "-=50",
        height:0
    }, 600, function(){
        //animation complete
        $(el).parent().remove();

    });
}
function executecode(){
    let listarray = $("#listContainer").children();
    for(let i = 0; i < listarray.length; i++){
        $(listarray[i]).attr("id", `listnum${i}`);
    }
}
function placeContent(el, id){
    for(let i = 0; i < id.length; i++){
        $(el).append(id[i]);
    }//function that puts the object contents into the div where called
}
function addNewEvent(myid){
    let newEvent = `<div class="event">
                        <div class="eventContain">
                            <button><label class="checkbox-label">
            <input type="checkbox">
            <span class="checkbox-custom circular"></span></i></button>
                            <p contenteditable="true">change Me</p> <!-- on key press, update object with the whole element -->
                        </div>
                        <i class="fas fa-trash-alt" onclick="remove(this)"></i>
                    </div>`;
    // for(let i = 0; i < biglist.length; i++) {
    //     if (myid === biglist[i].id) { //code isn't getting past this because my id doesn't = biglist
    //         biglist[i].listcontent.content.push(newEvent);
    //     }
    // }
    $(myid).find(".todoContentInner").append(newEvent);
}