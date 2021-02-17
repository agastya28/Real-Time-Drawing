
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
}

function modelLoaded() {
    console.log("Pose Net Model is Loaded")
}



function draw() {
 background('#00eeff');
 fill('#bafc03');
 stroke('#bafc03');

 square(noseX, noseY, 50)



 poseNet.on('pose', gotPoses)

}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

       // leftWristX = results[0].pose.

        console.log("Nose X = " + noseX + " Nose Y = " + noseY)
    }
}