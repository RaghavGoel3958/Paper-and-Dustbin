
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var worldvar ,paper,paperimage;

function preload(){
paperimage=loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	//var paper1=createSprite(300,300,200,200)
	

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70)
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,690);
    
	//paper1.addImage(paperimage)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

  drawSprites()
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
	}
}