var b;
var e;
var level;
var eggCounter;
var score;
var delay;
var speed;

function setup(){
	createCanvas(1000,600);
	b = new Basket();
	level  = 1
	speed = 5;
	eggCounter = 0;
	delay = 0;
	score = 0;
	eggs = [];
	generateNewBatch(level);
	preload();

}

function draw(){
	if(mouseIsPressed) noLoop()

	if(delay == 0){
		frameRate(60);
		eggs[eggCounter].speed = speed;
	}else{
		frameRate(1);
		eggs[eggCounter].speed = 0;
		delay--;
	}
		
	background(150);
	image(chicken, 0, 0);

	eggs[eggCounter].show();
	eggs[eggCounter].move();
	b.show();
	b.move();
	collisionProtocol();
	
}


function collision(eggX, eggY, basketX, basketY){
	if((eggX > basketX && eggX < basketX + b.w) && (eggY > height - b.h)){
		return true;
	}else{
		return false;
	}
}

function generateNewBatch(level){
	for(var i = 0; i < level*5+5; i++){
		speed = (level * 3 + 2);
			eggs[i] = new Egg(speed, getType());
	}
	eggCounter = 0;
}

function newLevel(){
	print("Level: " + level + " complete. Click to Advance to " + (level + 1));
	level++;
	generateNewBatch(level);
	delay = 3;
}

function getType(){
	var rand = random(10);
	if(rand >= 5){
		return 0;
	}else if (rand >= 3 && rand < 5){
		return 1;
	}else if(rand >= 2 && rand < 3){
		return 2;
	}else{
		return 3;
	}
}

function collisionProtocol(){
	if(collision(eggs[eggCounter].x, eggs[eggCounter].y, b.x, b.y)){
		eggCounter++;
		score++;
	}else if(eggs[eggCounter].y > height){
		eggCounter++;
		//noLoop();
		print(score);
	}
	if(eggCounter == level*5+5){
		newLevel();
		
	}
}

function preload(){
	chicken = loadImage('images/chicken.png');
}
