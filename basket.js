function Basket(){
	this.w = 159;
	this.h = 178;
	this.x = width/2 - this.w/2;
	this.y = height - this.h;

	this.show = function(){
		image(bas, this.x, this.y);
	}

	this.move = function(pause){
		if(!pause){
			this.x = mouseX - this.w/2;
			this.x = constrain(this.x, 0, width - this.w);
		}
	}
}