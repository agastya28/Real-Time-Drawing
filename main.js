
noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {

}

function setup() {
    
video = createCapture(VIDEO);
video.size(560, 500)

canvas = createCanvas(550, 550);
canvas.position(650, 100);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Pose Net Model is Loaded")
}



function draw() {
 background('#00eeff');
 fill('#bafc03');
 stroke('#bafc03');

 square(noseX, noseY, difference)

 document.getElementById("square_side").innerHTML = "The Width and the Height of the Square is " + difference + " Pixels"




}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX)
        console.log(difference)

        console.log("Nose X = " + noseX + " Nose Y = " + noseY)
    }
}