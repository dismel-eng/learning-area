/**
 * Sidenav Overlay Example
 */
var open = document.getElementById('open-nav');
var close = document.querySelector('.closebtn');

function openNav(){
    document.getElementById('sidenav').style.width = '300px';    
}

function closeNav() {
    document.getElementById('sidenav').style.width = '0';
}


open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);