const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world,rainDrop;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  rainDrop = new rain(5, 20);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  rainDrop.display();
 
  //drawSprites();
}