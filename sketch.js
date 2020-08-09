const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg,bgImg;
var ground;
var engine,world;
var car;
var bg;

var b;
function preload() {
  bgImg = loadImage("images/city.png");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

   createCanvas(displayWidth,displayHeight);

   bg = new BG(displayWidth/2, displayHeight-470, displayWidth, displayHeight);
  // bg = createSprite(400, 200, 50, 50);
  // bg.addImage("bg",bgImg);
  // bg.scale = 1.5;
  // console.log(bg.width);

  // bg.x = bg.width/2;
  // bg.velocityX = -3;

  ground = new Ground(displayWidth/2,displayHeight-120,displayWidth,30);

  car = new Box(100,displayHeight-150,150,100);
  console.log(car);

}

function draw() {
  background(255,255,255);  
  // if(bg.x<100) {
  //   bg.x = bg.width/2;
  // }
  bg.display();
  ground.display();
  car.display();

  // bg.depth = 1;

  if(mousePressedOver(bg)) {
    console.log("HELLOOOOOOOOOOOO");
  }
  drawSprites();
}