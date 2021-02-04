var fixedRect, movingRect, fixedRect2, movingRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 90, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,760,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.velocityY=3;
  movingRect.velocityY=-3;
  fixedRect2 = createSprite(1100, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  movingRect2 = createSprite(100,400,80,30);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;
  fixedRect2.velocityX=-3;
  movingRect2.velocityX=3;
 
  

  
  

}

function draw() {
 background(0,0,0); 
 
 

 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      fixedRect.velocityY=-3;
  movingRect.velocityY=3;
  
  
}
if(movingRect2.x - fixedRect2.x < fixedRect2.width/2 + movingRect2.width/2
  && fixedRect2.x - movingRect2.x < fixedRect2.width/2 + movingRect2.width/2
   ){fixedRect2.velocityX=3;
    movingRect2.velocityX=-3;}

  drawSprites();
}