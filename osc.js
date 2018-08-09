class Oscillator extends p5.Oscillator {
	constructor() {
		super();
		this.init();
	}
	init() {
		this.setType('sawtooth');
		this.freq(440);
		this.amp(0);
		this.start();

		this.label = "VCO";
		this.currentFreq = null;
		this.targetFreq = null;
		this.portamento = 6;
		this.volume = 0;

		this.i = 0;

		this.shapeKnob = new Knob(0,3);
	}
	tick() {
		if( abs(this.currentFreq - this.targetFreq) < this.portamento ) {
			this.currentFreq = this.targetFreq;
		} else if( this.currentFreq < this.targetFreq ) {
			this.currentFreq += this.portamento;
		} else if( this.currentFreq > this.targetFreq ) {
			this.currentFreq -= this.portamento;
		}
		this.freq( this.currentFreq );	
		this.amp(this.volume, 0.01);

	}
	setFreq( freq ) {
		while( this.i < 10) {
			this.i++;
			console.log("hey");
			this.targetFreq = freq;
		}
		this.i = 0;

	}
	vol( vol ) {
		this.volume = vol;
	}
	setLabel( label ) {
		this.label = label;
	}
	drawPanel(x, y) {
		noFill();
		stroke(150);
		strokeWeight(2);
		rect(x,y,200,150);

		strokeWeight(0);
		textSize(14);
		fill(150);
		text(this.label, x + 4, y + 16 );

		this.shapeKnob.draw( x + 30, y + 45 );
	}
}
