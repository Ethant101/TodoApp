function newModal(){
    let toggle = document.getElementById("modal");
    if (toggle.style.display == "none"){
        $("#modal").css("display", "flex");
    }
    else{
        $("#modal").css("display", "none");
    }
}

function addNewItem(event, name){
    switch(event.which){
        case 13:
            list.add(name);
            $("#modalAddNew").val("");
            printPage();
            break;
    }
}
function printPage(){
    $("#listContainer").html("");
    $("#todoContainer").html("");
    for(let i = 0; i < list.collection.length; i++){
        let thelist = list.collection[i];
        let content = "";

        for(let g = 0; g < thelist.collection.length; g++){
            let contentName = thelist.collection[g].title;
            content += `
                    <div class="todoContentInner" contenteditable="true"></div>`
        }
        $("#listContainer").append(`<div class="listItem" onclick="setActive(this, ${list.collection[i]})">
                                         <div class="listItemTitle" contenteditable="true" onkeyup="titleChange(event, ${i}, this.innerText)" >${thelist.name}</div>
                                         <i class="fas fa-trash-alt" onclick="remove(this, ${list.collection[i]})"></i>
                                    </div>`)
    }
}
