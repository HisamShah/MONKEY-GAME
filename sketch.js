
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground , groundimg;
var survivalTime = 0;
var bg, bgimg;

function preload()
{
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  bgimg = loadImage("44102ea45f8d51a2338e36798dda2899 (2).jpg");
  
  bananaImage = loadImage("banana.png")
  
  obstacleImage = loadImage("obstacle.png")
 
}



function setup()
{
  
  createCanvas(600, 600);
  
  
  
  ground = createSprite(500,550,630,10)
  ground.velocityX = - 4;
  ground.scale = 0.6;
  ground.x = ground.width /2;
  
  bg = createSprite(300,300)
  bg.addImage(bgimg)
  bg.velocityX = - 4;
  bg.scale = 1.1;

  
  
  monkey = createSprite(100,450);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3;
  
  
 
  
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  
}


function draw()
{
  
  background("white");
  
  stroke("white")
  textSize  = 20;
  fill("white")
  text("Score: "+ score, 500,50);
  
   
  stroke("black")
  textSize  = 20;
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime :"+ survivalTime, 500,10);
  
  
  monkey.collide(ground);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if (bg.x < 130){
      bg.x = bg.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100)
    {
        monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8
    
  
    spawnobstacles();
    spawnbanana();
    drawSprites();
  
}
function spawnbanana()
{
  
  if(World.frameCount%80 === 0
    ){
    banana = createSprite(500,300)
    banana.scale = 0.2;
    banana.addImage(bananaImage)
    banana.y = Math.round(random(100,300))
    banana.velocityX = -8;
    
    //assign lifetime to the enemy          
    banana.setLifetime = 50;
    FoodGroup.add(banana)
  }
}
function  spawnobstacles()
{
  
  if(World.frameCount%300 === 0
    ){
    obstacle = createSprite(500,470)
    obstacle.scale = 0.4;
    obstacle.addImage(obstacleImage)
    
    obstacle.velocityX = -8
    
    //assign lifetime to the enemy          
    obstacle.setLifetime = 50;
    obstacleGroup.add(obstacle)
   
  }
}




