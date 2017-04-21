(function() {
	var manette = {
		A : { isDown:false, isPressed:false, hasBeenReleased: true },
		LF : { isDown:false, isPressed:false, hasBeenReleased: true },
		RF : { isDown:false, isPressed:false, hasBeenReleased: true },
		Gauche : { isDown:false, isPressed:false, hasBeenReleased: true },
		Droite : { isDown:false, isPressed:false, hasBeenReleased: true },
		Haut : { isDown:false, isPressed:false, hasBeenReleased: true }, 
		Bas : { isDown:false, isPressed:false, hasBeenReleased: true },
		Pad : { x : 0, y : 0 }
	};
	var PAD_BUTTONS = {
		A : 0,
		LF : 14,
		RF : 15
		// ...
	};
	var PAD_AXES = {
		LEFT_X : 0,
		LEFT_Y : 1,
	};
	function getPadInfo() {
		requestAnimationFrame(getPadInfo);
		var pad = navigator.getGamepads()[0];
		//BUTTONS
		for (var i = 0; i < pad.buttons.length; i++) {
			if (i === PAD_BUTTONS.A) {
				manette.A.isPressed = false;
				if (pad.buttons[PAD_BUTTONS.A].value === 1) {
					manette.A.isDown = true;					
					if (manette.A.hasBeenReleased) {
						manette.A.isPressed = true;
						manette.A.hasBeenReleased = false;
					}
				}
				else {
					manette.A.isDown = false;
					manette.A.hasBeenReleased = true;
				}
			}
			if (i === PAD_BUTTONS.LF) {
				manette.LF.isPressed = false;
				if (pad.buttons[PAD_BUTTONS.LF].value === 1) {
					manette.LF.isDown = true;
					if (manette.LF.hasBeenReleased) {
						manette.LF.isPressed = true;
						manette.LF.hasBeenReleased = false;
					}
				}
				else {
					manette.LF.isDown = false;
					manette.LF.hasBeenReleased = true;
				}
			}
			if (i === PAD_BUTTONS.RF) {
				manette.RF.isPressed = false;
				if (pad.buttons[PAD_BUTTONS.RF].value === 1) {
					manette.RF.isDown = true;
					if (manette.RF.hasBeenReleased) {
						manette.RF.isPressed = true;
						manette.RF.hasBeenReleased = false;
					}
				}
				else {
					manette.RF.isDown = false;
					manette.RF.hasBeenReleased = true;
				}
			}
		}
		//JOYSTICK
		for (var i = 0; i < pad.axes.length; i++) {
			if (i === PAD_AXES.LEFT_X) {
				manette.Gauche.isDown = false;
				manette.Droite.isDown = false;
				// console.log(pad.axes[PAD_AXES.LEFT_X]);
				// debugger;
				// LEFT correspond au stick gauche !
				// X == Gauche ou Droite
				// Y == Haut ou Bas
				if (pad.axes[PAD_AXES.LEFT_X] <= -0.8) {
					manette.Gauche.isDown = true;
				}
				else if (pad.axes[PAD_AXES.LEFT_X] >= 0.8) {
					manette.Droite.isDown = true;
				}

				manette.Pad.x = pad.axes[PAD_AXES.LEFT_X];
				if (manette.Pad.x < 0.25 && manette.Pad.x > -0.25)
					manette.Pad.x = 0;
			}
			if (i === PAD_AXES.LEFT_Y) {
				manette.Haut.isDown = false;
				manette.Bas.isDown = false;
				if (pad.axes[PAD_AXES.LEFT_Y] <= -0.8) {
					manette.Haut.isDown = true;
				}
				else if (pad.axes[PAD_AXES.LEFT_Y] >= 0.8) {
					manette.Bas.isDown = true;
				}

				manette.Pad.y = pad.axes[PAD_AXES.LEFT_Y];
				if (manette.Pad.y < 0.25 && manette.Pad.y > -0.25)
					manette.Pad.y = 0;
			}
		}
	}
	getPadInfo();
	window.manetteInfo = manette;
})();