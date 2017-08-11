function Person(){
    var _id = 0;

    this.setId = (value) => { _id = value; }
    this.getId = ( ) => { return _id; }

    this.first_name = 'Dismel';
    this.last_name = 'Echevarria';
    this.userimg = 'https://bootdey.com/img/Content/user_3.jpg';
    this.occupation = 'Web Developer';
    this.company = 'Freelance';
    this.address = '1111 NE 122nd Ave';
    this.city = 'Portland';
    this.state = 'OR';
    this.postalcode = '97230';
    this.phone = '9712807914';
}




function App(){
    var _list = [];

    // --- Util Function
    this.isValidItem = function(item) {

        var err = new Error('Is not a right Objec.');

        if(typeof item === 'object'){
            
            var exist = _list.find(function(element){
                return element.getId() === item.getId();
            });

            return exist !== undefined;
            
        }else
            throw err;

    }

    this.addItem = (item) => { 
        
        var err = new Error('Inserting Error.');

        try {

                if(!this.isValidItem(item)){
                    
                    var tmp_person = new Person();
                    
                    tmp_person.first_name = (item.first_name === '') ? tmp_person.first_name : item.first_name;
                    tmp_person.last_name = (item.last_name === '') ? tmp_person.last_name : item.last_name;
                    tmp_person.userimg = (item.userimg === '') ? tmp_person.userimg : item.userimg;
                    tmp_person.occupation = (item.occupation === '') ? tmp_person.occupation : item.occupation;
                    tmp_person.company = (item.company === '') ? tmp_person.company : item.company;
                    tmp_person.address = (item.address === '') ? tmp_person.address : item.address;
                    tmp_person.city = (item.city === '') ? tmp_person.city : item.city;
                    tmp_person.state = (item.state === '') ? tmp_person.state : item.state;
                    tmp_person.postalcode = (item.postalcode === '') ? tmp_person.postalcode : item.postalcode;
                    tmp_person.phone = (item.phone === '') ? tmp_person.phone : item.phone;

                    var count = this.getItemList().length + 1;
                    tmp_person.setId(count);                    
                    
                    _list.push(tmp_person);

            }    
            else
                throw err;

        } catch (error) {
            console.log(error);
        }

    }


    this.editItem = (update_item) => {
        
        _list.forEach(function(item, index) {
            if(item.getId() === update_item.getId()){

                item.first_name = update_item.first_name;
                item.last_name = update_item.last_name;
                item.userimg = update_item.userimg;
                item.occupation = update_item.occupation;
                item.company = update_item.company;
                item.address = update_item.address;
                item.city = update_item.city;
                item.state = update_item.state;
                item.postalcode = update_item.postalcode;
                item.phone = update_item.phone;

            }
        });
            
    }

    this.delItem = (delItem) => {
        var i;
        
        _list.forEach(function(item, index){
            i = (item.getId() === delItem.getId()) ? index : -1;
        });

        if(i !== -1)
            _list.splice(i, 1)
    }

    this.getItemList = function(){
        return _list;
    }

    this.createUserCard = function (user){
        
            var userBox = document.createElement('div');
            var userBoxContainer = document.createElement('div');
            var userBoxFooter = document.createElement('div');

            userBox.classList.add('contact-box');
            userBox.classList.add('center-version');    
            userBoxContainer.classList.add('user-wrapper');
            userBoxFooter.classList.add('contact-box-footer');

            var userImg = document.createElement('img');
            var userName = document.createElement('h3');
            var userOcupation = document.createElement('div');
            var userAddress = document.createElement('address');
            
            userImg.setAttribute('alt', 'User img');
            userImg.width = 64;
            userImg.height = 64;
            userImg.setAttribute('src', user.userimg);
            userImg.classList.add('img-circle');

            userName.classList.add('m-b-xs');
            userName.innerHTML = '<strong>'+ user.first_name +' ' + user.last_name +'</strong>';
            userOcupation.innerHTML = '<div class="font-bold">'+ user.occupation +'</div>';
            userAddress.innerHTML = '<strong>'+user.company+'</strong><br>'+
                                    user.address+'<br>'+
                                    user.city+', '+ user.state +', '+ user.postalcode+'<br>'+
                                    '<abbr title="Phone">P: </abbr>'+user.phone;

            

            userBoxContainer.appendChild(userImg);
            userBoxContainer.appendChild(userName);
            userBoxContainer.appendChild(userOcupation);
            userBoxContainer.appendChild(userAddress);
            
            userBox.appendChild(userBoxContainer);
            
            
            return userBox;
        }
}

