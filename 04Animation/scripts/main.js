var rotationSpeed = 1.00
var myOtherBox = document.getElementById('myOtherBox');

function bounce(){
myOtherBox.object3D.rotation.x += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
