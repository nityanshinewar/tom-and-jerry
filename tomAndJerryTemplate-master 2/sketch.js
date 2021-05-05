var bground;
var cat;
var mouse;
var bgImg;
var mouseImg1;
var mouseImg2;
var catImg1;
var catImg2;
var catImg4;
mouseImg4;


function preload() {
    //load the images here
    catImg=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    bgImg=loadImage("images/garden.png");
    catImg4=loadAnimation("images/cat4.png");
    mouseImg4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bground=createSprite(0,0,1000,800);
    bground.addImage("bgImg",bgImg);
    bground.scale=2;
    mouse=createSprite(100,600,20,30);
    mouse.addAnimation("mouseImg1",mouseImg1);
    cat=createSprite(800,600,20,30);
    cat.addAnimation("catImg",catImg);
    cat.scale=0.2;
    mouse.scale=0.2;
   
   
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catHappy",catImg4);
         cat.changeAnimation("catHappy");
         mouse.addAnimation("mouseHappy",mouseImg4);
         mouse.changeAnimation("mouseHappy");
         cat.velocityX=0;
         cat.x=210;
         
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning")
      mouse.frameDelay=25;
      cat.velocityX=-4;
  }

  if (keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning")
    mouse.frameDelay=25;
    cat.velocityX=-4;
}

}

