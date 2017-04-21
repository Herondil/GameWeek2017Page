(function() {
	var camera = {
		x : 0,
		y : 0,
		width : 0,
		height : 0,

		init : function() {
			this.x = 0;
			this.y = 0;
			this.width = canvas.width;
			this.height = canvas.height;
		},

		follow : function(someone) {
			// La caméra suit l'objet en paramètre !
			this.x = someone.x - (this.width * 0.5) + (someone.width * 0.5);
			this.y = someone.y - (this.height * 0.5) + (someone.height * 0.5);

			// Rectification des coordonnées de la caméra !
			if (this.x + this.width > WORLD_WIDTH) {
				this.x = WORLD_WIDTH - this.width;
			}
			else if (this.x < 0) {
				this.x = 0;
			}
			if (this.y + this.height > WORLD_HEIGHT) {
				this.y = WORLD_HEIGHT - this.height;
			}
			else if (this.y < 0) {
				this.y = 0;
			}
		}
	};
	window.camera = camera;
})();