
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
        let id = 'a';
        id += (Math.random() * 10);
        titleChange(name);
        let contentName = `<div class="todoTitle ${id}">${name}</div>
                <div class="todoContent ${id}">
                    <div class="todoContentInner ${id}"></div>
                    <!-- add background image that says theres nothing here when nothings there -->

                    <button class="newEvent" onclick="addNewEvent()"><i class="fas fa-plus-circle"></i> New Event</button>
                    <button class="newSubEvent" onclick="addNewSubEvent()"><i class="fas fa-plus-circle"></i> Sub Event</button>
                </div>`;
        name = `<div class="listItem" id="${id}" onclick="activeToggleByClick(this, '.${id}')">
                     <div class="listItemTitle" contenteditable="true" onkeyup="todo(this.innerText)" >${name}</div>
                     <i class="fas fa-trash-alt" onclick="deleteEvent(this)"></i>
                </div>`;
        $("#todoContainer").append(contentName);
        $("#listContainer").append(name);

        //let title = `<div id="todoTitle" contenteditable="true" onkeyup="todoT(this.innerText, ${id})">edit me</div>`;
        //$("#todoContainer").prepend(title);
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
        $("#modal").css("display", "flex");
    }
    else{
        $("#modal").css("display", "none");
    }
}
//updates content title
function titleChange(title){
    $("#todoTitle").html(title);
}
function todoT(title, id){
    $(`#${id}`).html(title);
}

function addNewEvent(idTarget) {
    let id = 'a';
    id += (Math.random() * 1);

    let newEvent = `<div id="${id}" class="event">
                        <div class="eventContain">
                            <button><i class="far fa-circle"></i></button>
                            <p contenteditable="true">change Me</p>
                        </div>
                        <i class="fas fa-trash-alt" onclick="deleteEvent(this)"></i>
                    </div>`;
    let content = [];
    content.push(newEvent);
    $(this).parent(idTarget).append(newEvent);
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

    content.push(newSub);
    $("#todoContentInner").append(newSub);
}

function deleteEvent(el) {
    $(el).parent().slideUp(function(){
        $(el).parent().remove();
    });
}

function activeToggleByClick(el, id){
    //changes styles of active
    $("#listContainer").children().removeClass("active");
    $(el).addClass("active");
    //changes content
    activeTodo(id);
}
function activeTodo(el){
    $("#todoContainer").children().removeClass("activeTodo");


    $("#todoContainer:first-child").show();
    $(el).addClass("activeTodo").show();
}

//Every new list has its content put into an object of lists.
//Each lists has a unique id to call back to its content
//function that clears content and updates it with
//corresponding list

//localStorage.setItem("age", "18");
