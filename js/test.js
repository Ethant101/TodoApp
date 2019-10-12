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
     name = `<div class="listItem">
                        <div class="listItemTitle" contenteditable="true">${name}</div>
                   </div>`;
    $("#listNav").append(name);
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

//localStorage.setItem("age", "18");
