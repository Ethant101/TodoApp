/*biglist = [
    0: {
        id:0,
        listname: 'test',
        listcontent: {
            title: 'test',
            content:[],
            buttons: []
        }
    }
    1: {}


] */



let biglist = [];
let idcount = 0;
let contentid = 0;

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
                tempObj.listcontent.content = [];
                tempObj.listcontent.buttons = [`<button class="newEvent" onclick="addNewEvent(self)"><i class="fas fa-plus-circle"></i> New Event</button>`,
                                               `<button class="newSubEvent" onclick="addNewSubEvent(self)"><i class="fas fa-plus-circle"></i> Sub Event</button>`];
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
    $("#todoContainer").html("");
    for(let i = 0; i < biglist.length; i++){ //for everything in the object do these things
        var id = biglist[i];
        console.log(id);
        $("#listContainer").append(`<div class="listItem" onclick="setActiveList(this, ${biglist[i].id})">
                                         <div class="listItemTitle" contenteditable="true" onkeyup="titleChange(this.innerText)" >${biglist[i].listname}</div>
                                         <i class="fas fa-trash-alt" onclick="remove(this, ${biglist[i].id})"></i>
                                    </div>`);

        //function that for the content object, adds todocontent with the opening of todocontentinner, then adds all our button additions, then
        //closes both dives
    }
    $("#todoContainer").append(`<div class="todoTitle">${id.listname}</div>
            <div class="todoContent">
                <div class="todoContentInner" onload="placeContent(this, ${id.listcontent.content}"></div>
                 <button class="newEvent" onclick="addNewEvent(self)"><i class="fas fa-plus-circle"></i> New Event</button>
                 <button class="newSubEvent" onclick="addNewSubEvent(self)"><i class="fas fa-plus-circle"></i> Sub Event</button>
            </div>`)
    /*for(let j = 0; j < biglist[i].listcontent.content.length; j++){
    (".todoContentInner").append(biglist[i].listcontent.content[j]);
     */
}
let oldContent; //biglist[i].listcontent.content of old element; this will be assinged last updatePage call
let newContent; //^ of new element   we will pass this in when we call update page
function updatePage(oldel, newel){
    oldContent = [];//empty oldcontent
    $("#todocontentInner").children('div').each(function(){
        console.log(this.html);
        oldContent.push(this.html());
    });
    // $("#todoContentInner").append(function(){
    //     for(let i = 0; i < newContent.length; i++){
    //        return newContent[i];
    //     }
    // });
    // oldContent = newContent;
    //changes the new content to old content to be ready for a new updatePage call
}

function setActiveList(el, myid){
    $("#listContainer").children().removeClass("active");
    $("#todoContainer").children().removeClass("activeTodo");
    for(let i = 0; i < biglist.length; i++){
        if(myid === biglist[i].id){
            $(el).addClass("active");
            //setActiveTodo(el, myid);
            updatePage(oldContent, biglist[i].listcontent.content);
        }
    }

}
/*function setActiveTodo(el, myid){
    for(let i = 0; i < biglist.length; i++){
        biglist[i].id.listcontent.setactive = "notActive";
    }
    myid.listcontent.setactive = "active";
} */

function remove(el, myid){
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
        printmypage();
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
                            <button><i class="far fa-circle"></i></button>
                            <p contenteditable="true" onkeydown="editmember(event, ${myid}, ${myid}, this.innerText)">change Me</p> <!-- on key press, update object with the whole element -->
                        </div>
                        <i class="fas fa-trash-alt" onclick="remove(this)"></i>
                    </div>`;
    for(let i = 0; i < biglist.length; i++) {
        if (myid === biglist[i].id) { //code isn't getting past this
            biglist[i].listcontent.content.push(newEvent);
            console.log(biglist[i].listcontent.content)
        }
    }
    $(".todoContentInner").append(newEvent);
}
function addNewSubEvent(myid){
    let newSub = `<div class="exampleSub">
                            <div class="exContainSub">
                                <button><i class="far fa-circle"></i></button>
                                <p contenteditable="true">change Me</p>
                            </div>
                            <i class="fas fa-trash-alt" onclick="remove(this)"></i>
                        </div>`;
    for(let i = 0; i < biglist.length; i++) {
        if (myid === biglist[i].id) {
            biglist[i].listcontent.content.push(newSub);
        }
    }
    $(".todoContentInner").append(newSub);
}
function editmember(event, listnum, memnum, name){
    switch(event.which) {
        case 13: //enter key pushed
            let thename = myclubs.collection[listnum].collection[memnum].name;
            thename = name;
            printPage();
            break;
    }
}