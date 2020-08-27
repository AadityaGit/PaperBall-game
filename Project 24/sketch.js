
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectB=createSprite(370,650,250,20);
	rect1=createSprite(250,550,20,200);
	rect1=createSprite(500,550,20,200);

	floor = new Ground(200, 200, 1200, 20);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  floor.display();
  drawSprites();
 
}



