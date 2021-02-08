const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function setup() {
	createCanvas(1500, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,60);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1100,600,250,20);
	dustbin2=new Dustbin(1225,510,20,205);
	dustbin3=new Dustbin(975,510,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:145,y:-65});

  
	}
}