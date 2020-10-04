var b;
var e;
var level;
var eggCounter;
var score;
var delay;
var speed;

function setup(){
	createCanvas(800,500);
	b = new Basket();
	level  = 1
	speed = 5;
	eggCounter = 0;
	delay = 0;
	score = 0;
	eggs = [];
	generateNewBatch(level);

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
		if(getType().localeCompare("gem")){
			eggs[i] = new Egg(speed, "gem");
		}else if(getType().localeCompare("bomb")){
			eggs[i] = new Egg(speed, "bomb");
		}else{
			eggs[i] = new Egg(speed, "normal");
		}
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
	var rand = random(0, 10);
	if(rand <= 1.5){
		return "bomb";
	}else if (rand > 1.5 && rand < 2.5){
		return "gem";
	}else if(rand > 2.5) {
		return "normal";
	}
}

function collisionProtocol(){
	if(collision(eggs[eggCounter].x, eggs[eggCounter].y, b.x, b.y)){
		eggCounter++;
		score++;
	}else if(eggs[eggCounter].y > height){
		eggCounter++;
		noLoop();
		print(score);
	}
	if(eggCounter == level*5+5){
		newLevel();
		
	}
}
