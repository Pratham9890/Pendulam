const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(100,100,50,50);

    log6 = new Log(215,125,80,PI/2);
    chain = new ChainClass(bird.body,log6.body);
}

function draw(){
    background("black");
    Engine.update(engine);
    log6.display();

    bird.display();
    chain.display();
    if(keyCode=== 32 ) {
        bird.body.position.x = mouseX;
        bird.body.position.y = mouseY;
        }
}
