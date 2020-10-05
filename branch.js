function Branch(){
	this.x = 0;
	this.y = 200;
	this.w = 1200;
	this.h = 20;

	this.show = function(pause){
		if(!pause){
			fill(165,42,42);
			rect(this.x, this.y, this. w, this.h);
		}
	}
}