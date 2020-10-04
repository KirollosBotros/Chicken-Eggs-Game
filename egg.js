function Egg(speed, type){
	this.diameter = 30;
	this.x = random(this.diameter/2, width-this.diameter/2);
	this.y = 0;
	this.speed = speed;
	this.type = type;

	this.show = function(){
		if(this.type.localeCompare("bomb")){
			fill(250, 0, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}else if (this.type.localeCompare("gem")){
			fill(0, 250, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}else{
			fill(255);
			ellipse(this.x, this.y, this.diameter, this.diameter + 10);
		}
	}

	this.move = function(){
		this.y += this.speed;
	}
}