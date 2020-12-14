var b;
var e;
var c;
var bran;
var level;
var eggCounter;
var score;
var totalScore;
var delay;
var speed;
var pause;
var defeat;

function setup(){
	var WIDTH = 1200;
	var HEIGHT = 700;
	let can = createCanvas(WIDTH,HEIGHT);
	can.position(window.innerWidth/2-WIDTH/2, window.innerHeight/2-HEIGHT/2-50);
	b = new Basket();
	c = [];
	bran = new Branch();
	initializeChickens();
	initial();
	preload();
}

function draw(){
	background(back);

	if(score < 0){
		end();
	}

	displayInfo();
	frameHandler();

	b.show();
	b.move(pause);
	eggs[eggCounter].move();
	showChickens();
	
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
}

function mousePressed(){
	restart();
}

function collision(eggX, eggY, basketX, basketY){
	if(eggs[eggCounter].type == 2 || eggs[eggCounter].type == 3){
		if((eggX > basketX && eggX < basketX + b.w) && (eggY > height - 110)){
			return true;
		}else{
			return false;
		}
	}else{
		if((eggX > basketX && eggX < basketX + b.w) && (eggY > height - 80)){
			return true;
		}else{
			return false;
		}
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
	score = 0;
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
		t = "Level " + (level - 1).toString() + " Complete!\nLevel " + (level) + " Starts in:";
		tWidth = textWidth();
		text(t, width/2, height/2 - 145);
		fill(170,0,0);
		textSize(40);
		text(delay, width/2, height/2 - 65);
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
		totalScore++;
		eggCounter++;
	}else if(eggs[eggCounter].type == 1){
		score += 2;
		totalScore += 2;
		eggCounter++;
	}else if(eggs[eggCounter].type == 2){
		score += 5;
		totalScore += 5;
		eggCounter++;
	}else if(eggs[eggCounter].type == 3 && score == 0){
		score--;
	}else{
		score = 0;
		eggCounter++;
	}
}

function preload(){
	chicken = loadImage('images/chicken.png');
	back = loadImage('images/background.png');
	bas = loadImage('images/bas.png');
	bom = loadImage('images/bomb.png');
	gol = loadImage('images/golden-egg.png');
}

function end(){
	print(totalScore);
	fill(0);
	gameOver = "Level Reached: " + level + "\nTotal Score: " + totalScore + "\nClick to Play Again";
	textSize(60);
	textAlign(CENTER, CENTER);
	text("Game Over\n", width/2, height/2 - 135);
	textSize(32);
	text(gameOver, width/2, height/2 - 80);
	defeat = true;
	noLoop();
}

function restart(){
	if(defeat){
		initial();
		defeat = false;
		loop();
	}
}

function initial(){
	level  = 1
	pause = false;
	eggCounter = 0;
	delay = 0;
	score = 0;
	eggs = [];
	defeat = false;
	totalScore = 0;
	generateNewBatch(level);
}

function displayInfo(){
	if(!defeat){
		textSize(32);
		fill(0);
		levelText = "Level: " + level.toString();
		levelScoreText = "Level Score: " + score.toString();
		lstWidth = textWidth();
		TotalScoreText = "Total Score: " + totalScore.toString();
		tstWidth = textWidth();	
		textAlign(LEFT, TOP);
		text(levelText, 10, 10);
		text(levelScoreText, width/2 - lstWidth/2 - 40, 10);
		text(TotalScoreText, width - tstWidth - 85, 10)
	}
}

function initializeChickens(){
	for(var i = 0; i < 9; i++){
		c[i] = new Chicken(7.5 * (i + 1) + (125 * i), false);
	}
}

function showChickens(){
	if(!defeat){
		bran.show(pause);
		eggs[eggCounter].show(pause);
		for(var i = 0; i < 9; i++){
			c[i].show(pause);
		}
	}
}