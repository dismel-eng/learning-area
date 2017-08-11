'use strict';

$(document).ready(function () {
    
    var app = new App();
    var user = new Person();

    var userForm = $('#user-form');
    var userListContainer = $('#personlist');
    var userList = app.getItemList();

    var showUserForm = function () { 
        userForm.fadeIn(500);
    }

    var showList = function(){
        var arr = app.getItemList();
        
        userListContainer.html('');


        arr.forEach(function (user) { 
            
            userListContainer.append(app.createUserCard(user)).fadeIn(300); 

        });
    }

    var resetForm = function () { 
        userForm.find('input#first-name').val('');
        userForm.find('input#last-name').val('');
        userForm.find('input#avatar').val('');
        userForm.find('input#occupation').val('');
        userForm.find('input#company-name').val('');
        userForm.find('input#address').val('');
        userForm.find('input#city').val('');
        userForm.find('input#state').val('');
        userForm.find('input#zipcode').val('');
    }

    var submitUser = function (event) { 
                
        var person = new Person();
        
        person.first_name = ($('input#first-name').val() === '') ? '' : $('input#first-name').val();        
        person.last_name = ($('input#last-name').val() === '') ? '' : $('input#last-name').val();
        person.userimg = ($('input#avatar').val() === '') ? '' : $('input#avatar').val();
        person.occupation = ($('input#occupation').val() === '') ? '' : $('input#occupation').val();
        person.company = ($('input#company-name').val() === '') ? '' : $('input#company-name').val();
        person.address = ($('input#address').val() === '') ? '' : $('input#address').val();
        person.city = ($('input#city').val() === '') ? '' : $('input#city').val();
        person.state = ($('input#state').val() === '') ? '' : $('input#state').val();
        person.postalcode = ($('input#zipcode').val() === '') ? '' : $('input#zipcode').val();
        
        app.addItem(person);        

        resetForm();
        userForm.fadeOut(800);

        showList();
        event.preventDefault();
        
    }

    

    $('#add-user').click(showUserForm);  
    userForm.submit(submitUser);
          
});