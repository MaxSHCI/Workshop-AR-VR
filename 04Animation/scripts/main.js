var rotationSpeed = 2.00
var myOtherBox = document.getElementById('myOtherBox');

function bounce(){
myOtherBox.object3D.position.y += rotationSpeed;
console.log(myOtherBox.object3D.position.x);
}

setInterval(spin, 16); //equivalent to 60 fps
