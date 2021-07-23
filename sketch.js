var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

  ghost = createSprite(300,100,50,50)
  ghost.addImage("GHOST",ghostImg)
ghost.scale = 0.3


}

function draw() {
  background(200);
  
 
    if (gameState==="play") {
      if (tower.y>400) {
        tower.y = 300
      }

    
if (keyDown("left_arrow")) {
  ghost.x = ghost.x -2
}
if (keyDown("right_arrow")) {
  ghost.x = ghost.x +2
}
if (keyDown("space")) {
  ghost.velocityY = -3
}
//spookySound.play()
ghost.velocityY = ghost.velocityY+0.8
//climbersGroup.collide(ghost)
if (climbersGroup.isTouching(ghost)) {
  ghost.velocityY = 0
}
SpawnDoors();
    if (invisibleBlockGroup.isTouching(ghost) || ghost.y>600){
      gameState = "end"  
     // ghost.destroy()
    }
drawSprites();
    }
    if (gameState==="end") {
     textSize(40)
      text("GAME OVER",300,300)

    }

}
  
function SpawnDoors() {
  if (frameCount%100===0) {
    door = createSprite(Math.round(random(150,500)),0)
    climber= createSprite(door.x,60)
 door.addImage("Door",doorImg)
 climber.addImage("climber",climberImg)
 door.velocityY = 4
 door.lifetime = 800
 doorsGroup.add(door)
 climber.velocityY = 4
 climber.lifetime = 800
 climbersGroup.add(climber)
ghost.depth = door.depth
ghost.depth +=1
invisibleBlock = createSprite(door.x,65)
 invisibleBlock.width = climber.width
invisibleBlock.height = 2
invisibleBlock.velocityY = 4
invisibleBlock.lifetime = 800 
invisibleBlockGroup.add(invisibleBlock)
}
}

























