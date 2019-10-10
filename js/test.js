function addNewItem(event){
    let name = $("#modalAddNew").val();
    let section = `<div class="listItem">
                        <div class="listItemTitle" contenteditable="true">${name}</div>
                   </div>`;
    $("#listNav").append(section);
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