function Person(){
    var _id = 0;
}

Person.prototype.setId = (value) => { _id = value; }
Person.prototype.getId = ( ) => { return _id; }
Person.prototype.first_name = 'Dismel';
Person.prototype.last_name = 'Echevarria';
Person.prototype.age = 32;
Person.prototype.occupation = 'Web Developer';
Person.prototype.address = '1111 NE 122nd Ave';
Person.prototype.city = 'Portland';
Person.prototype.state = 'OR';
Person.prototype.postalcode = '97230';

function App(){
    var _list = [];
}

// --- Util Function
App.prototype.isValidItem = function(item) {

    var err = new Error('Error: Is not a right Objec.');

    if(typeof item === 'Objec' && item.getId() !== undefined || item.getId() >= 0)
        return (item.getId() === _list.find(item).getId());
    else
        throw err;

}

App.prototype.addItem = (item) => { 
    var err = new Error('Inserting Error.');

    try {
        
        if(!isValidItem(item))
            _list.push(item);
        else
            throw err;

    } catch (error) {
        console.log(error);
    }

}


App.prototype.editItem = (update_item) => {
    
    _list.forEach(function(item, index) {
        if(item.getId() === update_item.getId()){
            item.first_name = update_item.first_name;
            item.last_name = update_item.last_name;
            item.age = update_item.age;
            item.occupation = update_item.occupation;
            item.address = update_item.address;
            item.city = update_item.city;
            item.state = update_item.state;
            item.postalcode = update_item.postalcode;
        }
    });
        
}

App.prototype.delItem = (delItem) => {
    var i;
    
    _list.forEach(function(item, index){
        i = (item.getId() === delItem.getId()) ? index : -1;
    });

    if(i !== -1)
        _list.splice(i, 1)
}

App.prototype.getItemList = function(){
    return _list;
}