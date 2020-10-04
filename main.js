var b;

function setup(){
	createCanvas(800,500);
	b = new Basket()
}

function draw(){
	background(150);
	b.show();
	b.move();
}