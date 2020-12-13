
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paperObject,ground,side1,side2,side3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject= new Paper(100,200);

ground=createSprite(300,700,1000,10);
ground.shapeColor="red";
side1=createSprite(400,650,200,20);
	side1.shapeColor="red";
	side2=createSprite(474,590,20,100);
	side2.shapeColor="red";
	side3=createSprite(300,590,20,100);
	side3.shapeColor="red";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}

function keyPressed(){
if(keycode===UP_ARROW){

	Matter.body.applyFoce(paperObject.body,paperObject.body.position,{x:85,y85});
}


}



