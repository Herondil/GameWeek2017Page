(function() {
	var GAME_IMAGES = {};

	function loadImages( images, callback ) {
		var prefix = 'imgs/';

		var nbImagesChargees = 0;

		for (let i = 0; i < images.length; i++) {
			
			let img = new Image();
			img.src = prefix + images[i];

			// console.log('Chargement de', images[i], '...');
			img.onload = () => {

				GAME_IMAGES[ images[i] ] = img;
				nbImagesChargees++;

				// console.info('Image', images[i], ' chargée !!! On en est à', nbImagesChargees, ' images chargées en tout !');

				if (nbImagesChargees === images.length) {
					// console.info('TOUTES LES IMAGES ONT ETE CHARGEES ! Exécution de la fonction de callback')
					callback();
				}
			}

		}
	}

	window.loadImages = loadImages;
	window.GAME_IMAGES = GAME_IMAGES;

})();