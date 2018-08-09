function Keyboard() {
	this.pitch = 1;
	this.currentKey = "-";
	this.currentKeyCode = null;
	this.keyState = 0; // 0 for pressed and 1 for released
	this.kcIsValid = false;

	this.keymap = {
		c:  65,
		db: 87,
		d:  83,
		eb: 69,
		e:  68,
		f:  70,
		gb: 84,
		g:  71,
		ab: 89,
		a:  72,
		bb: 85,
		b:  74,
		c2: 75
	}

	this.keyTrigger = function( kc ) {
		this.keyHandler( kc );
		if ( this.kcIsValid ) {
			this.keyState = 1;
			triggerNoteOn();
		}
	}
	this.keyRelease = function( kc ) {
		if ( this.currentKeyCode == kc ) {
			this.currentKey = "-"; // Move to release
			this.keyState = 0;
			triggerNoteOff();
		}
	}
	this.keyHandler = function( kc ) {
		this.kcIsValid = true;
		switch ( kc ) {
			case this.keymap.c:
				this.currentKey = "C";
				this.currentKeyCode = this.keymap.c;
				this.pitch = 1;
				break;
			case this.keymap.db:
				this.currentKey = "Db";
				this.currentKeyCode = this.keymap.db;
				this.pitch = 1.0595;
				break;
			case this.keymap.d:
				this.currentKey = "D";
				this.currentKeyCode = this.keymap.d;
				this.pitch = 1.1225;
				break;
			case this.keymap.eb:
				this.currentKey = "Eb";
				this.currentKeyCode = this.keymap.eb;
				this.pitch = 1.1892;
				break;
			case this.keymap.e:
				this.currentKey = "E";
				this.currentKeyCode = this.keymap.e;
				this.pitch = 1.2599;
				break;
			case this.keymap.f:
				this.currentKey = "F";
				this.currentKeyCode = this.keymap.f;
				this.pitch = 1.3348;
				break;
			case this.keymap.gb:
				this.currentKey = "Gb";
				this.currentKeyCode = this.keymap.gb;
				this.pitch = 1.4142;
				break;
			case this.keymap.g:
				this.currentKey = "G";
				this.currentKeyCode = this.keymap.g;
				this.pitch = 1.4983;
				break;
			case this.keymap.ab:
				this.currentKey = "Ab";
				this.currentKeyCode = this.keymap.ab;
				this.pitch = 1.5874;
				break;
			case this.keymap.a:
				this.currentKey = "A";
				this.currentKeyCode = this.keymap.a;
				this.pitch = 1.6818;
				break;
			case this.keymap.bb:
				this.currentKey = "Bb";
				this.currentKeyCode = this.keymap.bb;
				this.pitch = 1.7818;
				break;
			case this.keymap.b:
				this.currentKey = "B";
				this.currentKeyCode = this.keymap.b;
				this.pitch = 1.8897;
				break;
			case this.keymap.c2:
				this.currentKey = "C";
				this.currentKeyCode = this.keymap.c2;
				this.pitch = 2;
				break;
			default:
				this.kcIsValid = false;
				break;
		}
	}
}
