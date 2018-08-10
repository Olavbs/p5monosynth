function Slider( label, x, y, height, min, max, def, stepped ) {
	this.label = label;
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = 15;
	this.minVal = min;
	this.maxVal = max;
	this.defaultValue = def;
	this.isStepped = stepped;
	this.value = this.defaultValue;


	this.sliderPos = {
		min: this.height,
		max: 0,
		current: 0
	}
	this.symbol = new Symbols();
	this.draw = function() {
		this.drag();
		this.sliderPos.current = map(this.value, this.minVal, this.maxVal, this.sliderPos.min, this.sliderPos.max, true);
	
		strokeWeight(1);
		stroke(100,120,145);
		for ( var i = 0; i < this.height; i += 10 ) {
			if ( i != 0 ) {
				line(this.x + floor(this.width / 4), this.y + i, this.x + floor(this.width / 4 * 3), this.y + i);
			}
		}
		stroke(50,70,80);
		line(this.x+floor(this.width/2),this.y,this.x+floor(this.width/2),this.y+this.height);
		strokeWeight(0);
		fill(250);
		rect(this.x, this.y + this.sliderPos.current - 4,this.width,9);

		if ( typeof this.label === "string" ) {
			strokeWeight(0);
			fill(255);
			textAlign(CENTER);
			text(this.label, this.x + floor(this.width / 2), this.y + this.height + 20);
		} else if ( this.label === 0 ) {
			// draw sine
			this.symbol.drawSinewave(this.x, this.y + this.height + 10, 15, 10);
		} else if ( this.label === 1 ) {
			// draw triangle
			this.symbol.drawTriangle(this.x, this.y + this.height + 10, 15, 10);
		} else if ( this.label === 2 ) {
			// draw sawtooth 
			this.symbol.drawSawtooth(this.x, this.y + this.height + 10, 15, 10);
		} else if ( this.label === 3 ) {
			// draw square 
			this.symbol.drawSquarewave(this.x, this.y + this.height + 10, 15, 10);
		} else if ( this.label === 4 ) {
			// draw noise
		}
	}
	this.dragging = false;
	this.mousePressed = false;
	this.tmx;
	this.tmy;
	this.tkv;
	this.tv;
	this.drag = function() {
		if ( mouseIsPressed && !this.mousePressed ) {
			this.mousePressed = true;
			this.tmx = mouseX;
			this.tmy = mouseY;
//			this.tkv = this.value;
		}
		if ( mouseIsPressed && 
			this.tmx >= this.x && this.tmx <= this.x + this.width &&
			this.tmy >= this.y - 4 && this.tmy <= this.y + this.height + 4) {
			if ( keyIsDown(18) ) {
				this.value = this.defaultValue;
			} else {
				this.dragging = true;
			}
		} else if ( !mouseIsPressed ) {
			this.dragging = false;
			this.mousePressed = false;
		}
		if ( this.dragging ) {
			this.tv = map(mouseY, this.sliderPos.min + this.y, this.sliderPos.max + this.y, this.minVal, this.maxVal );	
			if ( this.tv <= this.minVal ) { 
				this.value = this.minVal;
			} else if ( this.tv >= this.maxVal ) {
				this.value = this.maxVal;
			} else {
				this.value = this.tv;
			}
			if ( this.isStepped ) {
				this.value = floor(this.value);
			}
		}
	}

}
