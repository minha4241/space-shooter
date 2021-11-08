var spaceShip, ssimg
var space
var space1img
var space1
var alien, alienimg, alienGroup
var bullet, bulletGroup
var score=0

function preload(){
    ssimg=loadImage("spaceship.png")
    space1img=loadImage("space.jpg")
    alienimg=loadImage("aliens.png")

    
}

function setup(){
    createCanvas(500,500);

    space1= createSprite(250,250, 10, 10)
    space1.addImage(space1img)
    space1.velocityY=3
    space1.scale=2


    spaceShip= createSprite(250,400,10,10)
    spaceShip.addImage(ssimg)
    spaceShip.scale=0.3

    bulletGroup=new Group()
    alienGroup=new Group()

    
}

function draw(){
    background("black");

    console.log("minha")
    
    if(keyDown("RIGHT_ARROW")){
        spaceShip.x=spaceShip.x+5
    }
    
    if(keyDown("LEFT_ARROW")){
        spaceShip.x=spaceShip.x-5
    }

    if(space1.y>300){
    space1.y=200
    }
    
    spawnAlien()

    if(keyDown("ENTER")){
    bullet=createSprite(spaceShip.x, spaceShip.y, 5,20)
    bullet.velocityY=-4
    bullet.shapeColor="white"
    bulletGroup.add(bullet)
    }

 
   
    drawSprites()
    textSize(25)
    fill("white")
    text("score:",400,50)
}

function spawnAlien(){
    if(frameCount%80===0){
        alien=createSprite(Math.round(random(0,500)),0,10,10)
        alien.velocityY=3
        alien.addImage(alienimg)
        alien.scale=0.1
        alienGroup.add(alien)
    }

}



