(function() {
	
	function Arbre(options) {

		// Paramètres de l'Arbre
		
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;
		this.image = options.image;
	}
	Arbre.prototype.render = function() {

		// Dessin de l'arbre

		ctx.drawImage(
		    this.image[maps.current_map],
		   	this.x - camera.x,
		    this.y - camera.y, 
		    this.image[maps.current_map].width,
		    this.image[maps.current_map].height
		);
	};
	window.Arbre = Arbre;
})();