class Oscillator {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.init();
	}
	init() {
//		this.setType('sawtooth');
		this.frequency = 440;
//		this.freq(this.frequency);
//		this.amp(0);
//		this.start();

		this.label = "VCO";
		this.octave = 0;
		this.tune = 0;
		this.fine = 0;
		this.volume = false;

		this.sin = new p5.SinOsc();
		this.tri = new p5.TriOsc();
		this.saw = new p5.SawOsc();
		this.sqr = new p5.SqrOsc();
		this.nos = new p5.Noise('white');

		this.sin.start();
		this.tri.start();
		this.saw.start();
		this.sqr.start();
		this.nos.start();

		this.sin.amp(0);
		this.tri.amp(0);
		this.saw.amp(0);
		this.sqr.amp(0);
		this.nos.amp(0);

		this.i = 0;

		this.octKnob = new Knob("Octave",this.x+30,this.y+50,-4,4,0,true);
		this.tuneKnob = new Knob("Tune",this.x+30,this.y+100,-12,12,0,true);
		this.fineKnob = new Knob("Fine",this.x+30,this.y+150,-100,100,0,false);
		this.sinSlider = new Slider(0,this.x+60,this.y+40,120,0,0.1,0,false);
		this.triSlider = new Slider(1,this.x+90,this.y+40,120,0,0.1,0,false);
		this.sawSlider = new Slider(2,this.x+120,this.y+40,120,0,0.1,0,false);
		this.sqrSlider = new Slider(3,this.x+150,this.y+40,120,0,0.1,0,false);
		this.nosSlider = new Slider("S/H",this.x+180,this.y+40,120,0,0.1,0,false);
	}
	getTune() {
		// for formula :  https://pages.mtu.edu/~suits/NoteFreqCalcs.html
		return pow( pow(2, 1/12), this.tuneKnob.value ) * pow( pow(2, 1/12), this.fineKnob.value/50);	
	}

	tick() {
		this.sin.freq(this.calculateFrequency());
		this.tri.freq(this.calculateFrequency());
		this.saw.freq(this.calculateFrequency());
		this.sqr.freq(this.calculateFrequency());
		this.vol();
	}
	setFreq( freq ) {
		this.frequency = freq;	
		this.sin.freq(this.calculateFrequency());
		this.tri.freq(this.calculateFrequency());
		this.saw.freq(this.calculateFrequency());
		this.sqr.freq(this.calculateFrequency());
	}
	calculateFrequency() {
		this.octave = pow( pow(2, 1/12), this.octKnob.value*12 );
		this.tune = pow( pow(2, 1/12), this.tuneKnob.value );
		this.fine = pow( pow(2, 1/12), this.fineKnob.value/50 );
		return this.frequency * this.octave * this.tune * this.fine;
	}
	vol() {
		if ( this.volume ) {
		this.sin.amp(this.sinSlider.value, 0.01 );
		this.tri.amp(this.triSlider.value, 0.01 );
		this.saw.amp(this.sawSlider.value, 0.01 );
		this.sqr.amp(this.sqrSlider.value, 0.01 );
		this.nos.amp(this.nosSlider.value, 0.01 );
		} else { 
		this.sin.amp(0,0.01); 
		this.tri.amp(0,0.01); 
		this.saw.amp(0,0.01); 
		this.sqr.amp(0,0.01); 
		this.nos.amp(0,0.01); 
		}
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

		this.sinSlider.draw();
		this.triSlider.draw();
		this.sawSlider.draw();
		this.sqrSlider.draw();
		this.nosSlider.draw();

	}
}
