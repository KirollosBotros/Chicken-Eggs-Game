function Egg(speed, type){
	this.diameter = 30;
	this.x = random(this.diameter/2, width-this.diameter/2);
	this.y = 0;
	this.speed = speed;
	this.type = type;

	this.show = function(){
		if(this.type == 0){
			fill(205, 127, 50);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}else if (this.type == 1){
			fill(192, 192, 192);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}else if(this.type == 2){
			fill(255, 233, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}else{
			fill(250, 0, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}
	}

	this.move = function(){
		this.y += this.speed;
	}
}