var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//var log1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//var pos =this.helicopterSprite.position;
	//pos.x=mouseX
	//pos.y=mouseY

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor=color("green");

	log1Sprite=createSprite(400,650,300,20);
	log1Sprite.shapeColor=color("red");
	
	log2Sprite=createSprite(260,575,20,150);
	log2Sprite.shapeColor=color("red");

	log3Sprite=createSprite(540,575,20,150);
	log3Sprite.shapeColor=color("red");

	log4Sprite=createSprite(310,500,120,20);
	log4Sprite.shapeColor=color("red");

	log5Sprite=createSprite(490,500,120,20);
	log5Sprite.shapeColor=color("red");

   //log1=new Log(400,640,200,20)
   //log2=new Log(200,530,20,200)
   //log3=new Log(600,530,20,200)
   
   engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:.6, isStatic:true});
	World.add(world, packageBody);
	
    log1= Bodies.rectangle(400,650,400,20 , {isStatic:true} );
	 World.add(world, log1);

	 log2= Bodies.rectangle(260,575,20,150 , {isStatic:true} );
	 World.add(world, log2);

     log3= Bodies.rectangle(540,575,20,150 , {isStatic:true} );
	 World.add(world, log3);

	 log4= Bodies.rectangle(310,500,120,20, {isStatic:true} );
	 World.add(world, log4);

     log5= Bodies.rectangle(490,500,120,20 , {isStatic:true} );
	 World.add(world, log5);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("indigo");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //log1.display();
  //log2.display();
  //log3.display();
 
  drawSprites();
  }

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



