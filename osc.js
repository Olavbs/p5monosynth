class Oscillator extends p5.Oscillator {
	constructor(x,y) {
		super();
		this.x = x;
		this.y = y;
		this.init();
	}
	init() {
		this.setType('sawtooth');
		this.frequency = 440;
		this.freq(this.frequency);
		this.amp(0);
		this.start();

		this.label = "VCO";
		this.octave = 0;
		this.tune = 0;
		this.fine = 0;
		this.volume = false;

		this.i = 0;

		this.octKnob = new Knob("Octave",this.x+30,this.y+50,-4,4,0,true);
		this.tuneKnob = new Knob("Tune",this.x+30,this.y+100,-12,12,0,true);
		this.fineKnob = new Knob("Fine",this.x+30,this.y+150,-100,100,0,false);
		this.sineSlider = new Slider("Sin",this.x+60,this.y+35,130,0,0.1,0.1,false);
	}
	getTune() {
		// for formula :  https://pages.mtu.edu/~suits/NoteFreqCalcs.html
		return pow( pow(2, 1/12), this.tuneKnob.value ) * pow( pow(2, 1/12), this.fineKnob.value/50);	
	}

	tick() {
		this.freq(this.calculateFrequency());	
		this.vol();
	}
	setFreq( freq ) {
		this.frequency = freq;	
		this.freq(this.calculateFrequency());
	}
	calculateFrequency() {
		this.octave = pow( pow(2, 1/12), this.octKnob.value*12 );
		this.tune = pow( pow(2, 1/12), this.tuneKnob.value );
		this.fine = pow( pow(2, 1/12), this.fineKnob.value/50 );
		return this.frequency * this.octave * this.tune * this.fine;
	}
	vol() {
		if ( this.volume ) {
		this.amp(this.sineSlider.value, 0.01 );
		} else { this.amp(0,0.01); }
	}
	setLabel( label ) {
		this.label = label;
	}
	drawPanel() {
		noFill();
		stroke(255);
		strokeWeight(1);
		rect(this.x,this.y,250,200);

		strokeWeight(0);
		fill(255);
		rect(this.x, this.y, 250, 20);
		fill(80,100,115);
		textAlign(CENTER);
		textSize(14);
		text(this.label, this.x + 125, this.y+16 );

		this.octKnob.draw();
		this.tuneKnob.draw();
		this.fineKnob.draw();

		this.sineSlider.draw();

	}
}
