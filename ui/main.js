console.log('Loaded!');
//change the text of html
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';
//move the image
var img = document.getElementById('madi');
var marginLeft =0;
//var padding = 0;
function moveLeft(){
    marginRight = marginRight+0.05;
   // padding = padding+0.01;
    img.style.marginRight = marginRight + 'px';
   // img.style.padding = padding + 'px';
}

img.onclick = function(){
  var interval = setInterval(moveLeft,10);
};