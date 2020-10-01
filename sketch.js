
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground 
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 ball1=new Paper(10,200,25)
 ball2=new Paper(200,200,25)
 ball3=new Paper(250,200,25)
 ball4=new Paper(300,200,25)
 ball5=new Paper(350,200,25)
	Engine.run(engine);
  ground=new Ground(200,50,800,30)
  chain1 = new Chain(ball1.body,{
	x:150,y:50
});
chain2 = new Chain(ball2.body,{
	x:200,y:50
});

chain3 = new Chain(ball3.body,{
	x:250,y:50
});
chain4 = new Chain(ball4.body,{
	x:300,y:50
});
chain5 = new Chain(ball5.body,{
	x:350,y:50
});
}


function draw() {
	background(0);
	push();
  rectMode(CENTER);
  ground.display();
  pop();
  ball1.display();
  chain1.display();
  chain2.display();
  ball2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
}



