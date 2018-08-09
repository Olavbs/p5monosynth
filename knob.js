function Knob( min, max, def ) {
	this.minVal = min;
	this.maxVal = max;
	this.value = def;

	this.draw = function( x, y ) {
		noFill();
		stroke(255);
		strokeWeight(2);
		ellipse( x, y, 25, 25 );

	}
}
