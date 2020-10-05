function Chicken(x){
	this.x = x;
	this.y = 50;

	this.show = function(pause){
		if(!pause){
			image(chicken, this.x, this.y);
		}
	}

}