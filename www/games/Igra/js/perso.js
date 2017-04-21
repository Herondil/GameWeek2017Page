var picture = ['Sprite_course_dos_3v.png', 'Sprite_course_face_2v.png', 'Sprite_course_g2.png', 'Sprite_course_d.png', 'Face_immo.png', 'Dos_immo.png', 'Profil_immo_g.png', 'Profil_immo_d.png'];
var temps = [passe,present,futur];
(function() {
	
	function Perso(options) {

		// Paramètres d'animation
		this.frameIndex = 0;
		this.tickCount = 0;
		this.ticksPerFrame = options.ticksPerFrame || 0;
		this.numberOfFrames = options.numberOfFrames || 1;
		this.last_direction = options.last_direction;

		// Paramètres du personnage
		this.image = options.image;
		this.width = options.width;
		this.height = options.height;
		this.x = options.x;
		this.y = options.y;
		this.speed = options.speed;
		this.xbox = options.xbox;
		this.ybox = options.ybox;
		this.poche = options.poche;

	}

	Perso.prototype.update = function() {

		//Vérification des collisions
		var max_x = this.xbox * HITBOX.WIDTH + this.width * 0.5;
		var min_x = this.xbox * HITBOX.WIDTH;
		var max_y = this.ybox * HITBOX.HEIGHT + this.height * 0.5;
		var min_y = this.ybox * HITBOX.HEIGHT;

		//************Mouvement horizontal****************
		
		this.rightBox = Math.floor((this.x + this.width) / HITBOX.WIDTH);
		this.leftBox = Math.floor((this.x) / HITBOX.WIDTH);

		this.upBox = Math.floor((this.y) / HITBOX.HEIGHT);
		this.downBox = Math.floor((this.y + this.height) / HITBOX.HEIGHT);

		// Déplacements et HitBox du personnages
		// Gauche / Droite
		if ((temps[maps.current_map])[this.upBox][this.rightBox] === 0 && (temps[maps.current_map])[this.downBox][this.rightBox] === 0 && manetteInfo.Pad.x > 0) {
			this.x += manetteInfo.Pad.x * this.speed;
		}
		else if ((temps[maps.current_map])[this.upBox][this.leftBox] === 0 && (temps[maps.current_map])[this.downBox][this.leftBox] === 0 && manetteInfo.Pad.x < 0) {
			this.x += manetteInfo.Pad.x * this.speed;
		};

		// Haut / Bas
		if ((temps[maps.current_map])[this.upBox][this.leftBox] === 0 && (temps[maps.current_map])[this.upBox][this.rightBox] === 0 && manetteInfo.Pad.y < 0) {
			this.y += manetteInfo.Pad.y * this.speed;
		}
		else if ((temps[maps.current_map])[this.downBox][this.leftBox] === 0 && (temps[maps.current_map])[this.downBox][this.rightBox] === 0 && manetteInfo.Pad.y > 0) {
			this.y += manetteInfo.Pad.y * this.speed;
		};

		// Message de la ruche
		if ((temps[maps.current_map])[this.upBox][this.leftBox] === 2 || (temps[maps.current_map])[this.upBox][this.rightBox] === 2){
			message("Des insectes... j'en ai bien trop peur pour m'en approcher...");
		};

		// Message Poisson
		if ((temps[maps.current_map])[this.upBox][this.rightBox] === 3 && this.poche.length < 1 || (temps[maps.current_map])[this.downBox][this.rightBox] === 3 && this.poche.length < 1){
			message("Oh, un poisson !");
		};

		// Intéraction poisson
		if ((temps[maps.current_map])[this.upBox][this.rightBox] === 3 && this.poche.length < 1 && manetteInfo.A.isPressed === true || (temps[maps.current_map])[this.downBox][this.rightBox] === 3 && this.poche.length < 1 && manetteInfo.A.isPressed === true){
			this.poche.push(poisson);
		};

		// Intéraction dragon
		if ((temps[maps.current_map])[this.upBox][this.leftBox] === 4 && this.poche.length === 1 || (temps[maps.current_map])[this.upBox][this.rightBox] === 4 && this.poche.length === 1) {
			dragon.presence = true;
		}else {
			dragon.presence = false;
		};
		if ((temps[maps.current_map])[this.upBox][this.leftBox] === 4 && (temps[maps.current_map])[this.upBox][this.rightBox] === 4 ) {
			dragon.touche = true;
			if(this.poche.length === 1){
				message("Voilà un poisson pour toi, gros Dragon, puis-je passer ?");
			}
			message("Il est énorme ! Mais... son ventre gronde, il se réveillerait peut-être avec de la nourriture.");
		}else {
			dragon.touche = false;
		};

		// Message de la rivière
		if ((temps[maps.current_map])[this.upBox][this.rightBox] === 7 || (temps[maps.current_map])[this.upBox][this.leftBox] === 7 || (temps[maps.current_map])[this.downBox][this.rightBox] === 7 || (temps[maps.current_map])[this.downBox][this.leftBox] === 7){
			message("La glace semble trop fragile pour que je puisse passer...");
		};

		// Message de l'entrée
		if ((temps[maps.current_map])[this.upBox][this.rightBox] === 5 || (temps[maps.current_map])[this.upBox][this.leftBox] === 5){
			message("Je dois retrouver Emil, je ne peux pas abandonner maintenant !");
		};

		// Message de Fin
		if((temps[maps.current_map])[this.upBox][this.rightBox] === 6 || (temps[maps.current_map])[this.upBox][this.leftBox] === 6){
			message('Emil, je te retrouverais, tu peux compter sur moi...');

			var intervalID = window.setInterval(myCallback, 3000);
			var fin = 0;

			function myCallback() {
			  fin++;
			  if(fin === 1){
			  	document.location.href = "../credits.html";
			  }
			}
		}
		
		// Rectification des coordonnées du personnage
		// Droite
		if (this.x + this.width > WORLD_WIDTH) {
			this.x = WORLD_WIDTH - this.width;
		}
		//Gauche
		else if (this.x < 0) {
			this.x = 0;
		}
		//Haut
		if (this.y + this.height > WORLD_HEIGHT) {
			this.y = WORLD_HEIGHT - this.height;
		}
		//Bas
		else if (this.y < 0) {
			this.y = 0;
		}

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

        //Changement des sprites sur l'animation du personnage
        //Mouvement vertical
        if (manetteInfo.Pad.y <= -0.2) {
    		this.ticksPerFrame = 5;
        	this.numberOfFrames = 11;
        	this.image = GAME_IMAGES[picture[0]];
        	this.last_direction = "haut";
        }else if (manetteInfo.Pad.y >= 0.2) {
    		this.ticksPerFrame = 5;
        	this.numberOfFrames = 11;
        	this.image = GAME_IMAGES[picture[1]];
        	this.last_direction = "bas";
        };
        //Iddle
        if (manetteInfo.Pad.y >= -0.2 && manetteInfo.Pad.x <= 0.2) {
        	if (manetteInfo.Pad.y <= 0.2 && manetteInfo.Pad.x >= -0.2) {
        		switch(this.last_direction){
        			case "bas" :  
		        		this.numberOfFrames = 2;
		        		this.ticksPerFrame = 10;
        				this.image = GAME_IMAGES[picture[4]];
        				break;
        			case "haut" :  
		        		this.numberOfFrames = 2;
		        		this.ticksPerFrame = 10;
        				this.image = GAME_IMAGES[picture[5]];
        				break;
        			case "gauche" : 
		        		this.numberOfFrames = 2;
		        		this.ticksPerFrame = 10; 
        				this.image = GAME_IMAGES[picture[6]];
        				break;
        			case "droite" : 
		        		this.numberOfFrames = 2; 
		        		this.ticksPerFrame = 10;
        				this.image = GAME_IMAGES[picture[7]];	
        				break;
        		}
        	};
        };
        //Mouvement horizontal
        if (manetteInfo.Pad.x <= -0.2) {
    		this.ticksPerFrame = 5;
        	this.numberOfFrames = 11;
        	this.image = GAME_IMAGES[picture[2]];
        	this.last_direction = "gauche";
        }else if (manetteInfo.Pad.x >= 0.2) {
    		this.ticksPerFrame = 5;
        	this.numberOfFrames = 11;
        	this.image = GAME_IMAGES[picture[3]];
        	this.last_direction = "droite";
        };
	};

	Perso.prototype.debugHitBox = function() {

		// Débug personnage
		// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

		// ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);

		// Débug tilemap
		// ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';

		// for (var i = 0; i < (temps[maps.current_map]).length; i++) {
		// 	var line = (temps[maps.current_map])[i];

		// 	for (var j = 0; j < line.length; j++) {
		// 		var column = line[j];

		// 		if (column === 1)
		// 			ctx.fillRect(j * HITBOX.WIDTH - camera.x, i * HITBOX.HEIGHT - camera.y, HITBOX.WIDTH, HITBOX.HEIGHT);
		// 	}
		// }
	};

	Perso.prototype.render = function() {

		this.debugHitBox();

		// -----------------------
		// Dessin de l'animation
		// -----------------------
		
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
	window.Perso = Perso;

})();