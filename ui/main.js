console.log('Loaded!');
//change the text of html
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';
//move the image
var img = document.getElementById('madi');
var marginLeft =0;
var borderTop = 0;
function moveRight(){
    marginLeft = marginLeft+0.5;
    borderTop = borderTop+1;
    img.style.marginLeft = marginLeft + 'px';
    img.style.borderTop = borderTop + 'px';
}

img.onclick = function(){
  var interval = setInterval(moveRight,10);
};