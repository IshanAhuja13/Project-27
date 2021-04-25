
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(100, 200, 100);
	bob2 = new Bob(50, 200, 100);
	bob3 = new Bob(0, 200, 100); 
	bob4 = new Bob(150, 200, 100);
	bob5 = new Bob(200, 200, 100);

	roof1 = new roof(400, 200, 600, 20);
	
	rope1 = new rope(bob1.body, roof1.body, -bob1.diameter * 2, 0);
	rope2 = new rope(bob2.body, roof1.body, -bob1.diameter *2 , 0);
	rope3 = new rope(bob3.body, roof1.body, -bob1.diameter * 2, 0);
	rope4 = new rope(bob4.body, roof1.body, -bob1.diameter * 2, 0);
	rope5 = new rope(bob5.body, roof1.body, -bob1.diameter * 2, 0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   
  roof1.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === "LEFT_ARROW"){
	  Matter.Body.applyForce(bob5, 200);
	}
  }



