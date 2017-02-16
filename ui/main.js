console.log('Loaded!');
//change the text of html
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';
//move the image
var img = document.getElementById('madi');
var marginLeft =0;
var padding = 0;
function moveRight(){
    marginLeft = marginLeft+0.005;
    padding = padding+0.01;
    img.style.marginLeft = marginLeft + 'px';
    img.style.padding = padding + 'px';
}

img.onclick = function(){
  var interval = setInterval(moveRight,10);
};