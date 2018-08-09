var frame = {
	width: 800,
	height: 600
}
var keyboard;
var ffreq;
var octave;
var osc1;

function setup() {
	createCanvas(frame.width, frame.height);
	frameRate(200);
	setTimeout(()=>{console.log("tick");},3000);

	keyboard = new Keyboard();
	ffreq = 32.7030562492499999;
	octave = 4;

	osc1 = new Oscillator();
	osc1.init();
	osc1.setLabel("VCO 1");
}

function draw() {
	clear();
	background(55, 55, 66);

	fill(255);
	textSize(16);
	text(octave + keyboard.currentKey, 10, 26);
	text(keyboard.keyState, 10, 52);
	osc1.drawPanel(50,50);
	osc1.tick();
}
function octaveMod(arg) {
	
}
function triggerNoteOn() {
	osc1.setFreq( ffreq * pow( 2, octave-1 ) * keyboard.pitch );
	osc1.vol( 0.1 ); // REPLACE WITH AMP
}
function triggerNoteOff(){
	osc1.vol( 0 );
}
function keyPressed() {
	keyboard.keyTrigger( keyCode );
	if ( keyCode === 90 ) {
		octave--;
	} else if ( keyCode === 88 ) {
		octave++;
	} else if ( keyCode === 32 ) {
		osc1.setType('triangle');
	}
}
function keyReleased() {
	keyboard.keyRelease( keyCode );
}
