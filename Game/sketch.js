const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var player;
var engine, world;
var player, player_img;


var backgroundImg;

function preload(){

  ship = new Ship (200, 200);

  backgroundImg = loadImage("space.png");
  
  player = createSprite(900, 700, 30, 30);
  
  player.addImage("player1", player_img);
  player_img = loadImage("ship.png");
}

function draw() {
  //background(backgroundImg);
  canvas = createCanvas(displayWidth + 175, displayHeight-30);

  background(backgroundImg); 
  drawSprites();    
  player.addImage(player_img)
}

function keyPressed() { 
  if(keyCode === 37){
    player.velocityX = -5;
  } else{
    player.velocityX = 0;
  }
  if(keyCode === 39){
    player.velocity.x = 5;
    pressed = true;
  }
  
  if(pressed = false){
    player.velocity.x = 0;
    player.velocity.y = 0;
  }

  if(keyCode === 32){
    bullet = createSprite(player.x, player.y, 10, 10);
    bullet.velocityY = -10
    
  }


}