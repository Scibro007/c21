var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  blah1=createSprite(349,46,78,90);
  blah2=createSprite(573,44,78,99);
}

function draw() {
  background("green");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (isTouching(movingrect,blah2)){
    movingrect.shapeColor="red";
    blah2.shapeColor="red";
  }

  else{
    movingrect.shapeColor="blue";
    blah1.shapeColor="blue";
    blah2.shapeColor="blue";
  }
  drawSprites();
}
