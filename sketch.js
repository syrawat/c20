var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite (200,200,50,80);
  movingRect = createSprite (300,100,80,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  
 
}

function draw() {
  background(0);  

 movingRect.x = mouseX;
 movingRect.y = mouseY;

 if( movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
  &&  fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
 }else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }

  drawSprites();
}