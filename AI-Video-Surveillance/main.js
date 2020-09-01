status = ""
video = ""

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {

    canvas = createCanvas(480, 380);
    canvas.center();

}

function startvideo() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";

}

function modelLoaded() {
    console.log("Model Loaded By cocossd");
    status = true;
    console.log("The Status Value Is : " + status)

    video.loop();
    video.speed(1);
    video.volume(1)
}

function draw() {

    image(video, 0, 0, 480, 380);


}