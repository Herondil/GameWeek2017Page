var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var luna;
var poisson;
var dragon;
var WORLD_WIDTH = 3200;
var WORLD_HEIGHT = 3200;

var HITBOX = {
	WIDTH : 57,
	HEIGHT : 57
};

document.body.appendChild(canvas);

function gameloop() {
	requestAnimationFrame(gameloop);

	update();
	render();
}

function init() {
	// 2) A ce point, toutes les images sont chargées
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 1;

	camera.init();

	// Création du sprite de luna
	luna = new Perso({
		last_direction : "droite",
		width: 200,
		height: 114,
		image: GAME_IMAGES[picture[7]],
		numberOfFrames: 1,
		ticksPerFrame: 3,
		x: 200,
		y: 2940,
		//Position d'origine en haut à gauche
		xbox: 0,
		ybox: 30,
		speed : 10,
		poche : []
	});

	// Création du poisson
	poisson = new Objet ({
		width : 94,		
		height : 83,
		image : GAME_IMAGES['Poisson.png'],
		x:3000, 
		y:2700
	});

	// Création du dragon
	dragon = new pnj ({
		width : 500,		
		height : 400,
		image1 : [	GAME_IMAGES['Sprite_dragon_passe_leve_v2.png'], 
					GAME_IMAGES['Sprite_dragon_present_leve_v2.png'], 
					GAME_IMAGES['Sprite_dragon_future_leve.png']
				],
		image2 : [	GAME_IMAGES['Sprite_dragon_passe_reveil_v2.png'], 
					GAME_IMAGES['Sprite_dragon_present_reveil_v2.png'], 
					GAME_IMAGES['Sprite_dragon_future_reveil_v2.png']
				],
		x:175, 
		y:635,
		numberOfFrames : 4,
		ticksPerFrame : 6,
		presence : false,
		touche : false,
		frame_end : false
	});

	// // Création de la jauge
	// jauge_t = new Jauge ({
	// 	width : 300,
	// 	height : 300,
	// 	image1 : GAME_IMAGES['Jauge_temporel_transparent.png'],
	// 	image2 : GAME_IMAGES['fleche_transparent.png'],
	// 	x:0,
	// 	y:0
	// });

	// Création de la ruche
	ruche = new Obstacle ({
		width : 153,
		height : 200,
		image : GAME_IMAGES['Sprite_ruche.png'],
		x : 1060,
		y : 1720,
		numberOfFrames : 4,
		ticksPerFrame : 6
	});

	//Création des arbres
    arbre = new Arbre ({
        width : 3200,
        height : 3200,
        image : [
        	GAME_IMAGES['Passe_arbres_dessus.png'],
        	GAME_IMAGES['Present_arbres_dessus.png'],
        	GAME_IMAGES['Future_arbres_dessus.png']
        ],
        x:0,
        y:0
    });

	// 3) Lancement du jeu !
	gameloop();
}

function update() {

	var ChangeTemps = new Audio('Changement_de_temps.mp3');
	ChangeTemps.volume = 0.3;

	// var Oiseaux = new Audio('chantoiseaux.mp3');
	// Oiseaux.volume = 0.3;
	// Oiseaux.play();

	// Changement de map de fond
	if (manetteInfo.RF.isPressed === true) {
		if (maps.current_map + 1 < maps.list.length) {
			maps.current_map++;
			ChangeTemps.play();
		}
	}
	else if (manetteInfo.LF.isPressed === true) {
		if (maps.current_map - 1 >= 0) {
			maps.current_map--;
			ChangeTemps.play();
		}
	}
	
	luna.update();

	dragon.update();

	ruche.update();

	camera.follow(luna);

	
}

function render() {
	// Effacement du canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Dessin du fond
	var fond = GAME_IMAGES[ maps.list[maps.current_map].src ];
	ctx.drawImage(fond, camera.x, camera.y, camera.width, camera.height, 0, 0, camera.width, camera.height );

	// Dessin de luna
	luna.render();

	// Dessin de la ruche
	if (fond == GAME_IMAGES[maps.list[1].src]) {
		ruche.render();
	}

	// Dessin du dragon
	dragon.render();

	// Dessin du poisson
	if (fond == GAME_IMAGES[maps.list[0].src] && luna.poche.length == 0) {
		poisson.render();
	};

	// Dessin des arbres
    arbre.render();

 	//// Dessin jauge
	// jauge_t.render();
}

// Chargement des images
var images = [
	'Passe_1.jpg',
	'Present_1.jpg',
	'Future_2.jpg',
	'Sprite_course_d.png',
	'Sprite_course_g2.png',
	'Sprite_course_dos_3v.png',
	'Sprite_course_face_2v.png',
	'Profil_immo_g.png',
	'Profil_immo_d.png',
	'Dos_immo.png',
	'Face_immo.png',
	'Sprite_dragon_passe_leve_v2.png', 
	'Sprite_dragon_passe_reveil_v2.png',
	'Sprite_dragon_present_leve_v2.png',
	'Sprite_dragon_present_reveil_v2.png',
	'Sprite_dragon_future_leve.png',
	'Sprite_dragon_future_reveil_v2.png',
	'Poisson.png',
	'Sprite_ruche.png',
	'Passe_arbres_dessus.png',
	'Present_arbres_dessus.png',
	'Future_arbres_dessus.png'
];


// 'Jauge_temporel_transparent.png',
// 'fleche_transparent.png',

// 1) Dès que les images seront toutes chargées, le jeu démarre !
loadImages(images, init);