(function() {
	
	function Objet(options) {

		// Paramètres de l'objet
		
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;
		this.image = options.image;
	}
	Objet.prototype.render = function() {

		// Dessin du poisson

		ctx.drawImage(
		    this.image,
		   	this.x - camera.x,
		    this.y - camera.y, 
		    this.image.width,
		    this.image.height
		);
	};
	window.Objet = Objet;
})();