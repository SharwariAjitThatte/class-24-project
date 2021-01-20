
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,hammer1;
var stone1,rubber1;
var sand1,sand2,snad3,sand4,sand5,sand6;
var iron;

function setup() {

	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	  
   hammer1 = new Hammer(300,10,60,60);
   stone1 = new Stone(800,40,50,50);
   ground1 = new Ground(600,390,1200,20);
   rubber1 = new rubber(100,200,80,80);
   sand1 = new Sand(150,200,10);
   sand2= new Sand(200,200,10);
   sand3 = new Sand(300,200,10);
   sand4 = new Sand(250,200,10);
   sand5 = new Sand(350,200,10);
   sand6 = new Sand(400,200,10);
   iron = new Iron(600,30,40,40);
  
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer1.display();
  ground1.display(); 
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  
}