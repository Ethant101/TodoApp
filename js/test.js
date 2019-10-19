
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
    let title = ``;
    if (name == ""){
        alert("Please enter a name");
    }
    else{
        let id = Math.random();
        todo(name);
        name = `<div class="listItem" id="${id}" onclick="activeByClick(this)">
                     <div class="listItemTitle" contenteditable="true" onkeyup="todo(this.innerText)" >${name}</div>
                </div>`;
        $("#listContainer").append(name);
        let title = `<div id="todoTitle" contenteditable="true" onkeyup="todo(this.innerText, ${id})">edit me</div>`;
        //replace current todoTitle
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
    let id = Math.random();
    let newEvent = `<div id="${id}"class="event">
                        <div class="eventContain">
                            <button><i class="far fa-circle"></i></button>
                            <p contenteditable="true">change Me</p>
                        </div>
                        <i class="fas fa-trash-alt" onclick="deleteEvent(this)"></i>
                    </div>`;
    let content = [];
    content.push(newEvent);
    $("#todoContentInner").append(newEvent);
}
function addNewSubEvent(){
    let id = Math.random();
    let newSub = `<div id="${id}" class="exampleSub">
                            <div class="exContainSub">
                                <button><i class="far fa-circle"></i></button>
                                <p contenteditable="true">change Me</p>
                            </div>
                            <i class="fas fa-trash-alt" onclick="deleteEvent(this)"></i>
                        </div>`;
    let content = [];
    content.push(newSub);
    $("#todoContentInner").append(newSub);
}

function deleteEvent(el) {
    $(el).parent().slideUp(function(){
        $(el).parent().remove();
    });
}

function activeByClick(el){
    $(el).addClass("active");
}


//Every new list has its content put into an object of lists.
//Each lists has a unique id to call back to its content
//function that clears content and updates it with
//corresponding list

//localStorage.setItem("age", "18");
