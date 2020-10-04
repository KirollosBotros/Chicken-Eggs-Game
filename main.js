var b;
var e;
var level;
var levelScores = [];
var eggCounter;
var score;
var totalScore;
var delay;
var speed;
var pause;

function setup(){
	createCanvas(1200,700);
	b = new Basket();
	level  = 1
	pause = false;
	speed = 5;
	eggCounter = 0;
	delay = 0;
	score = 0;
	totalScore = 0;
	eggs = [];
	generateNewBatch(level);
	preload();
}

function draw(){
	if(mouseIsPressed) noLoop()

	
	background(150);
	//image(chicken, 0, 0);
	frameHandler();

	eggs[eggCounter].show();
	eggs[eggCounter].move();
	b.show();
	b.move(pause);
	if(collision(eggs[eggCounter].x, eggs[eggCounter].y, b.x, b.y)){
		collisionProtocol();
		print(score);
	}else if(eggs[eggCounter].y > height){
		if(eggs[eggCounter].type != 3){
			score--;
			print(score);
		}
		eggCounter++;
	}

	if(eggCounter == level * 5 + 5){
		newLevel();
	}
	if(score < 0){
		noLoop();
	}

	
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
	//print("Level: " + level + " complete. Click to Advance to " + (level + 1));
	levelScores[level - 1] = score;
	score = 0;
	totalScore += levelScores[level-1];
	//print("Level Score: " + levelScores[level-1]);
	//print("Total Score: " + totalScore)
	level++;
	generateNewBatch(level);
	delay = 3;
}

function frameHandler(){
	if(delay == 0){
		frameRate(60);
		pause = false;
		eggs[eggCounter].speed = speed;
	}else{
		textSize(32);
		(textAlign(CENTER));
		t = "Level " + (level - 1).toString() + " Complete! New Level in: "  + delay.toString();
		text(t, 570, height/2 - 50);
		frameRate(1);
		pause = true;
		eggs[eggCounter].speed = 0;
		delay--;
	}
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
	if(eggs[eggCounter].type == 0){
		score ++;
		eggCounter++;
	}else if(eggs[eggCounter].type == 1){
		score += 2;
		eggCounter++;
	}else if(eggs[eggCounter].type == 2){
		score += 5;
		eggCounter++;
	}else if(eggs[eggCounter].type == 3 && score == 0){
		noLoop();
	}else{
		score = 0;
		eggCounter++;
	}
}

function preload(){
	chicken = loadImage('images/chicken.png');
}
