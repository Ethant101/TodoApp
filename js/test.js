
/*
(function(){
    if(localStorage.getItem()){
        $("#listNav").append(section);
    }
})();
*/
// let listItem = {
//     title:${name},
//     content:{
//         title:${name},
//         list:""
//     },
//
// };
let mylists = {};

function addNewItem(event){
    let name = $("#modalAddNew").val();
    if (name == ""){
        alert("Please enter a name");
    }
    else{
        let id = Math.random();
        todo(name);
        todoT(name, id)
        name = `<div class="listItem" id="${id}">
                        <div class="listItemTitle" contenteditable="true" onkeyup="todo(this.innerText)">${name}</div>
                   </div>`;
        $("#listContainer").append(name);

        $(`#${id}`).animate({
            height:'40px',
            width:'100%'
        });
    }

    //append to set item instead of overwriting (forEach)
    //localStorage.setItem("listItem", name);
}

function newModal(){
    let toggle = document.getElementById("modal");
    if (toggle.style.display == "none"){
        let modal = $("#modal").css("display", "flex");
    }
    else{
        let modal = $("#modal").css("display", "none");
    }

}
//updates content title
function todo(title){
    $("#todoTitle").html(title);
}
function todoT(title, id){
    $(`#${id}`).html(title);
}
function addNewEvent() {
    let button = `<button onclick="addNewEvent()"><i class="fas fa-plus-circle"></i>New Event</button>`;
    let newEvent = `<div class="event">
                        <p contenteditable="true">change Me</p>
                        <i class="fas fa-trash-alt"></i>
                    </div>`;
    let content = [];
    content.push(newEvent);
    $("#todoContent").html(newEvent);
}

function deleteEvent(el) {

}


//Every new list has its content put into an object of lists.
//Each lists has a unique id to call back to its content
//function that clears content and updates it with
//corresponding list

//localStorage.setItem("age", "18");
