const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowflake, s1, s2, s3, s4, s5, s6;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;
  
  backgroundImg = loadImage("2735406.jpg");
  snowflake = new Snow(200,20,30,30);
  var x = Math.round(random(30,370));
  s1 = new Snow(x,0,30,30);
  x = Math.round(random(30,370));
  s2 = new Snow(x,0,30,30);
  x = Math.round(random(30,370));
  s3 = new Snow(x,0,30,30);
}

function draw() {
  background(backgroundImg)
  //drawSprites();
  Engine.update(engine);
  snowflake.display();
  s1.display();
  s2.display();
  s3.display();

}

