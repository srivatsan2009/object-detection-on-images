status="";
getimage="";
function preload() {
compass=loadImage("compass.jpg")
divider=loadImage("divider.JPG")
pencil_box=loadImage("pencil box.jpg")
protractor=loadImage("protractor.JPG")
scale=loadImage("scale.JPG")
sharpener=loadImage("sharpener.JPG")
}

function setup() {
canvas=createCanvas(500,500)
canvas.center()
objectdetector=ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML="status:detectin' objects";
getimage=document.getElementById("dropdown").value;
}

function modeloaded() {
console.log("model loaded!");
status=true;
objectDetector.detect(img,gotresult)
}

function gotresult(error,results) {
if(error) {
console.log(error)
}
else{
console.log(results)
}