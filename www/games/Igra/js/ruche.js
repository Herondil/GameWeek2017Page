(function() {
	
	function Obstacle(options) {
		// Paramètres d'animation
		this.frameIndex = 0;
		this.tickCount = 0;
		this.ticksPerFrame = options.ticksPerFrame || 0;
		this.numberOfFrames = options.numberOfFrames || 1;

		// Paramètres de l'obstacle
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;
		this.image = options.image;
	}

	Obstacle.prototype.update = function() {
		// --------------------------
		// Gestion de l'animation du perso
		// --------------------------
		
		this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
			this.tickCount = 0;
			
            // Si frameIndex actuel est dans la range
            if (this.frameIndex < this.numberOfFrames - 1) {	
                // Pour aller à la Frame suivante
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }
    }
	Obstacle.prototype.render = function() {

		// Dessin de la ruche

		ctx.drawImage(
		    this.image,
		    this.frameIndex * this.image.width / this.numberOfFrames,
		    0,
		    this.image.width / this.numberOfFrames,
		    this.image.height,
		    this.x - camera.x,
		    this.y - camera.y,
		    this.image.width / this.numberOfFrames,
		    this.image.height
		);
	};
	window.Obstacle = Obstacle;
})();