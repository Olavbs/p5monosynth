function Knob( label, x, y, min, max, def, stepped ) {
	this.label = label;
	this.x = x;
	this.y = y;
	this.minVal = min;
	this.maxVal = max;
	this.defaultValue = def;
	this.isStepped = stepped;
	this.value = this.defaultValue;


	this.knobPos = {
		min: -2.5,
		max: 2.5,
		current: 0
	}

	this.radius = 12;

	this.draw = function() {
		this.drag();
		this.knobPos.current = map(this.value, this.minVal, this.maxVal, this.knobPos.min, this.knobPos.max, true);
		
		push();
		translate( this.x, this.y );
		rotate(this.knobPos.current);
		noFill();
		stroke(255);
		strokeWeight(2);
		ellipse( 0, 0, this.radius*2, this.radius*2 );
		line( 0, -5, 0, 2-this.radius );
		pop();

		strokeWeight(0);
		fill(255);
		textAlign(CENTER);
		if ( this.label === null ) {
			text(floor(this.value), x, y + this.radius + 15);
		} else {
			if ( this.dragging ) {
				text(floor(this.value), x, y + this.radius + 15);
			} else { 
				text(this.label, x, y + this.radius + 15);
			}
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
			this.tkv = this.value;
		}
		if ( mouseIsPressed && dist(this.tmx, this.tmy, this.x, this.y) < this.radius ) {
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
			this.tv = this.tkv + map(mouseY - this.tmy, 100, -100, this.minVal, this.maxVal );	
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
