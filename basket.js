function Basket(){
	this.w = 100;
	this.h = 100;
	this.x = width/2 - this.w/2;
	this.y = height - this.h;

	this.show = function(){
		fill(50);
		rect(this.x, this.y, this.w, this.h);
	}
	this.move = function(){
		this.x = mouseX - this.w/2;
		this.x = constrain(this.x, 0, width - this.w);
	}
}