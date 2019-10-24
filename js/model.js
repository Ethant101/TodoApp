var list = new ListCollection();

function ListCollection(){
    this.collection = [];
    this.add = function(itemName){
        this.collection.push(new item(itemName));
    };
}

function item(name){
    this.name = name;
    this.collection = [];
    this.addMainEvent = function(name){
        this.collection.push(new mainEvent(name))
    };
    this.remove = function(name){
        this.collection.splice(name, 1);
    }
}

function mainEvent(name){
    this.title = name;
    this.status = false;
    this.content = "";
    this.button = '';

}