(function() {
	var rotate = ['Jauge_temporel_transparent.png', 'Jauge_temporel_transparent2.png', 'Jauge_temporel_transparent3.png'];
	var maps = {
		current_map : 1, // Présent par défaut
		list : [
			{
				src : "Passe_1.jpg",
				name: "Passé",
				rotation: rotate[0],
			},
			{
				src : "Present_1.jpg",
				name: "Présent",
				rotation: rotate[1],
			},
			{
				src : "Future_2.jpg",
				name: "Futur",
				rotation: rotate[2],
			}
		],
		// ...
	};
	window.maps = maps;

})();