const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
 hour=13;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here
    text("Time: "+ hour,200,200);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    
    // write code slice the datetime
     hour = dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>04 && hour<06){
        bg="sunrise1.png";
    }
    else if(hour>06 && hour<08){
        bg="sunrise2.png";
    }
    else if(hour>08 && hour<10){
        bg="sunset3.png";
    }
    else if(hour>10 && hour<12){
        bg="sunset5.png";
    }
    else if(hour>14 && hour<016){
        bg="sunset6.png";
    }
    else if(hour>16 && hour<18){
        bg="sunset7.png";
    }
    else if(hour>18 && hour<20){
        bg="sunset8.png";
    }
    else if(hour>20 && hour<22){
        bg="sunset11.png";
    }
    else if(hour>23 && hour<00){
        bg="sunset12.png";
    }
    



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
