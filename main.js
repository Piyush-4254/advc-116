noseX=0;
noseY=0;

function preload()
{
clownnose = loadImage("https://i.postimg.cc/W1kh9jj3/Clown-Nose-PNG-Image.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,model_loded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,300,300);
    image(clownnose,noseX-20,noseY-20,30,30);
}

function take_snapshot()
{
    save('myfilterimage.png');
}

function take_snapshot()
{
    save('myfilterimage.png');
}

function model_loded()
{
    console.log("poseNet is initialized");
}

function  gotposes(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose x = "+ results[0].pose.nose.x);
        console.log("Nose y = "+ results[0].pose.nose.y);
    }
}



