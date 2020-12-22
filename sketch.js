
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper;
var ground;
var dustbinImage,d1,d2,d3;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,70);
	ground = new Ground(600,690,1200,10);
	d1 = new Dustbin(900,675,180,20);
	d2 = new Dustbin(820,600,20,130);
	d3 = new Dustbin(980,600,20,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  paper.display();
  ground.display();
	image(dustbinImage,827,534,146,150);
	keyPressed();
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-12});
	}
}

