function Symbols() {
	this.init = function () {
		noFill();
		strokeWeight(1);
		stroke(255);
	}
	this.drawSinewave = function( x, y, width, height ) {
		this.init();
		arc(x + width / 4, y + height / 2, width / 2, height, PI, TWO_PI);
		arc(x + width / 4 * 3, y + height / 2, width / 2, height, TWO_PI, PI);
	
	}
	this.drawTriangle = function( x, y, width, height ) {
		this.init();
		line(x, y + height / 2, x + width / 4, y );
		line(x + width / 4, y, x + width / 4 * 3, y + height );
		line(x + width / 4 * 3, y + height, x + width, y + height / 2 );
	}
	this.drawSawtooth = function( x, y, width, height ) {
		this.init();
		line(x, y + height / 2, x + width / 2, y );
		line(x + width / 2, y, x + width / 2, y + height );
		line(x + width / 2, y + height, x + width, y + height / 2 );
	}
	this.drawSquarewave = function( x, y, width, height ) {
		this.init();
		line(x, y + height / 2, x, y );
		line(x, y, x + width / 2, y );
		line(x + width / 2, y, x + width / 2, y + height);
		line(x + width / 2, y + height, x + width, y + height );
		line(x + width, y + height, x + width, y +height / 2 );
	}
}
