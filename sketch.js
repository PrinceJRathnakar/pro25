
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
   

    mango1 = new Mango(700,420);
    mango2 = new Mango(720,450);
    mango3 = new Mango(710, 470);
    mango4 = new Mango(670,460);
    mango4 = new Mango(690,460);
    tree = new Tree(700,550,170,300);
    boy = new Boy(220,650,170,170);
    
    Stone = new stone(170,600,25);
    

 
    sling = new Sling(Stone.body,{x:170, y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    
  tree.display();
  mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    boy.display();

    
    Stone.display();
    

    ground.display();
    sling.display();
   
    
  
  drawSprites();
 
}
gameState="onsling"
function mouseDragged(){
  if(gameState!="launched")
   { Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY})};
}


function mouseReleased(){
  
  Matter.Body.setStatic(Stone.body,false)
    sling.fly();
    gameState="launched"
}
function keyPressed()
{
if (keyCode==32){
    sling.attach(Stone.body)
}
}
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
  stoneBodyPosition=lstone.body.position.x,stoneBodyPosition=lstone.body.position.y)
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false)
}

}


