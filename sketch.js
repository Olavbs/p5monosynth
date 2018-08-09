var frame = {
	width: 800,
	height: 660
}
var keyboard;
var ffreq;
var osc1;
var osc2;
var osc3;

function setup() {
	createCanvas(frame.width, frame.height);
	frameRate(30);

	keyboard = new Keyboard();
	ffreq = 32.7030562492499999;

	osc1 = new Oscillator(10,10);
	osc1.setLabel("VCO 1");
	osc2 = new Oscillator(10, 220);
	osc2.setLabel("VCO 2");
	osc3 = new Oscillator(10, 430);
	osc3.setLabel("VCO 3");

	osc1.octKnob.value = -2;
	osc2.fineKnob.value = -4;
	osc3.fineKnob.value = 4;
}

function draw() {
	clear();
	background(80, 100, 115);

	fill(255);
	strokeWeight(0);
	textSize(16);
	drawKeydata(frame);
	osc1.tick();
	osc1.drawPanel();
	osc2.tick();
	osc2.drawPanel();
	osc3.tick();
	osc3.drawPanel();
}
function drawKeydata() {
	stroke(255);
	strokeWeight(1);
	noFill();
	if(keyboard.keyState) { fill(255); }
	rect(10, frame.height - 20, 10,10);
	strokeWeight(0);
	fill(255);
	textAlign(LEFT);
	textSize(14);
	text(keyboard.currentKey, 30, frame.height - 10);
}
function triggerNoteOn() {
	osc1.setFreq( ffreq * pow( 2, keyboard.octave-1 ) * keyboard.pitch );
	osc1.vol( 0.1 ); // REPLACE WITH AMP
	osc2.setFreq( ffreq * pow( 2, keyboard.octave-1 ) * keyboard.pitch );
	osc2.vol( 0.1 ); // REPLACE WITH AMP
	osc3.setFreq( ffreq * pow( 2, keyboard.octave-1 ) * keyboard.pitch );
	osc3.vol( 0.1 ); // REPLACE WITH AMP
}
function triggerNoteOff(){
	osc1.vol( 0 );
	osc2.vol( 0 );
	osc3.vol( 0 );
}
function keyPressed() {
	keyboard.keyTrigger( keyCode );
}
function keyReleased() {
	keyboard.keyRelease( keyCode );
}
