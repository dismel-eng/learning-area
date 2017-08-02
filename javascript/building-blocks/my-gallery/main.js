/**
 * My Galery App
 */
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var arr = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']

/** The init function add the images in the array to the thumbar */
function init() {
  for (var i = 0; i < arr.length; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', arr[i]);
    thumbBar.appendChild(newImage);
  }  
}
/** 
 * Use setAttribute to change the src attribute of the displayImgage.
 * Use getAttribute('src') to get the src attribute of the selected target.
 *  */
function changeImg(e) {
  displayedImage.setAttribute('src',e.target.getAttribute('src'));       
}
/* Wiring up the Darken/Lighten button */
function darken() { 
  overlay.classList.toggle('dark');
  console.log(overlay.classList);
}

init();
var imgselect = document.querySelectorAll('.thumb-bar img');
for (var i = 0; i < imgselect.length; i++) {
  imgselect[i].addEventListener('click', function (e) { 
    changeImg(e);
  });
}
btn.addEventListener('click', darken);

