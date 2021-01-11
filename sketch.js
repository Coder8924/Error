const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, 
block13, block14, block15, block16; 
var blk1, blk2, blk3, blk4, blk5, blk6, blk7, blk8, blk9;
var polygon,polygonImg;
var base1, base2;
var chain;
var ball;
var score = 0;

function preload(){
   polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1000,400);   
         
    engine = Engine.create();
    world = engine.world;
    
    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
   
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
   
    //top
    block16 = new Block(390,155,30,40);

    //set 2
    //level1
    blk1 = new Block(640, 175, 30, 40); 
    blk2 = new Block(670, 175, 30, 40); 
    blk3 = new Block(700, 175, 30, 40); 
    blk4 = new Block(730, 175, 30, 40); 
    blk5 = new Block(760, 175, 30, 40); 

    //level 2
    blk6 = new Block(670, 135, 30, 40); 
    blk7 = new Block(700, 135, 30, 40); 
    blk8 = new Block(730, 135, 30, 40); 

    //top
    blk9 = new Block(700, 95, 30, 40); 

    base1 = new Ground(390,300,250,10);

    base2 = new Ground(700,200,250,10);

    //polygon
    ball = Bodies.circle(100,180,20);
    World.add(world, ball);
    
    chain = new Polygon(this.ball,{x:100,y:200});

}

function draw(){

     background(0);

     Engine.update(engine);
    
     strokeWeight(2);
     stroke(1);

     fill(160,230,180);
     block1.display();  
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();

     fill("lightpink");
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();

     fill("turquoise");
     block13.display();
     block14.display();
     block15.display();
     
     fill("grey");
     block16.display();

     fill(160,230,180);
     blk1.display();
     blk2.display();
     blk3.display();
     blk4.display();
     blk5.display();

     fill("turquoise");
     blk6.display();
     blk7.display();
     blk8.display();
    
     fill("pink")
     blk9.display();
    
     base1.display();
     base2.display();

     imageMode(CENTER);
     image(polygonImg, ball.position.x, ball.position.y, 40,40);

     chain.display();

 }
 

function mouseDragged() {
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
  }

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if(keyCode===32) {
      chain.attach(ball.body);
  }
}
