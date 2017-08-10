'use strict';

$(document).ready(function () {
    
    var app = new App();
    var initData = [{
        first_name : 'Dismel',
        last_name : 'Echevarria',
        age : 32,
        occupation : 'Web Developer',
        address : '1111 NE 122nd Ave',
        city : 'Portland',
        state : 'OR',
        postalcode : '97230',
        userimg : 'https://bootdey.com/img/Content/user_3.jpg'
    }];
    var user = new Person();
    var user_form = $('#user-form');
    var selectField = user_form.children('select');
    
    console.dir(selectField);

    var showUserForm = function () { 
        user_form.show('slow');
    }
    
    $('#add-user').click(showUserForm);    
});