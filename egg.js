function Egg(speed, type){
	this.diameter = 40;
	this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	this.r = random(this.arr);
	this.speed = speed;
	this.type = type;
	if(type == 0 || type == 1){
		this.x = 7.5 * this.r + (125 * (this.r - 1)) + (125/2);
		this.y = 190;
	}else{
		this. x = 7.5 * this.r + (125 * (this.r - 1)) + 28;
		this.y = 155;
	}

	this.show = function(pause){
		if(!pause){
			if(this.type == 0){
				fill(205, 127, 50);
				ellipse(this.x, this.y, this.diameter, this.diameter + 10);
			}else if (this.type == 1){
				fill(192, 192, 192);
				ellipse(this.x, this.y, this.diameter, this.diameter + 10);
			}else if(this.type == 2){
				image(gol, this.x, this.y);
			}else{
				image(bom, this.x, this.y);
			}
		}
	}

	this.move = function(){
		this.y += this.speed;
	}
}