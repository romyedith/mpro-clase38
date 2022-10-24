const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg_img, food, rabbit;
//preload sirve para precargar al inicio imagenes, animaciones, sonidos, música
function preload(){
  bg_img = loadImage("background.png");  
  food   = loadImage("melon.png");
  rabbit = loadImage("Rabbit-01.png");
}
//configurar el juego
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  //Establecer el modo de centrado para que el origen quede en el centro del canvas
  imageMode(CENTER);

}

function draw() 
{
  background(51);
  image(bg_img, width/2, height/2, 500,700);
  rope.show();
  //ellipse(fruit.position.x,fruit.position.y,30,30);
  //image(food, fruit.postion.x, fruit.position.y, 60, 60);
  image(food,fruit.position.x, fruit.position.y, 60, 60);
  Engine.update(engine);
  ground.show();

 
   
}
