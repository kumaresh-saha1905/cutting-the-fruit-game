var s,s1;
var PLAY=1;
var END=0;
var gameState=PLAY;
var f1,f2,f3,f4;
var fruitgroup;
var enemygroup;
var m,m1;
var score;
var gameover,g;

function preload(){
  s1=loadImage("sword.png");                           f1=loadImage("fruit1.png");
  f2=loadImage("fruit2.png");
  f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
 m1=loadAnimation("alien1.png","alien2.png");
  g=loadImage("gameover.png");

}
function setup(){
  createCanvas(600,600);
  s=createSprite(40,200,20,20);
  s.addImage(s1);
  s.scale=0.7;

  fruitgroup=new Group();
  enemygroup=new Group();
  
  score=0;
  
}
function draw(){
  background("lightblue");
  fill("green");
  text("score:"+score,400,50);
  fruits();
  enemies();
  if(gameState===PLAY){
    s.y=mouseY;
    s.x=mouseX;
    
    if(s.isTouching(fruitgroup)){
      fruitgroup.destroyEach();
      score=score+2;
    }
       
    if(s.isTouching(enemygroup)){
      gameState=END;
    }
  }else if (gameState===END){
       s.addImage(g);
    s.x=300;
     s.y=300;
      s.velocityX=0;
      s.velocityY=0;
    fruitgroup.destroyEach();
    enemygroup.destroyEach();
    fill("blue");
    text("press m to start the game",100,50);
    } 
if(keyDown("m")&& gameState===END){
  gameState=PLAY;
  score=0;
  s.addImage(s1);
  s.scale=0.7;
}
    drawSprites();
  
  }
  
 function fruits(){
    if(frameCount % 80===0){
      fruit=createSprite(400,200,20,20);
      fruit.scale=0.2;
     r=Math.round(random(1,4)) ;
      if(r===1){
        fruit.addImage(f1);
      }else if(r===2){
        fruit.addImage(f2);
      }else if(r==3){
        fruit.addImage(f3);
      }else if(r===4){
        fruit.addImage(f4);
      }
      fruit.y=Math.round(random(50,340));
      fruit.velocityX=-7;
      fruit.setLifetime=100;
      fruitgroup.add(fruit);
      
    }
 }
function enemies(){
  if(frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",m1);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    enemygroup.add(monster);
    
  }
  
}