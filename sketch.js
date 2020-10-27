const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400, 680, 300,20);
	box2 = new Box(250, 630, 20,100);
	box3 = new Box(550, 630, 20,100);
	ball = new Ball(100,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85})
	}
}



