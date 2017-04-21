(function() {
	
	function pnj(options) {
		// Paramètres d'animation
		this.frameIndex = 0;
		this.tickCount = 0;
		this.ticksPerFrame = options.ticksPerFrame || 0;
		this.numberOfFrames = options.numberOfFrames || 1;

		// Paramètres du pnj
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;
		this.image1 = options.image1;
		this.image2 = options.image2;
		this.presence = options.presence;
		this.touche = options.touche;
		this.frame_end = options.frame_end;
	}

	pnj.prototype.update = function() {
		if(this.presence == true){

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
	            	this.frame_end = true;
	            }
	        }
            if(this.frame_end == true && manetteInfo.A.isPressed === true){
        		luna.x = 830;
        		luna.y = 240;
       		};
	    }     
	    //frameIndex = 3
		if(this.presence == false && this.touche == true){

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
	            }
	        }

	    } else if (this.presence == false && this.touche == false){
	    	this.frameIndex = 0;
	    }
	    //console.log(this.tickCount, this.frameIndex); 
    }

	pnj.prototype.render = function() {
		// Dessin du dragon
		if(this.presence == true){
			ctx.drawImage(
			    this.image1[maps.current_map],
			    this.frameIndex * this.image1[maps.current_map].width / this.numberOfFrames,
			    0,
			    this.image1[maps.current_map].width / this.numberOfFrames,
			    this.image1[maps.current_map].height,
			    this.x - camera.x,
			    this.y - camera.y,
			    this.image1[maps.current_map].width / this.numberOfFrames,
			    this.image1[maps.current_map].height
			);
		} else if(this.presence == false){
			this.ticksPerFrame = 25;
			ctx.drawImage(
			    this.image2[maps.current_map],
			    this.frameIndex * this.image2[maps.current_map].width / this.numberOfFrames,
			    0,
			    this.image2[maps.current_map].width / this.numberOfFrames,
			    this.image2[maps.current_map].height,
			    this.x - camera.x,
			    this.y - camera.y,
			    this.image2[maps.current_map].width / this.numberOfFrames,
			    this.image2[maps.current_map].height
			);
		} 
	};

	window.pnj = pnj;
})();