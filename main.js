status = "";
canvas = "";
video = "";
object_detector = "";
input = "";
function setup(){
    canvas = createCanvas(380, 420);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 380, 420);
}
function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    input = document.getElementById("inputtag").value;
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
}