
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

    bob1 = new Bob(250,400,80);
    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    
    bob2 = new Bob(330,400,80);
    rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);

    bob3 = new Bob(410,400,80);
    rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0);

    bob4 = new Bob(490,400,80);
    rope4 = new Rope(bob4.body,roof.body,-bobDiameter*2,0);

    bob5 = new Bob(570,400,80);
    rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);

    roof = new Roof(425,100,500,40);

    

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

  roof.display();

  drawSprites();
 
}



