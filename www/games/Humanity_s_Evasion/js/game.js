var StadeDeJeu = 'Menu',
	FormeAffiche = '',
	InfoActuelle = false,
	EventActuelle = true,
	Event = false,
	Creation = {
		Audio : document.createElement("AUDIO"),
		Musique : document.createElement("AUDIO"),
		Video : document.createElement("VIDEO"),
		Titre : document.createElement("H1"),
		TitreGif : document.createElement("IMG"),
		Play : document.createElement("IMG"),
		Credits : document.createElement("IMG"),
		CreditsImg : document.createElement("IMG"),
		Jauges : document.createElement("DIV"),
		EffetImg : document.createElement('IMG'),
		JDollars : document.createElement("P"),
		JDollarsGain : document.createElement("P"),
		JINourriture : document.createElement("IMG"),
		JDNourriture : document.createElement("DIV"),
		JPNourriture : document.createElement("P"),
		JIEnergie : document.createElement("IMG"),
		JDEnergie : document.createElement("DIV"),
		JPEnergie : document.createElement("P"),
		JIPollution : document.createElement("IMG"),
		JDPollution : document.createElement("DIV"),
		JPPollution : document.createElement("P"),
		JISante : document.createElement("IMG"),
		JDSante : document.createElement("DIV"),
		JPSante : document.createElement("P"),
		JTechno : document.createElement("DIV"),
		JDTechno : document.createElement("DIV"),
		JAnnee : document.createElement("P"),
		Tuto: document.createElement('DIV'),
		TutoP: document.createElement('P'),
		TutoNext: document.createElement('P'),
		TutoSkip: document.createElement('P'),
		AlertDiv: document.createElement('DIV'),
		AlertP: document.createElement('P'),
		Clique : document.createElement("DIV"),
		Nourriture : document.createElement("IMG"),
		NourritureTotaux : document.createElement("P"),
		Industrie : document.createElement("IMG"),
		IndustrieTotaux : document.createElement("P"),
		Energie : document.createElement("IMG"),
		EnergieTotaux : document.createElement("P"),
		Sante : document.createElement("IMG"),
		SanteTotaux : document.createElement("P"),
		Technologie : document.createElement("IMG"),
		TechnologieTotaux : document.createElement("P"),
		Level1 : document.createElement('IMG'),
		Level1Nombre : document.createElement('P'),
		Level2 : document.createElement('IMG'),
		Level2Nombre : document.createElement('P'),
		Level3 : document.createElement('IMG'),
		Level3Nombre : document.createElement('P'),
		Level4 : document.createElement('IMG'),
		Level4Nombre : document.createElement('P'),
		Level5 : document.createElement('IMG'),
		Level5Nombre : document.createElement('P'),
		Info : document.createElement('DIV'),
		IInfo : document.createElement('IMG'),
		IPrix : document.createElement('P'),
		IGain : document.createElement('P'),
		IINourriture : document.createElement('IMG'),
		IPNourriture : document.createElement('P'),
		IIEnergie : document.createElement('IMG'),
		IPEnergie : document.createElement('P'),
		IIPollution : document.createElement('IMG'),
		IPPollution : document.createElement('P'),
		IISante : document.createElement('IMG'),
		IPSante : document.createElement('P'),
		Event : document.createElement('IMG'),
		FinDiv1 : document.createElement('DIV'),
		FinImg1 : document.createElement('IMG'),
		FinTxt1 : document.createElement('P'),
		FinDiv2 : document.createElement('DIV'),
		FinImg2 : document.createElement('IMG'),
		FinTxt2 : document.createElement('P'),
		FinDiv3 : document.createElement('DIV'),
		FinImg3 : document.createElement('IMG'),
		FinTxt3 : document.createElement('P'),
		Final : document.createElement('DIV'),
		Final1 : document.createElement('P'),
		Final2 : document.createElement('P'),
		Final3 : document.createElement('P'),
		FinalPourcent : document.createElement('P'),
		Defaite : document.createElement('IMG'),
		Reload : document.createElement('A'),
		FinalP : document.createElement('P'),
		FinalP1 : document.createElement('P'),
		FinalP2 : document.createElement('P'),
		FinalP3 : document.createElement('P')
	},
	Jauges = {
		HauteurN : 30,
		HauteurE : 90,
		HauteurP : 150,
		HauteurS : 210,
		LargeurNEPS : 40
	},
	Clique = {
		HauteurDiv : Math.floor(window.innerHeight/10*6.5),
		LargeurDiv : Math.floor(window.innerWidth/50),
		HauteurN : 0,
		LargeurN : 0,
		HauteurI : window.innerHeight/100*10,
		LargeurI : window.innerWidth/100*2,
		HauteurE : window.innerHeight/100*18,
		LargeurE : window.innerWidth/100*6,
		HauteurS : window.innerHeight/100*22,
		LargeurS : window.innerWidth/100*11,
		HauteurT : window.innerHeight/100*24,
		LargeurT : window.innerWidth/100*16.5,
		HauteurL : -75,
		LargeurL : 150
	},
	Valeur = {
		Nourriture : 60,
		Energie : 60,
		Pollution : 60,
		Sante : 60,
		Techno : 0,
		Dollars : 20000,
		Annee : new Date().getFullYear(),
		GainDollars : 0,
		GainTechno : 0
	},
	ValeurChange = {
		Nourriture : 60,
		Energie : 60,
		Pollution : 60,
		Sante : 60,
		Techno : 0,
		Dollars : 20000,
		Annee : new Date().getFullYear(),
		GainDollars : 0,
		GainTechno : 0
	},
	Achat = {
		Nourriture : {
			Level1 : {
				Cout : -400,
				Nourriture : 1,
				Energie : -2,
				Pollution : -1,
				Sante : 0,
				Achete : 0
			},
			Level2 : {
				Cout : -600,
				Nourriture : 3,
				Energie : -5,
				Pollution : -3,
				Sante : 0,
				Achete : 0
			},
			Level3 : {
				Cout : -800,
				Nourriture : 5,
				Energie : -10,
				Pollution : -5,
				Sante : 0,
				Achete : 0
			},
			Level4 : {
				Cout : -1000,
				Nourriture : 8,
				Energie : -12,
				Pollution : -4,
				Sante : 0,
				Achete : 0
			},
			Level5 : {
				Cout : -1200,
				Nourriture : 10,
				Energie : -15,
				Pollution : -8,
				Sante : 0,
				Achete : 0
			}
		},
		Industrie : {
			Level1 : {
				Cout : -500,
				Gain : 300,
				Energie : -2,
				Pollution : -3,
				Sante : -10,
				Nourriture : -5,
				Achete : 0
			},
			Level2 : {
				Cout : -1000,
				Gain : 600,
				Energie : -10,
				Pollution : -0,
				Sante : -15,
				Nourriture : -5,
				Achete : 0
			},
			Level3 : {
				Cout : -1600,
				Gain : 800,
				Energie : -3,
				Pollution : -10,
				Sante : -17,
				Nourriture : -10,
				Achete : 0
			},
			Level4 : {
				Cout : -2500,
				Gain : 1200,
				Energie : -8,
				Pollution : -15,
				Sante : -18,
				Nourriture : -15,
				Achete : 0
			},
			Level5 : {
				Cout : -4000,
				Gain : 1500,
				Energie : -10,
				Pollution : -5,
				Sante : -20,
				Nourriture : -5,
				Achete : 0
			}
		},
		Energie : {
			Level1 : {
				Cout : -1500,
				Energie : 10,
				Pollution : -5,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level2 : {
				Cout : -3500,
				Energie : 15,
				Pollution : 0,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level3 : {
				Cout : -4000,
				Energie : 20,
				Pollution : -15,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level4 : {
				Cout : -8000,
				Energie : 30,
				Pollution : -20,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level5 : {
				Cout : -12000,
				Energie : 35,
				Pollution : -0,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			}
		},
		Sante : {
			Level1 : {
				Cout : -800,
				Energie : -8,
				Pollution : 15,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level2 : {
				Cout : -1500,
				Energie : -14,
				Pollution : 25,
				Nourriture : 0,
				Sante : 0,
				Achete : 0
			},
			Level4 : {
				Cout : -800,
				Energie : -8,
				Sante : 15,
				Nourriture : 0,
				Pollution : 0,
				Achete : 0
			},
			Level5 : {
				Cout : -1500,
				Energie : -14,
				Sante : 25,
				Nourriture : 0,
				Pollution : 0,
				Achete : 0
			}
		},
		Techno : {
			Level2 : {
				Cout : -2500,
				Energie : -10,
				Gain : 3,
				Nourriture : 0,
				Sante : 0,
				Pollution : 0,
				Achete : 0
			},
			Level3 : {
				Cout : -5000,
				Energie : -15,
				Gain : 5,
				Nourriture : 0,
				Sante : 0,
				Pollution : 0,
				Achete : 0
			},
			Level4 : {
				Cout : -10000,
				Energie : -25,
				Gain : 8,
				Nourriture : 0,
				Sante : 0,
				Pollution : 0,
				Achete : 0
			}
		}
	},
	opacite = 0,
	sonverif = true;


document.body.style.height = window.innerHeight+'px';

// Clique
Creation.Play.onclick = function(){
	if (StadeDeJeu == 'Intro') {
		Creation.Video.pause();
		document.body.removeChild(Creation.Video);
		document.body.removeChild(Creation.Play);
		CreerJeu();
		setTimeout(Transition,1000/60);
		StadeDeJeu = 'Transition';
		Creation.Musique.play();
	}else{
		document.body.removeChild(Creation.Titre);
		document.body.removeChild(Creation.TitreGif);
		document.body.removeChild(Creation.Credits);
		document.body.appendChild(Creation.Video);
		StadeDeJeu = 'Intro';
		Creation.Play.style.left = window.innerWidth/50+'px';
		Creation.Play.style.top = window.innerHeight/100*50+'px';
		Creation.Play.style.width = window.innerWidth/8+'px';
		Creation.Audio.src = 'audio/ClicMenu.mp3';
		Creation.Audio.play();
		Creation.Musique.pause();
		Creation.Video.play();
	}
	Creation.Video.onended = function(){
		document.body.removeChild(Creation.Video);
		document.body.removeChild(Creation.Play);
		CreerJeu();
		setTimeout(Transition,1000/60);
		StadeDeJeu = 'Transition';
		Creation.Musique.play();
	}
}
Creation.Nourriture.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoNourriture') {
		document.body.appendChild(Creation.Level1);
		document.body.appendChild(Creation.Level1Nombre);
		document.body.appendChild(Creation.Level2);
		document.body.appendChild(Creation.Level2Nombre);
		document.body.appendChild(Creation.Level3);
		document.body.appendChild(Creation.Level3Nombre);
		document.body.appendChild(Creation.Level4);
		document.body.appendChild(Creation.Level4Nombre);
		document.body.appendChild(Creation.Level5);
		document.body.appendChild(Creation.Level5Nombre);
		Creation.Level1Nombre.innerHTML = Achat.Nourriture.Level1.Achete;
		Creation.Level2Nombre.innerHTML = Achat.Nourriture.Level2.Achete;
		Creation.Level3Nombre.innerHTML = Achat.Nourriture.Level3.Achete;
		Creation.Level4Nombre.innerHTML = Achat.Nourriture.Level4.Achete;
		Creation.Level5Nombre.innerHTML = Achat.Nourriture.Level5.Achete;
		Creation.Level1.src = 'img/NLVL1.png';
		if (StadeDeJeu == 'TutoNourriture'){
			Creation.Level2.src = 'img/cadena.png';
			Creation.Level1.style.opacity = 1;
		}
		else Creation.Level2.src = 'img/NLVL2.png';
		if (Valeur.Techno <= 25 || StadeDeJeu == 'TutoNourriture') Creation.Level3.src = 'img/cadena.png';
		else Creation.Level3.src = 'img/NLVL3.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == 'TutoNourriture') Creation.Level4.src = 'img/cadena.png';
		else Creation.Level4.src = 'img/NLVL4.png';
		if (Valeur.Techno <= 75 || StadeDeJeu == 'TutoNourriture') Creation.Level5.src = 'img/cadena.png';
		else Creation.Level5.src = 'img/NLVL5.png';
		FormeAffiche = 'Nourriture';
	}
}
Creation.Industrie.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoIndustrie') {
		document.body.appendChild(Creation.Level1);
		document.body.appendChild(Creation.Level1Nombre);
		document.body.appendChild(Creation.Level2);
		document.body.appendChild(Creation.Level2Nombre);
		document.body.appendChild(Creation.Level3);
		document.body.appendChild(Creation.Level3Nombre);
		document.body.appendChild(Creation.Level4);
		document.body.appendChild(Creation.Level4Nombre);
		document.body.appendChild(Creation.Level5);
		document.body.appendChild(Creation.Level5Nombre);
		Creation.Level1Nombre.innerHTML = Achat.Industrie.Level1.Achete;
		Creation.Level2Nombre.innerHTML = Achat.Industrie.Level2.Achete;
		Creation.Level3Nombre.innerHTML = Achat.Industrie.Level3.Achete;
		Creation.Level4Nombre.innerHTML = Achat.Industrie.Level4.Achete;
		Creation.Level5Nombre.innerHTML = Achat.Industrie.Level5.Achete;
		Creation.Level1.src = 'img/ILVL1.png';
		if(StadeDeJeu == 'TutoIndustrie') {
			Creation.Level2.src = 'img/cadena.png';
			Creation.Level1.style.opacity = 1;
		}
		else Creation.Level2.src = 'img/ILVL2.png';
		if (Valeur.Techno <= 25 || StadeDeJeu == 'TutoIndustrie') Creation.Level3.src = 'img/cadena.png';
		else Creation.Level3.src = 'img/ILVL3.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == 'TutoIndustrie') Creation.Level4.src = 'img/cadena.png';
		else Creation.Level4.src = 'img/ILVL4.png';
		if (Valeur.Techno <= 75 || StadeDeJeu == 'TutoIndustrie') Creation.Level5.src = 'img/cadena.png';
		else Creation.Level5.src = 'img/ILVL5.png';
		FormeAffiche = 'Industrie';
	}
}
Creation.Energie.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoÉnergie') {
		document.body.appendChild(Creation.Level1);
		document.body.appendChild(Creation.Level1Nombre);
		document.body.appendChild(Creation.Level2);
		document.body.appendChild(Creation.Level2Nombre);
		document.body.appendChild(Creation.Level3);
		document.body.appendChild(Creation.Level3Nombre);
		document.body.appendChild(Creation.Level4);
		document.body.appendChild(Creation.Level4Nombre);
		document.body.appendChild(Creation.Level5);
		document.body.appendChild(Creation.Level5Nombre);
		Creation.Level1Nombre.innerHTML = Achat.Energie.Level1.Achete;
		Creation.Level2Nombre.innerHTML = Achat.Energie.Level2.Achete;
		Creation.Level3Nombre.innerHTML = Achat.Energie.Level3.Achete;
		Creation.Level4Nombre.innerHTML = Achat.Energie.Level4.Achete;
		Creation.Level5Nombre.innerHTML = Achat.Energie.Level5.Achete;
		Creation.Level1.src = 'img/ELVL1.png';
		if ( StadeDeJeu == 'TutoÉnergie') {
			Creation.Level2.src = 'img/cadena.png';
			Creation.Level2.style.opacity = 0.2;
		}
		else Creation.Level2.src = 'img/ELVL2.png';
		if (Valeur.Techno <= 25 || StadeDeJeu == 'TutoÉnergie') Creation.Level3.src = 'img/cadena.png';
		else Creation.Level3.src = 'img/ELVL3.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == 'TutoÉnergie') Creation.Level4.src = 'img/cadena.png';
		else Creation.Level4.src = 'img/ELVL4.png';
		if (Valeur.Techno <= 75 || StadeDeJeu == 'TutoÉnergie') Creation.Level5.src = 'img/cadena.png';
		else Creation.Level5.src = 'img/ELVL5.png';
		FormeAffiche = 'Énergie';
	}
}
Creation.Sante.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoPollution') {
		document.body.appendChild(Creation.Level1);
		document.body.appendChild(Creation.Level1Nombre);
		document.body.appendChild(Creation.Level2);
		document.body.appendChild(Creation.Level2Nombre);
		document.body.appendChild(Creation.Level4);
		document.body.appendChild(Creation.Level4Nombre);
		document.body.appendChild(Creation.Level5);
		document.body.appendChild(Creation.Level5Nombre);
		Creation.Level1Nombre.innerHTML = Achat.Sante.Level1.Achete;
		Creation.Level2Nombre.innerHTML = Achat.Sante.Level2.Achete;
		Creation.Level4Nombre.innerHTML = Achat.Sante.Level4.Achete;
		Creation.Level5Nombre.innerHTML = Achat.Sante.Level5.Achete;
		if (FormeAffiche != '') {
			document.body.removeChild(Creation.Level3);
			document.body.removeChild(Creation.Level3Nombre);
		}
		Creation.Level1.src = 'img/PLVL1.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == 'TutoPollution') Creation.Level2.src = 'img/cadena.png';
		else Creation.Level2.src = 'img/PLVL2.png';
		if (StadeDeJeu == 'TutoPollution') Creation.Level4.src = 'img/cadena.png';
		else Creation.Level4.src = 'img/SLVL3.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == 'TutoSanté') Creation.Level5.src = 'img/cadena.png';
		else Creation.Level5.src = 'img/SLVL4.png';
		if (StadeDeJeu == 'TutoPollution') {
			Creation.Level1.style.opacity = 1;
		}
		FormeAffiche = 'Santé';
	}
}
Creation.Technologie.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoTechno') {
		document.body.appendChild(Creation.Level2);
		document.body.appendChild(Creation.Level2Nombre);
		document.body.appendChild(Creation.Level3);
		document.body.appendChild(Creation.Level3Nombre);
		document.body.appendChild(Creation.Level4);
		document.body.appendChild(Creation.Level4Nombre);
		Creation.Level2Nombre.innerHTML = Achat.Techno.Level2.Achete;
		Creation.Level3Nombre.innerHTML = Achat.Techno.Level3.Achete;
		Creation.Level4Nombre.innerHTML = Achat.Techno.Level4.Achete;
		if (FormeAffiche != '') {
			document.body.removeChild(Creation.Level1);
			document.body.removeChild(Creation.Level1Nombre);
			document.body.removeChild(Creation.Level5);
			document.body.removeChild(Creation.Level5Nombre);
		}
		Creation.Level2.src = 'img/TLVL1.png';
		if (Valeur.Techno <= 50 || StadeDeJeu == "TutoTechno") Creation.Level3.src = 'img/cadena.png';
		else Creation.Level3.src = 'img/TLVL2.png';
		if (Valeur.Techno <= 75|| StadeDeJeu == "TutoTechno") Creation.Level4.src = 'img/cadena.png';
		else Creation.Level4.src = 'img/TLVL3.png';
		FormeAffiche = 'Techno';
		if (StadeDeJeu == 'TutoTechno') {
			StadeDeJeu = 'TutoBatTechno';
			Creation.TutoP.innerHTML = 'Il existe plusieurs types de batiments, certains plus efficaces. Achetez le premier.';
			Creation.Level1.style.opacity = 0.2;
			Creation.Level2.style.opacity = 1;
			Creation.Level3.style.opacity = 0.2;
			Creation.Level4.style.opacity = 0.2;
			Creation.Level5.style.opacity = 0.2;
		}
	}
}

Creation.Level1.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoÉnergie' || StadeDeJeu == 'TutoIndustrie' || StadeDeJeu == 'TutoNourriture' || StadeDeJeu == 'TutoPollution') {
		if (FormeAffiche == 'Nourriture' && Valeur.Dollars+Achat.Nourriture.Level1.Cout >= 0 && Valeur.Nourriture < 100 && (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoNourriture')){
			Valeur.Dollars += Achat.Nourriture.Level1.Cout;
			Valeur.Nourriture += Achat.Nourriture.Level1.Nourriture;
			Valeur.Energie += Achat.Nourriture.Level1.Energie;
			Valeur.Pollution += Achat.Nourriture.Level1.Pollution;
			Achat.Nourriture.Level1.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/INLVL1.png'
			if (Valeur.Nourriture > 100) Valeur.Nourriture = 100;
			Creation.Level1Nombre.innerHTML = Achat.Nourriture.Level1.Achete;
			Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);
			Creation.Audio.src = 'audio/Nourriture.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoNourriture') {
				Creation.TutoP.innerHTML = "La pollution est un paramètre à prendre en compte. Augmentez la qualité de l'air en achetant des machines créées pour.";
				StadeDeJeu = 'TutoPollution';
				Creation.Sante.style.opacity = 1;
				Creation.Level1.style.opacity = 0.5;
				Creation.Nourriture.style.opacity = 0.5;
			}
		}else if (FormeAffiche == 'Industrie' && Valeur.Dollars+Achat.Industrie.Level1.Cout >= 0 &&(StadeDeJeu == 'Game' || StadeDeJeu == 'TutoIndustrie')){
			Valeur.Dollars += Achat.Industrie.Level1.Cout;
			Valeur.Energie += Achat.Industrie.Level1.Energie;
			Valeur.Pollution += Achat.Industrie.Level1.Pollution;
			Valeur.Sante += Achat.Industrie.Level1.Sante;
			Valeur.Nourriture += Achat.Industrie.Level1.Nourriture;
			Valeur.GainDollars += Achat.Industrie.Level1.Gain;
			Achat.Industrie.Level1.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IILVL1.png'
			Creation.Level1Nombre.innerHTML = Achat.Industrie.Level1.Achete;
			Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);
			Creation.Audio.src = 'audio/Industrie.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoIndustrie') {
				Creation.TutoP.innerHTML = "Il existe aussi la Nourriture à prendre en compte. Achetez donc un bâtiment pour augmenter votre jauge.";
				StadeDeJeu = 'TutoNourriture';
				Creation.Industrie.style.opacity = 0.5;
				Creation.Level1.style.opacity = 0.5;
				Creation.Nourriture.style.opacity = 1;
			}
		}else if (FormeAffiche == 'Énergie' && Valeur.Dollars+Achat.Energie.Level1.Cout >= 0 && Valeur.Energie < 100 && (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoÉnergie')){
			Valeur.Dollars += Achat.Energie.Level1.Cout;
			Valeur.Energie += Achat.Energie.Level1.Energie;
			Valeur.Pollution += Achat.Energie.Level1.Pollution;
			Achat.Energie.Level1.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IELVL1.png'
			if (Valeur.Energie > 100) Valeur.Energie = 100;
			Creation.Level1Nombre.innerHTML = Achat.Energie.Level1.Achete;
			Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);
			Creation.Audio.src = 'audio/Energie.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoÉnergie') {
				Creation.TutoP.innerHTML = "Attention à votre argent, meilleurs est un bâtiments, plus haut est son prix.";
				StadeDeJeu = 'TutoArgent';
				Creation.JDollars.style.opacity = 1;
				Creation.Energie.style.opacity = 0.5;
				Creation.Level1.style.opacity = 0.5;
				Creation.Tuto.appendChild(Creation.TutoNext);
			}
		}else if (FormeAffiche == 'Santé' && Valeur.Dollars+Achat.Sante.Level1.Cout >= 0 &&(StadeDeJeu == 'Game' || StadeDeJeu == 'TutoPollution')){
			Valeur.Dollars += Achat.Sante.Level1.Cout;
			Valeur.Energie += Achat.Sante.Level1.Energie;
			Valeur.Pollution += Achat.Sante.Level1.Pollution;
			Achat.Sante.Level1.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IPLVL1.png'
			if (Valeur.Sante > 100) Valeur.Sante = 100;
			Creation.Level1Nombre.innerHTML = Achat.Sante.Level1.Achete;
			Creation.SanteTotaux.innerHTML = (Achat.Sante.Level1.Achete+Achat.Sante.Level2.Achete+Achat.Sante.Level4.Achete+Achat.Sante.Level5.Achete);
			Creation.Audio.src = 'audio/Sante.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoPollution') {
				Creation.TutoP.innerHTML = "Vous devez aussi acheter des hopitaux pour soigner les humains.";
				StadeDeJeu = 'TutoSanté';
				Creation.Level1.src = 'img/cadena.png';
				Creation.Level1.style.opacity = 0.5;
				Creation.Level4.src = 'img/SLVL3.png';
				Creation.Level4.style.opacity = 1;
			}
		}
		TransitionDonne();
		Verification()
	}
}
Creation.Level1.onmouseover = function(){
	var InfoAffiche;
	if (FormeAffiche == 'Nourriture') InfoAffiche = Achat.Nourriture;
	else if (FormeAffiche == 'Industrie') InfoAffiche = Achat.Industrie;
	else if (FormeAffiche == 'Énergie') InfoAffiche = Achat.Energie;
	else if (FormeAffiche == 'Santé') InfoAffiche = Achat.Sante;
	else if (FormeAffiche == 'Techno') InfoAffiche = Achat.Techno;
	Creation.IPrix.innerHTML = InfoAffiche.Level1.Cout+'$';
	Creation.IPrix.style.color = "#CF0A1D";

	if (InfoAffiche.Level1.Gain != undefined) {
		Creation.IGain.innerHTML = '+'+InfoAffiche.Level1.Gain;
		if (FormeAffiche == "Industrie") Creation.IGain.innerHTML += "$/8s";
		else if (FormeAffiche == "Techno") Creation.IGain.innerHTML += "T/20s";
		Creation.IGain.style.color = "#16B84E";
	}else {Creation.IGain.innerHTML = '';}

	Creation.IPNourriture.innerHTML = InfoAffiche.Level1.Nourriture;
	if (InfoAffiche.Level1.Nourriture < 0) Creation.IPNourriture.style.color = "#CF0A1D";
	else Creation.IPNourriture.style.color = "#16B84E";

	Creation.IPEnergie.innerHTML = InfoAffiche.Level1.Energie;
	if (InfoAffiche.Level1.Energie < 0) Creation.IPEnergie.style.color = "#CF0A1D";
	else Creation.IPEnergie.style.color = "#16B84E";

	Creation.IPPollution.innerHTML = InfoAffiche.Level1.Pollution;
	if (InfoAffiche.Level1.Pollution < 0) Creation.IPPollution.style.color = "#CF0A1D";
	else Creation.IPPollution.style.color = "#16B84E";

	Creation.IPSante.innerHTML = InfoAffiche.Level1.Sante;
	if (InfoAffiche.Level1.Sante < 0) Creation.IPSante.style.color = "#CF0A1D";
	else Creation.IPSante.style.color = "#16B84E";

	document.body.appendChild(Creation.Info);
	InfoActuelle = true;
}
Creation.Level1.onmouseout = function(){
	document.body.removeChild(Creation.Info);
	InfoActuelle = false;
}

Creation.Level2.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoBatTechno') {
		if (FormeAffiche == 'Nourriture' && Valeur.Dollars+Achat.Nourriture.Level2.Cout >= 0 && Valeur.Nourriture < 100){
			Valeur.Dollars += Achat.Nourriture.Level2.Cout;
			Valeur.Nourriture += Achat.Nourriture.Level2.Nourriture;
			Valeur.Energie += Achat.Nourriture.Level2.Energie;
			Valeur.Pollution += Achat.Nourriture.Level2.Pollution;
			Achat.Nourriture.Level2.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/INLVL2.png'
			if (Valeur.Nourriture > 100) Valeur.Nourriture = 100;
			Creation.Level2Nombre.innerHTML = Achat.Nourriture.Level2.Achete;
			Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);
			Creation.Audio.src = 'audio/Nourriture.mp3';
			Creation.Audio.play();
		}else if (FormeAffiche == 'Industrie' && Valeur.Dollars+Achat.Industrie.Level2.Cout >= 0){
			Valeur.Dollars += Achat.Industrie.Level2.Cout;
			Valeur.Energie += Achat.Industrie.Level2.Energie;
			Valeur.Pollution += Achat.Industrie.Level2.Pollution;
			Valeur.Sante += Achat.Industrie.Level2.Sante;
			Valeur.Nourriture += Achat.Industrie.Level2.Nourriture;
			Valeur.GainDollars += Achat.Industrie.Level2.Gain;
			Achat.Industrie.Level2.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IILVL2.png'
			Creation.Level2Nombre.innerHTML = Achat.Industrie.Level2.Achete;
			Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);
			Creation.Audio.src = 'audio/Industrie.mp3';
			Creation.Audio.play();
		}else if (FormeAffiche == 'Énergie' && Valeur.Dollars+Achat.Energie.Level2.Cout >= 0 && Valeur.Energie < 100){
			Valeur.Dollars += Achat.Energie.Level2.Cout;
			Valeur.Energie += Achat.Energie.Level2.Energie;
			Valeur.Pollution += Achat.Energie.Level2.Pollution;
			Achat.Energie.Level2.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IELVL2.png'
			if (Valeur.Energie > 100) Valeur.Energie = 100;
			Creation.Level2Nombre.innerHTML = Achat.Energie.Level2.Achete;
			Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);
			Creation.Audio.src = 'audio/Energie.mp3';
			Creation.Audio.play();
		}else if (FormeAffiche == 'Santé' && Valeur.Dollars+Achat.Sante.Level2.Cout >= 0){
			if (Valeur.Techno >= 50) {
				Valeur.Dollars += Achat.Sante.Level2.Cout;
				Valeur.Energie += Achat.Sante.Level2.Energie;
				Valeur.Pollution += Achat.Sante.Level2.Pollution;
				Achat.Sante.Level2.Achete ++;
				document.body.appendChild(Creation.EffetImg);
				Creation.EffetImg.src = 'img/IPLVL2.png'
				if (Valeur.Sante > 100) Valeur.Sante = 100;
				Creation.Level2Nombre.innerHTML = Achat.Sante.Level2.Achete;
				Creation.SanteTotaux.innerHTML = (Achat.Sante.Level1.Achete+Achat.Sante.Level2.Achete+Achat.Sante.Level4.Achete+Achat.Sante.Level5.Achete);
				Creation.Audio.src = 'audio/Sante.mp3';
				Creation.Audio.play();
			}
		}else if (FormeAffiche == 'Techno' && Valeur.Dollars+Achat.Techno.Level2.Cout >= 0){
			Valeur.Dollars += Achat.Techno.Level2.Cout;
			Valeur.Energie += Achat.Techno.Level2.Energie;
			Valeur.GainTechno += Achat.Techno.Level2.Gain;
			Achat.Techno.Level2.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/ITLVL1.png'
			Creation.Level2Nombre.innerHTML = Achat.Techno.Level2.Achete;
			Creation.TechnologieTotaux.innerHTML = (Achat.Techno.Level2.Achete+Achat.Techno.Level3.Achete+Achat.Techno.Level4.Achete);
			Creation.Audio.src = 'audio/Technologie.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoBatTechno') {
				Creation.TutoP.innerHTML = "Attention, lors d'achat, vos jauges baissent. Veillez à les garder stables sous peine de périr.";
				StadeDeJeu = 'TutoJauge';
				Creation.Technologie.style.opacity = 0.5;
				Creation.Level2.style.opacity = 0.5;
				Creation.JINourriture.style.opacity = 1;
				Creation.JDNourriture.style.opacity = 1;
				Creation.JPNourriture.style.opacity = 1;
				Creation.JIEnergie.style.opacity = 1;
				Creation.JDEnergie.style.opacity = 1;
				Creation.JPEnergie.style.opacity = 1;
				Creation.JIPollution.style.opacity = 1;
				Creation.JDPollution.style.opacity = 1;
				Creation.JPPollution.style.opacity = 1;
				Creation.JISante.style.opacity = 1;
				Creation.JDSante.style.opacity = 1;
				Creation.JPSante.style.opacity = 1;
				Creation.Tuto.appendChild(Creation.TutoNext);
			}
		}
		TransitionDonne();
		Verification()
	}
}
Creation.Level2.onmouseover = function(){
	var InfoAffiche;
	if (FormeAffiche == 'Nourriture') InfoAffiche = Achat.Nourriture;
	else if (FormeAffiche == 'Industrie') InfoAffiche = Achat.Industrie;
	else if (FormeAffiche == 'Énergie') InfoAffiche = Achat.Energie;
	else if (FormeAffiche == 'Santé') InfoAffiche = Achat.Sante;
	else if (FormeAffiche == 'Techno') InfoAffiche = Achat.Techno;
	Creation.IPrix.innerHTML = InfoAffiche.Level2.Cout+'$';
	Creation.IPrix.style.color = "#CF0A1D";

	if (InfoAffiche.Level2.Gain != undefined) {
		Creation.IGain.innerHTML = '+'+InfoAffiche.Level2.Gain;
		if (FormeAffiche == "Industrie") Creation.IGain.innerHTML += "$/8s";
		else if (FormeAffiche == "Techno") Creation.IGain.innerHTML += "T/20s";
		Creation.IGain.style.color = "#16B84E";
	}else {Creation.IGain.innerHTML = '';}

	Creation.IPNourriture.innerHTML = InfoAffiche.Level2.Nourriture;
	if (InfoAffiche.Level2.Nourriture < 0) Creation.IPNourriture.style.color = "#CF0A1D";
	else Creation.IPNourriture.style.color = "#16B84E";

	Creation.IPEnergie.innerHTML = InfoAffiche.Level2.Energie;
	if (InfoAffiche.Level2.Energie < 0) Creation.IPEnergie.style.color = "#CF0A1D";
	else Creation.IPEnergie.style.color = "#16B84E";

	Creation.IPPollution.innerHTML = InfoAffiche.Level2.Pollution;
	if (InfoAffiche.Level2.Pollution < 0) Creation.IPPollution.style.color = "#CF0A1D";
	else Creation.IPPollution.style.color = "#16B84E";

	Creation.IPSante.innerHTML = InfoAffiche.Level2.Sante;
	if (InfoAffiche.Level2.Sante < 0) Creation.IPSante.style.color = "#CF0A1D";
	else Creation.IPSante.style.color = "#16B84E";

	document.body.appendChild(Creation.Info);
	InfoActuelle = true;
}
Creation.Level2.onmouseout = function(){
	document.body.removeChild(Creation.Info);
	InfoActuelle = false;
}

Creation.Level3.onclick = function(){
	if (FormeAffiche == 'Nourriture' && Valeur.Dollars+Achat.Nourriture.Level3.Cout >= 0 && Valeur.Nourriture < 100){
		if (Valeur.Techno >= 25) {
			Valeur.Dollars += Achat.Nourriture.Level3.Cout;
			Valeur.Nourriture += Achat.Nourriture.Level3.Nourriture;
			Valeur.Energie += Achat.Nourriture.Level3.Energie;
			Valeur.Pollution += Achat.Nourriture.Level3.Pollution;
			Achat.Nourriture.Level3.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/INLVL3.png'
			if (Valeur.Nourriture > 100) Valeur.Nourriture = 100;
			Creation.Level3Nombre.innerHTML = Achat.Nourriture.Level3.Achete;
			Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);
			Creation.Audio.src = 'audio/Nourriture.mp3';
			Creation.Audio.play();
	}
	}else if (FormeAffiche == 'Industrie' && Valeur.Dollars+Achat.Industrie.Level3.Cout >= 0){
		if (Valeur.Techno >= 25) {
			Valeur.Dollars += Achat.Industrie.Level3.Cout;
			Valeur.Energie += Achat.Industrie.Level3.Energie;
			Valeur.Pollution += Achat.Industrie.Level3.Pollution;
			Valeur.Sante += Achat.Industrie.Level3.Sante;
			Valeur.Nourriture += Achat.Industrie.Level3.Nourriture;
			Valeur.GainDollars += Achat.Industrie.Level3.Gain;
			Achat.Industrie.Level3.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IILVL3.png'
			Creation.Level3Nombre.innerHTML = Achat.Industrie.Level3.Achete;
			Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);
			Creation.Audio.src = 'audio/Industrie.mp3';
			Creation.Audio.play();
	}
	}else if (FormeAffiche == 'Énergie' && Valeur.Dollars+Achat.Energie.Level3.Cout >= 0 && Valeur.Energie < 100){
		if (Valeur.Techno >= 25) {
			Valeur.Dollars += Achat.Energie.Level3.Cout;
			Valeur.Energie += Achat.Energie.Level3.Energie;
			Valeur.Pollution += Achat.Energie.Level3.Pollution;
			Achat.Energie.Level3.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IELVL3.png'
			if (Valeur.Energie > 100) Valeur.Energie = 100;
			Creation.Level3Nombre.innerHTML = Achat.Energie.Level3.Achete;
			Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);
			Creation.Audio.src = 'audio/Energie.mp3';
			Creation.Audio.play();
	}
	}else if (FormeAffiche == 'Techno' && Valeur.Dollars+Achat.Techno.Level3.Cout >= 0){
		if (Valeur.Techno >= 50) {
			Valeur.Dollars += Achat.Techno.Level3.Cout;
			Valeur.Energie += Achat.Techno.Level3.Energie;
			Valeur.GainTechno += Achat.Techno.Level3.Gain;
			Achat.Techno.Level3.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/ITLVL2.png'
			Creation.Level3Nombre.innerHTML = Achat.Techno.Level3.Achete;
			Creation.TechnologieTotaux.innerHTML = (Achat.Techno.Level2.Achete+Achat.Techno.Level3.Achete+Achat.Techno.Level4.Achete);
			Creation.Audio.src = 'audio/Technologie.mp3';
			Creation.Audio.play();
		}
	}
	TransitionDonne();
	Verification()
}
Creation.Level3.onmouseover = function(){
	var InfoAffiche;
	if (FormeAffiche == 'Nourriture') InfoAffiche = Achat.Nourriture;
	else if (FormeAffiche == 'Industrie') InfoAffiche = Achat.Industrie;
	else if (FormeAffiche == 'Énergie') InfoAffiche = Achat.Energie;
	else if (FormeAffiche == 'Santé') InfoAffiche = Achat.Sante;
	else if (FormeAffiche == 'Techno') InfoAffiche = Achat.Techno;
	Creation.IPrix.innerHTML = InfoAffiche.Level3.Cout+'$';
	Creation.IPrix.style.color = "#CF0A1D";

	if (InfoAffiche.Level3.Gain != undefined) {
		Creation.IGain.innerHTML = '+'+InfoAffiche.Level3.Gain;
		if (FormeAffiche == "Industrie") Creation.IGain.innerHTML += "$/8s";
		else if (FormeAffiche == "Techno") Creation.IGain.innerHTML += "T/20s";
		Creation.IGain.style.color = "#16B84E";
	}else {Creation.IGain.innerHTML = '';}

	Creation.IPNourriture.innerHTML = InfoAffiche.Level3.Nourriture;
	if (InfoAffiche.Level3.Nourriture < 0) Creation.IPNourriture.style.color = "#CF0A1D";
	else Creation.IPNourriture.style.color = "#16B84E";

	Creation.IPEnergie.innerHTML = InfoAffiche.Level3.Energie;
	if (InfoAffiche.Level3.Energie < 0) Creation.IPEnergie.style.color = "#CF0A1D";
	else Creation.IPEnergie.style.color = "#16B84E";

	Creation.IPPollution.innerHTML = InfoAffiche.Level3.Pollution;
	if (InfoAffiche.Level3.Pollution < 0) Creation.IPPollution.style.color = "#CF0A1D";
	else Creation.IPPollution.style.color = "#16B84E";

	Creation.IPSante.innerHTML = InfoAffiche.Level3.Sante;
	if (InfoAffiche.Level3.Sante < 0) Creation.IPSante.style.color = "#CF0A1D";
	else Creation.IPSante.style.color = "#16B84E";

	document.body.appendChild(Creation.Info);
	InfoActuelle = true;
}
Creation.Level3.onmouseout = function(){
	document.body.removeChild(Creation.Info);
	InfoActuelle = false;
}

Creation.Level4.onclick = function(){
	if (StadeDeJeu == 'Game' || StadeDeJeu == 'TutoSanté') {
		if (FormeAffiche == 'Nourriture' && Valeur.Dollars+Achat.Nourriture.Level4.Cout >= 0 && Valeur.Nourriture < 100){
			if (Valeur.Techno >= 50) {
				Valeur.Dollars += Achat.Nourriture.Level4.Cout;
				Valeur.Nourriture += Achat.Nourriture.Level4.Nourriture;
				Valeur.Energie += Achat.Nourriture.Level4.Energie;
				Valeur.Pollution += Achat.Nourriture.Level4.Pollution;
				Achat.Nourriture.Level4.Achete ++;
				document.body.appendChild(Creation.EffetImg);
				Creation.EffetImg.src = 'img/INLVL4.png'
				if (Valeur.Nourriture > 100) Valeur.Nourriture = 100;
				Creation.Level4Nombre.innerHTML = Achat.Nourriture.Level4.Achete;
				Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);
				Creation.Audio.src = 'audio/Nourriture.mp3';
				Creation.Audio.play();
			}
		}else if (FormeAffiche == 'Industrie' && Valeur.Dollars+Achat.Industrie.Level4.Cout >= 0){
			if (Valeur.Techno >= 50) {
				Valeur.Dollars += Achat.Industrie.Level4.Cout;
				Valeur.Energie += Achat.Industrie.Level4.Energie;
				Valeur.Pollution += Achat.Industrie.Level4.Pollution;
				Valeur.Sante += Achat.Industrie.Level4.Sante;
				Valeur.Nourriture += Achat.Industrie.Level4.Nourriture;
				Valeur.GainDollars += Achat.Industrie.Level4.Gain;
				Achat.Industrie.Level4.Achete ++;
				document.body.appendChild(Creation.EffetImg);
				Creation.EffetImg.src = 'img/IILVL4.png'
				Creation.Level4Nombre.innerHTML = Achat.Industrie.Level4.Achete;
				Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);
				Creation.Audio.src = 'audio/Industrie.mp3';
				Creation.Audio.play();
			}
		}else if (FormeAffiche == 'Énergie' && Valeur.Dollars+Achat.Energie.Level4.Cout >= 0 && Valeur.Energie < 100){
			if (Valeur.Techno >= 50) {
				Valeur.Dollars += Achat.Energie.Level4.Cout;
				Valeur.Energie += Achat.Energie.Level4.Energie;
				Valeur.Pollution += Achat.Energie.Level4.Pollution;
				Achat.Energie.Level4.Achete ++;
				document.body.appendChild(Creation.EffetImg);
				Creation.EffetImg.src = 'img/IELVL4.png'
				if (Valeur.Energie > 100) Valeur.Energie = 100
				Creation.Level4Nombre.innerHTML = Achat.Energie.Level4.Achete;
				Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);
				Creation.Audio.src = 'audio/Energie.mp3';
				Creation.Audio.play();
			}
		}else if (FormeAffiche == 'Santé' && Valeur.Dollars+Achat.Sante.Level4.Cout >= 0){
			Valeur.Dollars += Achat.Sante.Level4.Cout;
			Valeur.Energie += Achat.Sante.Level4.Energie;
			Valeur.Pollution += Achat.Sante.Level4.Pollution;
			Valeur.Sante += Achat.Sante.Level4.Sante;
			Achat.Sante.Level4.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/ISLVL3.png'
			if (Valeur.Sante > 100) Valeur.Sante = 100;
			Creation.Level4Nombre.innerHTML = Achat.Sante.Level4.Achete;
			Creation.SanteTotaux.innerHTML = (Achat.Sante.Level1.Achete+Achat.Sante.Level2.Achete+Achat.Sante.Level4.Achete+Achat.Sante.Level5.Achete);
			Creation.Audio.src = 'audio/Sante.mp3';
			Creation.Audio.play();
			if (StadeDeJeu == 'TutoSanté') {
				Creation.TutoP.innerHTML = "Vous êtes fin prêt. Vous gagnerez de la technologie toutes les 20 secondes, en fonction de votre nombre de bâtiments technologiques. Bonne chance.";
				Creation.Tuto.style.backgroundColor = 'rgba(100,20,20,0.9)';
				Creation.Tuto.style.boxShadow = ' 0px 0px 5px 6px rgba(100,20,20,0.9)';
				Creation.Tuto.appendChild(Creation.TutoNext);
				StadeDeJeu = 'TutoFin';
				Creation.Sante.style.opacity = 0.5;
				Creation.Level4.style.opacity = 0.5;
			}
		}else if (FormeAffiche == 'Techno' && Valeur.Dollars+Achat.Techno.Level4.Cout >= 0){
			if (Valeur.Techno >= 75) {
				Valeur.Dollars += Achat.Techno.Level4.Cout;
				Valeur.Energie += Achat.Techno.Level4.Energie;
				Valeur.GainTechno += Achat.Techno.Level4.Gain;
				Achat.Techno.Level4.Achete ++;
				document.body.appendChild(Creation.EffetImg);
				Creation.EffetImg.src = 'img/ITLVL3.png'
				Creation.Level4Nombre.innerHTML = Achat.Techno.Level4.Achete;
				Creation.TechnologieTotaux.innerHTML = (Achat.Techno.Level2.Achete+Achat.Techno.Level3.Achete+Achat.Techno.Level4.Achete);
				Creation.Audio.src = 'audio/Technologie.mp3';
				Creation.Audio.play();
			}
		}
		TransitionDonne();
		Verification()
	}
}
Creation.Level4.onmouseover = function(){
	var InfoAffiche;
	if (FormeAffiche == 'Nourriture') InfoAffiche = Achat.Nourriture;
	else if (FormeAffiche == 'Industrie') InfoAffiche = Achat.Industrie;
	else if (FormeAffiche == 'Énergie') InfoAffiche = Achat.Energie;
	else if (FormeAffiche == 'Santé') InfoAffiche = Achat.Sante;
	else if (FormeAffiche == 'Techno') InfoAffiche = Achat.Techno;
	Creation.IPrix.innerHTML = InfoAffiche.Level4.Cout+'$';
	Creation.IPrix.style.color = "#CF0A1D";

	if (InfoAffiche.Level4.Gain != undefined) {
		Creation.IGain.innerHTML = '+'+InfoAffiche.Level4.Gain;
		if (FormeAffiche == "Industrie") Creation.IGain.innerHTML += "$/8s";
		else if (FormeAffiche == "Techno") Creation.IGain.innerHTML += "T/20s";
		Creation.IGain.style.color = "#16B84E";
	}else {Creation.IGain.innerHTML = '';}

	Creation.IPNourriture.innerHTML = InfoAffiche.Level4.Nourriture;
	if (InfoAffiche.Level4.Nourriture < 0) Creation.IPNourriture.style.color = "#CF0A1D";
	else Creation.IPNourriture.style.color = "#16B84E";

	Creation.IPEnergie.innerHTML = InfoAffiche.Level4.Energie;
	if (InfoAffiche.Level4.Energie < 0) Creation.IPEnergie.style.color = "#CF0A1D";
	else Creation.IPEnergie.style.color = "#16B84E";

	Creation.IPPollution.innerHTML = InfoAffiche.Level4.Pollution;
	if (InfoAffiche.Level4.Pollution < 0) Creation.IPPollution.style.color = "#CF0A1D";
	else Creation.IPPollution.style.color = "#16B84E";

	Creation.IPSante.innerHTML = InfoAffiche.Level4.Sante;
	if (InfoAffiche.Level4.Sante < 0) Creation.IPSante.style.color = "#CF0A1D";
	else Creation.IPSante.style.color = "#16B84E";

	document.body.appendChild(Creation.Info);
	InfoActuelle = true;
}
Creation.Level4.onmouseout = function(){
	document.body.removeChild(Creation.Info);
	InfoActuelle = false;
}

Creation.Level5.onclick = function(){
	if (FormeAffiche == 'Nourriture' && Valeur.Dollars+Achat.Nourriture.Level5.Cout >= 0 && Valeur.Nourriture < 100){
		if (Valeur.Techno >= 75) {
			Valeur.Dollars += Achat.Nourriture.Level5.Cout;
			Valeur.Nourriture += Achat.Nourriture.Level5.Nourriture;
			Valeur.Energie += Achat.Nourriture.Level5.Energie;
			Valeur.Pollution += Achat.Nourriture.Level5.Pollution;
			Achat.Nourriture.Level5.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/INLVL5.png'
			if (Valeur.Nourriture > 100) Valeur.Nourriture = 100;
			Creation.Level5Nombre.innerHTML = Achat.Nourriture.Level5.Achete;
			Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);
			Creation.Audio.src = 'audio/Nourriture.mp3';
			Creation.Audio.play();
		
		}
	}else if (FormeAffiche == 'Industrie' && Valeur.Dollars+Achat.Industrie.Level5.Cout >= 0){
		if (Valeur.Techno >= 75) {
			Valeur.Dollars += Achat.Industrie.Level5.Cout;
			Valeur.Energie += Achat.Industrie.Level5.Energie;
			Valeur.Pollution += Achat.Industrie.Level5.Pollution;
			Valeur.Sante += Achat.Industrie.Level5.Sante;
			Valeur.Nourriture += Achat.Industrie.Level5.Nourriture;
			Valeur.GainDollars += Achat.Industrie.Level5.Gain;
			Achat.Industrie.Level5.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IILVL5.png'
			Creation.Level4Nombre.innerHTML = Achat.Industrie.Level4.Achete;
			Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);
			Creation.Audio.src = 'audio/Industrie.mp3';
			Creation.Audio.play();
		}
	}else if (FormeAffiche == 'Énergie' && Valeur.Dollars+Achat.Energie.Level5.Cout >= 0 && Valeur.Energie < 100){
		if (Valeur.Techno >= 75) {
			Valeur.Dollars += Achat.Energie.Level5.Cout;
			Valeur.Energie += Achat.Energie.Level5.Energie;
			Valeur.Pollution += Achat.Energie.Level5.Pollution;
			Achat.Energie.Level5.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/IELVL5.png'
			if (Valeur.Energie > 100) Valeur.Energie = 100;
			Creation.Level5Nombre.innerHTML = Achat.Energie.Level5.Achete;
			Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);
			Creation.Audio.src = 'audio/Energie.mp3';
			Creation.Audio.play();
		}
	}else if (FormeAffiche == 'Santé' && Valeur.Dollars+Achat.Sante.Level5.Cout >= 0){
		if (Valeur.Techno >= 50) {
			Valeur.Dollars += Achat.Sante.Level5.Cout;
			Valeur.Energie += Achat.Sante.Level5.Energie;
			Valeur.Sante += Achat.Sante.Level5.Sante;
			Valeur.Pollution += Achat.Sante.Level5.Pollution;
			Achat.Sante.Level5.Achete ++;
			document.body.appendChild(Creation.EffetImg);
			Creation.EffetImg.src = 'img/ISLVL4.png'
			if (Valeur.Sante > 100) Valeur.Sante = 100;
			Creation.Level5Nombre.innerHTML = Achat.Sante.Level5.Achete;
			Creation.SanteTotaux.innerHTML = (Achat.Sante.Level1.Achete+Achat.Sante.Level2.Achete+Achat.Sante.Level4.Achete+Achat.Sante.Level5.Achete);
			Creation.Audio.src = 'audio/Sante.mp3';
			Creation.Audio.play();
		}
	}
	TransitionDonne();
	Verification()
}
Creation.Level5.onmouseover = function(){
	var InfoAffiche;
	if (FormeAffiche == 'Nourriture') InfoAffiche = Achat.Nourriture;
	else if (FormeAffiche == 'Industrie') InfoAffiche = Achat.Industrie;
	else if (FormeAffiche == 'Énergie') InfoAffiche = Achat.Energie;
	else if (FormeAffiche == 'Santé') InfoAffiche = Achat.Sante;
	else if (FormeAffiche == 'Techno') InfoAffiche = Achat.Techno;
	Creation.IPrix.innerHTML = InfoAffiche.Level5.Cout+'$';
	Creation.IPrix.style.color = "#CF0A1D";

	if (InfoAffiche.Level5.Gain != undefined) {
		Creation.IGain.innerHTML = '+'+InfoAffiche.Level5.Gain;
		if (FormeAffiche == "Industrie") Creation.IGain.innerHTML += "$/8s";
		else if (FormeAffiche == "Techno") Creation.IGain.innerHTML += "T/20s";
		Creation.IGain.style.color = "#16B84E";
	}else {Creation.IGain.innerHTML = '';}

	Creation.IPNourriture.innerHTML = InfoAffiche.Level5.Nourriture;
	if (InfoAffiche.Level5.Nourriture < 0) Creation.IPNourriture.style.color = "#CF0A1D";
	else Creation.IPNourriture.style.color = "#16B84E";

	Creation.IPEnergie.innerHTML = InfoAffiche.Level5.Energie;
	if (InfoAffiche.Level5.Energie < 0) Creation.IPEnergie.style.color = "#CF0A1D";
	else Creation.IPEnergie.style.color = "#16B84E";

	Creation.IPPollution.innerHTML = InfoAffiche.Level5.Pollution;
	if (InfoAffiche.Level5.Pollution < 0) Creation.IPPollution.style.color = "#CF0A1D";
	else Creation.IPPollution.style.color = "#16B84E";

	Creation.IPSante.innerHTML = InfoAffiche.Level5.Sante;
	if (InfoAffiche.Level5.Sante < 0) Creation.IPSante.style.color = "#CF0A1D";
	else Creation.IPSante.style.color = "#16B84E";

	document.body.appendChild(Creation.Info);
	InfoActuelle = true;
}
Creation.Level5.onmouseout = function(){
	document.body.removeChild(Creation.Info);
	InfoActuelle = false;
}

Creation.FinDiv1.onclick = function(){
	if (StadeDeJeu == "Choix") {
		Final();
		choix1()
	}
}

Creation.FinDiv2.onclick = function(){
	if (StadeDeJeu == "Choix") {
		Final();
		choix2()
	}
}

Creation.FinDiv3.onclick = function(){
	if (StadeDeJeu == "Choix") {
		Final();
		choix3()
	}
}

Creation.Reload.onclick = function(){
	if (StadeDeJeu == 'Reload') {
		location.reload();
	}
}

Creation.TutoNext.onclick = function(){
	if (StadeDeJeu == 'Tuto') {
		StadeDeJeu = 'TutoBarreTechno';
		Creation.JTechno.style.opacity = 1;
		Creation.TutoP.innerHTML = 'Ceci est la barre de Technologie. Vous devez la remplir entièrement pour finir le jeu.';
		document.body.removeChild(Creation.TutoSkip);
	}else if (StadeDeJeu == 'TutoBarreTechno') {
		StadeDeJeu = 'TutoAnnée';
		Creation.JTechno.style.opacity = 0.5;
		Creation.JAnnee.style.opacity = 1;
		Creation.TutoP.innerHTML = 'Voici votre temps. Vous n\'avez que 300 ans avant la fin.';
	}else if (StadeDeJeu == 'TutoAnnée') {
		StadeDeJeu = 'TutoTechno';
		Creation.Technologie.style.opacity = 1;
		Creation.JAnnee.style.opacity = 0.5;
		Creation.TutoP.innerHTML = 'Vous pouvez acheter, ici, des bâtiments Technologiques pour en remplir la barre.';
		Creation.Tuto.removeChild(Creation.TutoNext);
	}else if (StadeDeJeu == 'TutoJauge') {
		StadeDeJeu = 'TutoÉnergie';
		Creation.JINourriture.style.opacity = 0.5;
		Creation.JDNourriture.style.opacity = 0.5;
		Creation.JPNourriture.style.opacity = 0.5;
		Creation.JIEnergie.style.opacity = 0.5;
		Creation.JDEnergie.style.opacity = 0.5;
		Creation.JPEnergie.style.opacity = 0.5;
		Creation.JIPollution.style.opacity = 0.5;
		Creation.JDPollution.style.opacity = 0.5;
		Creation.JPPollution.style.opacity = 0.5;
		Creation.JISante.style.opacity = 0.5;
		Creation.JDSante.style.opacity = 0.5;
		Creation.JPSante.style.opacity = 0.5;
		Creation.Energie.style.opacity = 1;
		Creation.Level1.style.opacity = 1;
		Creation.TutoP.innerHTML = "Remontez votre jauge d'Énergie en achetant un batiment énergétique.";
		Creation.Tuto.removeChild(Creation.TutoNext);
	}else if (StadeDeJeu == 'TutoArgent') {
		StadeDeJeu = 'TutoIndustrie';
		Creation.JDollars.style.opacity = 0.5;
		Creation.Industrie.style.opacity = 1;
		Creation.TutoP.innerHTML = "Acheter un bâtiment industriel augmente votre gain d'argent par seconde.";
		Creation.Tuto.removeChild(Creation.TutoNext);
	}else if (StadeDeJeu == 'TutoFin') {
		TutoFin();
	}
}

Creation.TutoSkip.onclick = function(){
	if (StadeDeJeu == 'Tuto') {	
		TutoFin();
	}
}

Creation.Credits.onmouseover = function(){
	document.body.appendChild(Creation.CreditsImg);
}

Creation.CreditsImg.onmouseout = function(){
	document.body.removeChild(Creation.CreditsImg);
}

function Menu(){
	Creation.Titre.innerHTML = "Humanity's";
	Creation.Titre.style.fontSize = window.innerHeight/10+'px';
	Creation.Titre.style.left = (window.innerWidth/2)-(window.innerHeight/2.4)+"px";
	Creation.Titre.style.top = window.innerHeight/50+'px';
	Creation.Titre.style.color = "white";
	Creation.Titre.style.position = 'absolute';
	Creation.TitreGif.style.width = window.innerWidth/3+'px';
	Creation.TitreGif.style.right = (window.innerWidth/2)-(window.innerHeight/1.9)+"px";
	Creation.TitreGif.style.top = window.innerHeight/10+'px';
	Creation.TitreGif.style.position = 'absolute';
	Creation.TitreGif.src = 'img/Evasion.gif';
	Creation.Play.src = "img/Play.gif";
	Creation.Play.style.left = (window.innerWidth/2)-(window.innerHeight/6)+'px';
	Creation.Play.style.top = window.innerHeight*0.78+'px';
	Creation.Play.style.width = window.innerWidth/5.5+'px';
	Creation.Play.style.position = 'absolute';
	Creation.Play.style.cursor = 'pointer';

	Creation.Credits.src = 'img/Credit.png';
	Creation.Credits.style.position = 'absolute';
	Creation.Credits.style.bottom = window.innerHeight/30+'px';
	Creation.Credits.style.right = window.innerWidth/30+'px';
	Creation.Credits.style.width = window.innerWidth/30+'px';

	Creation.CreditsImg.src = 'img/CreditImg.png';
	Creation.CreditsImg.style.position = 'absolute';
	Creation.CreditsImg.style.bottom = '0px';
	Creation.CreditsImg.style.right = '0px';
	Creation.CreditsImg.style.height = window.innerHeight/4+'px';

	Creation.Audio.style.position = 'absolute';
	Creation.Musique.style.position = 'absolute';
	Creation.Musique.src = 'audio/Musique.mp3';
	Creation.Musique.loop = true
	Creation.Musique.play();

	Creation.Video.src = 'img/Intro.mp4';
	Creation.Video.style.width = window.innerWidth/100*70+'px';
	Creation.Video.style.height = window.innerHeight/100*70+'px';
	Creation.Video.style.position = 'absolute';
	Creation.Video.style.top = window.innerHeight/100*15+'px';
	Creation.Video.style.left = window.innerWidth/100*15+'px';

	document.body.appendChild(Creation.Titre);
	document.body.appendChild(Creation.TitreGif);
	document.body.appendChild(Creation.Play);
	document.body.appendChild(Creation.Audio);
	document.body.appendChild(Creation.Credits);
}
Menu();

function CreerJeu(){
	// Effets ------------------------------------------------------------------
	Creation.EffetImg.id = 'theImg';
	Creation.EffetImg.style.position = 'absolute';
	Creation.EffetImg.style.width = (window.innerWidth/100)*30+'px';
	Creation.EffetImg.style.top = window.innerWidth/10+'px';
	Creation.EffetImg.style.left = (window.innerWidth/100)*35+'px';
	Creation.EffetImg.style.width = 0.6;

	// Jauges ------------------------------------------------------------------
	Creation.Jauges.style.position = 'absolute';
	Creation.Jauges.style.top = window.innerHeight/50+'px';
	Creation.Jauges.style.left = window.innerWidth/50+'px';
	Creation.Jauges.style.opacity = opacite;

	Creation.JDollars.innerHTML = Valeur.Dollars+"$";
	Creation.JDollars.style.position = "absolute";
	Creation.JDollars.style.color = "#FFF";
	Creation.JDollars.style.fontSize = "50px";
	Creation.JDollars.style.left = "70px";
	Creation.JDollars.style.top = "220px";
	Creation.JDollars.style.opacity = 0.2;

	Creation.JDollarsGain.innerHTML = "+"+Valeur.GainDollars+'$/8S';
	Creation.JDollarsGain.style.position = "absolute";
	Creation.JDollarsGain.style.color = "#FFF";
	Creation.JDollarsGain.style.fontSize = "20px";
	Creation.JDollarsGain.style.left = "70px";
	Creation.JDollarsGain.style.top = "302px";
	Creation.JDollarsGain.style.opacity = 0.5;

	Creation.JINourriture.src = "img/JNourriture.png";
	Creation.JINourriture.style.width = "50px";
	Creation.JINourriture.style.position = "absolute";
	Creation.JINourriture.style.top = Jauges.HauteurN+'px';
	Creation.JINourriture.className = 'IconeJauge';
	Creation.JINourriture.id = "IconeJaugeN";
	Creation.JDNourriture.className = "Jauges";
	Creation.JDNourriture.style.top = Jauges.HauteurN+16+"px";
	Creation.JDNourriture.style.left = Jauges.LargeurNEPS+"px";
	Creation.JPNourriture.innerHTML = 'I';
	Creation.JPNourriture.className = "BarreJauge";
	Creation.JPNourriture.style.marginLeft = Valeur.Nourriture-1+"%";
	Creation.JINourriture.style.opacity = 0.2;
	Creation.JDNourriture.style.opacity = 0.2;
	Creation.JPNourriture.style.opacity = 0.2;

	Creation.JIEnergie.src = "img/JEnergie.png";
	Creation.JIEnergie.style.width = "50px";
	Creation.JIEnergie.style.position = "absolute";
	Creation.JIEnergie.style.top = Jauges.HauteurE+'px';
	Creation.JIEnergie.className = 'IconeJauge';
	Creation.JIEnergie.id = "IconeJaugeE";
	Creation.JDEnergie.className = "Jauges";
	Creation.JDEnergie.style.top = Jauges.HauteurE+16+"px";
	Creation.JDEnergie.style.left = Jauges.LargeurNEPS+"px";
	Creation.JPEnergie.innerHTML = 'I';
	Creation.JPEnergie.className = "BarreJauge";
	Creation.JPEnergie.style.marginLeft = Valeur.Energie-1+"%";
	Creation.JIEnergie.style.opacity = 0.2;
	Creation.JDEnergie.style.opacity = 0.2;
	Creation.JPEnergie.style.opacity = 0.2;

	Creation.JIPollution.src = "img/JPollution.png";
	Creation.JIPollution.style.width = "50px";
	Creation.JIPollution.style.position = "absolute";
	Creation.JIPollution.style.top = Jauges.HauteurP+'px';
	Creation.JIPollution.className = 'IconeJauge';
	Creation.JIPollution.id = "IconeJaugeP";
	Creation.JDPollution.className = "Jauges";
	Creation.JDPollution.style.top = Jauges.HauteurP+16+"px";
	Creation.JDPollution.style.left = Jauges.LargeurNEPS+"px";
	Creation.JPPollution.innerHTML = 'I';
	Creation.JPPollution.className = "BarreJauge";
	Creation.JPPollution.style.marginLeft = Valeur.Pollution-1+"%";
	Creation.JIPollution.style.opacity = 0.2;
	Creation.JDPollution.style.opacity = 0.2;
	Creation.JPPollution.style.opacity = 0.2;

	Creation.JISante.src = "img/JSante.png";
	Creation.JISante.style.width = "50px";
	Creation.JISante.style.position = "absolute";
	Creation.JISante.style.top = Jauges.HauteurS+'px';
	Creation.JISante.className = 'IconeJauge';
	Creation.JISante.id = "IconeJaugeS";
	Creation.JDSante.className = "Jauges";
	Creation.JDSante.style.top = Jauges.HauteurS+16+"px";
	Creation.JDSante.style.left = Jauges.LargeurNEPS+"px";
	Creation.JPSante.innerHTML = 'I';
	Creation.JPSante.className = "BarreJauge";
	Creation.JPSante.style.marginLeft = Valeur.Sante-1+"%";
	Creation.JISante.style.opacity = 0.2;
	Creation.JDSante.style.opacity = 0.2;
	Creation.JPSante.style.opacity = 0.2;

	// Techno ------------------------------------------------------------------
	Creation.JTechno.style.position = 'absolute';
	Creation.JTechno.style.top = window.innerHeight/20+'px';
	Creation.JTechno.style.left = window.innerWidth/2 - window.innerHeight/4+'px';
	Creation.JTechno.style.opacity = opacite;
	Creation.JTechno.style.height = "30px";
	Creation.JTechno.style.width = window.innerHeight/2+"px";
	Creation.JTechno.className = "Jauge_Techno";

	Creation.JDTechno.style.backgroundColor = "rgba(180, 120, 20, 0.85)";
	Creation.JDTechno.style.height = "30px";
	Creation.JDTechno.style.width = Valeur.Techno+"%";

	// Annee ------------------------------------------------------------------
	Creation.JAnnee.innerHTML = Valeur.Annee;
	Creation.JAnnee.style.position = "absolute";
	Creation.JAnnee.style.color = "#FFF";
	Creation.JAnnee.style.fontSize = "50px";
	Creation.JAnnee.style.right = "100px";
	Creation.JAnnee.style.opacity = opacite;
	Creation.JAnnee.style.top = window.innerHeight/50-45+"px";
	Creation.JAnnee.className = 'annee';

	// Tuto ------------------------------------------------------------------
	Creation.Tuto.style.position = 'absolute';
	Creation.Tuto.style.width = window.innerWidth/4+'px';
	Creation.Tuto.style.bottom = window.innerHeight/2.6+'px';
	Creation.Tuto.style.right = window.innerWidth/25+'px';
	Creation.Tuto.style.cursor = 'default';
	Creation.Tuto.style.opacity = opacite;
	Creation.Tuto.className = 'DivFin';

	Creation.TutoP.style.fontSize = window.innerHeight/37+'px';
	Creation.TutoP.innerHTML = 'Bienvenue, vous apprendrez ici les bases du jeu. Cliquez sur Suivant.';

	Creation.TutoNext.style.fontSize = window.innerHeight/40+'px';
	Creation.TutoNext.style.position = 'relative';
	Creation.TutoNext.style.margin = '0 auto';
	Creation.TutoNext.style.padding = '10';
	Creation.TutoNext.style.border = '2px solid #FFF';
	Creation.TutoNext.style.borderRadius = '10px';
	Creation.TutoNext.style.width = window.innerHeight/9+'px';
	Creation.TutoNext.style.cursor = 'pointer';
	Creation.TutoNext.innerHTML = 'Suivant';

	Creation.TutoSkip.innerHTML = 'PASSER';
	Creation.TutoSkip.className = "Skip";
	Creation.TutoSkip.style.right = window.innerWidth/50+"px";
	Creation.TutoSkip.style.bottom = window.innerHeight/50+"px";
	Creation.TutoSkip.style.opacity = opacite;

	// Clique ------------------------------------------------------------------
	Creation.Clique.style.position = 'absolute';
	Creation.Clique.style.top = Clique.HauteurDiv+'px';
	Creation.Clique.style.left = Clique.LargeurDiv+'px';
	Creation.Clique.style.opacity = opacite;

	Creation.Nourriture.src = 'img/Nourriture.png';
	Creation.Nourriture.style.width = window.innerHeight/12+'px';
	Creation.Nourriture.style.position = 'absolute';
	Creation.Nourriture.style.top = Clique.HauteurN+'px';
	Creation.Nourriture.style.left = Clique.LargeurN+'px';
	Creation.Nourriture.style.opacity = 0.2;
	Creation.Nourriture.className = 'icone';

	Creation.NourritureTotaux.style.position = 'absolute';
	Creation.NourritureTotaux.style.top = (Clique.HauteurN-15)+'px';
	Creation.NourritureTotaux.style.margin = '0px';
	Creation.NourritureTotaux.style.left = (Clique.LargeurN+window.innerWidth/36)+'px';
	Creation.NourritureTotaux.style.fontSize = window.innerHeight/40+'px';
	Creation.NourritureTotaux.style.color = 'white';
	Creation.NourritureTotaux.className = 'Nombre';
	Creation.NourritureTotaux.style.padding = '0px '+window.innerWidth/110+'px';
	Creation.NourritureTotaux.style.opacity = 0.2;
	Creation.NourritureTotaux.innerHTML = (Achat.Nourriture.Level1.Achete+Achat.Nourriture.Level2.Achete+Achat.Nourriture.Level3.Achete+Achat.Nourriture.Level4.Achete+Achat.Nourriture.Level5.Achete);

	Creation.Industrie.src = 'img/Industrie.png';
	Creation.Industrie.style.width = window.innerHeight/12+'px';
	Creation.Industrie.style.position = 'absolute';
	Creation.Industrie.style.top = Clique.HauteurI+'px';
	Creation.Industrie.style.left = Clique.LargeurI+'px';
	Creation.Industrie.style.opacity = 0.2;
	Creation.Industrie.className = 'icone';

	Creation.IndustrieTotaux.style.position = 'absolute';
	Creation.IndustrieTotaux.style.top = (Clique.HauteurI-15)+'px';
	Creation.IndustrieTotaux.style.margin = '0px';
	Creation.IndustrieTotaux.style.left = (Clique.LargeurI+window.innerWidth/36)+'px';
	Creation.IndustrieTotaux.style.fontSize = window.innerHeight/40+'px';
	Creation.IndustrieTotaux.style.color = 'white';
	Creation.IndustrieTotaux.className = 'Nombre';
	Creation.IndustrieTotaux.style.padding = '0px '+window.innerWidth/110+'px';
	Creation.IndustrieTotaux.style.opacity = 0.2;
	Creation.IndustrieTotaux.innerHTML = (Achat.Industrie.Level1.Achete+Achat.Industrie.Level2.Achete+Achat.Industrie.Level3.Achete+Achat.Industrie.Level4.Achete+Achat.Industrie.Level5.Achete);

	Creation.Energie.src = 'img/Energie.png';
	Creation.Energie.style.width = window.innerHeight/12+'px';
	Creation.Energie.style.position = 'absolute';
	Creation.Energie.style.top = Clique.HauteurE+'px';
	Creation.Energie.style.left = Clique.LargeurE+'px';
	Creation.Energie.style.opacity = 0.2;
	Creation.Energie.className = 'icone';

	Creation.EnergieTotaux.style.position = 'absolute';
	Creation.EnergieTotaux.style.top = (Clique.HauteurE-15)+'px';
	Creation.EnergieTotaux.style.margin = '0px';
	Creation.EnergieTotaux.style.left = (Clique.LargeurE+window.innerWidth/36)+'px';
	Creation.EnergieTotaux.style.fontSize = window.innerHeight/40+'px';
	Creation.EnergieTotaux.style.color = 'white';
	Creation.EnergieTotaux.className = 'Nombre';
	Creation.EnergieTotaux.style.padding = '0px '+window.innerWidth/110+'px';
	Creation.EnergieTotaux.style.opacity = 0.2;
	Creation.EnergieTotaux.innerHTML = (Achat.Energie.Level1.Achete+Achat.Energie.Level2.Achete+Achat.Energie.Level3.Achete+Achat.Energie.Level4.Achete+Achat.Energie.Level5.Achete);

	Creation.Sante.src = 'img/Sante.png';
	Creation.Sante.style.width = window.innerHeight/12+'px';
	Creation.Sante.style.position = 'absolute';
	Creation.Sante.style.top = Clique.HauteurS+'px';
	Creation.Sante.style.left = Clique.LargeurS+'px';
	Creation.Sante.style.opacity = 0.2;
	Creation.Sante.className = 'icone';

	Creation.SanteTotaux.style.position = 'absolute';
	Creation.SanteTotaux.style.top = (Clique.HauteurS-15)+'px';
	Creation.SanteTotaux.style.margin = '0px';
	Creation.SanteTotaux.style.left = (Clique.LargeurS+window.innerWidth/36)+'px';
	Creation.SanteTotaux.style.fontSize = window.innerHeight/40+'px';
	Creation.SanteTotaux.style.color = 'white';
	Creation.SanteTotaux.className = 'Nombre';
	Creation.SanteTotaux.style.padding = '0px '+window.innerWidth/110+'px';
	Creation.SanteTotaux.style.opacity = 0.2;
	Creation.SanteTotaux.innerHTML = (Achat.Sante.Level1.Achete+Achat.Sante.Level2.Achete+Achat.Sante.Level4.Achete+Achat.Sante.Level5.Achete);

	Creation.Technologie.src = 'img/Techno.png';
	Creation.Technologie.style.width = window.innerHeight/12+'px';
	Creation.Technologie.style.position = 'absolute';
	Creation.Technologie.style.top = Clique.HauteurT+'px';
	Creation.Technologie.style.left = Clique.LargeurT+'px';
	Creation.Technologie.style.opacity = 0.2;
	Creation.Technologie.className = 'icone';

	Creation.TechnologieTotaux.style.position = 'absolute';
	Creation.TechnologieTotaux.style.top = (Clique.HauteurT-15)+'px';
	Creation.TechnologieTotaux.style.margin = '0px';
	Creation.TechnologieTotaux.style.left = (Clique.LargeurT+window.innerWidth/36)+'px';
	Creation.TechnologieTotaux.style.fontSize = window.innerHeight/40+'px';
	Creation.TechnologieTotaux.style.color = 'white';
	Creation.TechnologieTotaux.className = 'Nombre';
	Creation.TechnologieTotaux.style.padding = '0px '+window.innerWidth/110+'px';
	Creation.TechnologieTotaux.style.opacity = 0.2;
	Creation.TechnologieTotaux.innerHTML = (Achat.Techno.Level2.Achete+Achat.Techno.Level3.Achete+Achat.Techno.Level4.Achete);

	Creation.Level1.style.width = window.innerHeight/10+'px';
	Creation.Level1.style.position = 'absolute';
	Creation.Level1.style.top = window.innerHeight-window.innerHeight/7.5+'px';
	Creation.Level1.style.left = window.innerWidth/2-290+'px';

	Creation.Level1Nombre.style.position = 'absolute';
	Creation.Level1Nombre.style.bottom = window.innerHeight/50+'px';
	Creation.Level1Nombre.style.margin = '0px';
	Creation.Level1Nombre.style.left = (window.innerWidth/2-290)+(window.innerHeight/30)+'px';
	Creation.Level1Nombre.style.fontSize = window.innerHeight/60+'px';
	Creation.Level1Nombre.style.color = 'white';
	Creation.Level1Nombre.className = 'Nombre';
	Creation.Level1Nombre.style.height = window.innerHeight/35+'px';
	Creation.Level1Nombre.style.padding = '0px '+window.innerWidth/200+'px';

	Creation.Level2.style.width = window.innerHeight/10+'px';
	Creation.Level2.style.position = 'absolute';
	Creation.Level2.style.top = window.innerHeight-window.innerHeight/7.5+'px';
	Creation.Level2.style.left = window.innerWidth/2-170+'px';

	Creation.Level2Nombre.style.position = 'absolute';
	Creation.Level2Nombre.style.bottom = window.innerHeight/50+'px';
	Creation.Level2Nombre.style.margin = '0px';
	Creation.Level2Nombre.style.left = (window.innerWidth/2-170)+(window.innerHeight/30)+'px';
	Creation.Level2Nombre.style.fontSize = window.innerHeight/60+'px';
	Creation.Level2Nombre.style.color = 'white';
	Creation.Level2Nombre.className = 'Nombre';
	Creation.Level2Nombre.style.height = window.innerHeight/35+'px';
	Creation.Level2Nombre.style.padding = '0px '+window.innerWidth/200+'px';

	Creation.Level3.style.width = window.innerHeight/10+'px';
	Creation.Level3.style.position = 'absolute';
	Creation.Level3.style.top = window.innerHeight-window.innerHeight/7.5+'px';
	Creation.Level3.style.left = window.innerWidth/2-50+'px';

	Creation.Level3Nombre.style.position = 'absolute';
	Creation.Level3Nombre.style.bottom = window.innerHeight/50+'px';
	Creation.Level3Nombre.style.margin = '0px';
	Creation.Level3Nombre.style.left = (window.innerWidth/2-50)+(window.innerHeight/30)+'px';
	Creation.Level3Nombre.style.fontSize = window.innerHeight/60+'px';
	Creation.Level3Nombre.style.color = 'white';
	Creation.Level3Nombre.className = 'Nombre';
	Creation.Level3Nombre.style.height = window.innerHeight/35+'px';
	Creation.Level3Nombre.style.padding = '0px '+window.innerWidth/200+'px';

	Creation.Level4.style.width = window.innerHeight/10+'px';
	Creation.Level4.style.position = 'absolute';
	Creation.Level4.style.top = window.innerHeight-window.innerHeight/7.5+'px';
	Creation.Level4.style.left = window.innerWidth/2+70+'px';

	Creation.Level4Nombre.style.position = 'absolute';
	Creation.Level4Nombre.style.bottom = window.innerHeight/50+'px';
	Creation.Level4Nombre.style.margin = '0px';
	Creation.Level4Nombre.style.left = (window.innerWidth/2+70)+(window.innerHeight/30)+'px';
	Creation.Level4Nombre.style.fontSize = window.innerHeight/60+'px';
	Creation.Level4Nombre.style.color = 'white';
	Creation.Level4Nombre.className = 'Nombre';
	Creation.Level4Nombre.style.height = window.innerHeight/35+'px';
	Creation.Level4Nombre.style.padding = '0px '+window.innerWidth/200+'px';

	Creation.Level5.style.width = window.innerHeight/10+'px';
	Creation.Level5.style.position = 'absolute';
	Creation.Level5.style.top = window.innerHeight-window.innerHeight/7.5+'px';;
	Creation.Level5.style.left = window.innerWidth/2+190+'px';

	Creation.Level5Nombre.style.position = 'absolute';
	Creation.Level5Nombre.style.bottom = window.innerHeight/50+'px';
	Creation.Level5Nombre.style.margin = '0px';
	Creation.Level5Nombre.style.left = (window.innerWidth/2+190)+(window.innerHeight/30)+'px';
	Creation.Level5Nombre.style.fontSize = window.innerHeight/60+'px';
	Creation.Level5Nombre.style.color = 'white';
	Creation.Level5Nombre.className = 'Nombre';
	Creation.Level5Nombre.style.height = window.innerHeight/35+'px';
	Creation.Level5Nombre.style.padding = '0px '+window.innerWidth/200+'px';

	// Info ------------------------------------------------------------------
	Creation.Info.style.position = 'absolute';
	Creation.Info.style.height = window.innerHeight/3+'px';
	Creation.Info.style.width = window.innerWidth/4+'px';
	Creation.Info.style.right = window.innerWidth/100+'px';
	Creation.Info.style.bottom = window.innerHeight/50+'px';

	Creation.IInfo.style.width = '100%';
	Creation.IInfo.style.height = '100%';
	Creation.IInfo.style.position = 'absolute';

	Creation.IPrix.style.position = 'absolute';
	Creation.IPrix.style.top = window.innerHeight/4/6+'px';
	Creation.IPrix.style.left = window.innerWidth/4/20+'px';
	Creation.IPrix.style.margin = '0px';
	Creation.IPrix.style.fontSize = window.innerHeight/4/5+'px';

	Creation.IGain.style.position = 'absolute';
	Creation.IGain.style.top = window.innerHeight/4/6+'px';
	Creation.IGain.style.right = window.innerWidth/4/10+'px';
	Creation.IGain.style.margin = '0px';
	Creation.IGain.style.fontSize = window.innerHeight/4/5+'px';

	Creation.IINourriture.style.position = 'absolute';
	Creation.IINourriture.style.top = window.innerHeight/4/1.9+'px';
	Creation.IINourriture.style.left = window.innerWidth/4/20+'px';
	Creation.IINourriture.style.margin = '0px';
	Creation.IINourriture.style.width = window.innerHeight/4/4+'px';
	Creation.IINourriture.src = 'img/JNourriture.png';

	Creation.IPNourriture.style.position = 'absolute';
	Creation.IPNourriture.style.top = window.innerHeight/4/1.9+'px';
	Creation.IPNourriture.style.left = (window.innerWidth/4/20+window.innerHeight/4/3)+'px';
	Creation.IPNourriture.style.margin = '0px';
	Creation.IPNourriture.style.fontSize = window.innerHeight/4/5+'px';

	Creation.IIEnergie.style.position = 'absolute';
	Creation.IIEnergie.style.top = window.innerHeight/4/1.9+'px';
	Creation.IIEnergie.style.left = window.innerWidth/4/2+'px';
	Creation.IIEnergie.style.margin = '0px';
	Creation.IIEnergie.style.width = window.innerHeight/4/4+'px';
	Creation.IIEnergie.src = 'img/JEnergie.png';

	Creation.IPEnergie.style.position = 'absolute';
	Creation.IPEnergie.style.top = window.innerHeight/4/1.9+'px';
	Creation.IPEnergie.style.left = (window.innerWidth/4/2+window.innerHeight/4/3)+'px';
	Creation.IPEnergie.style.margin = '0px';
	Creation.IPEnergie.style.fontSize = window.innerHeight/4/5+'px';

	Creation.IIPollution.style.position = 'absolute';
	Creation.IIPollution.style.top = window.innerHeight/4/1.1+'px';
	Creation.IIPollution.style.left = window.innerWidth/4/20+'px';
	Creation.IIPollution.style.margin = '0px';
	Creation.IIPollution.style.width = window.innerHeight/4/4+'px';
	Creation.IIPollution.src = 'img/JPollution.png';

	Creation.IPPollution.style.position = 'absolute';
	Creation.IPPollution.style.top = window.innerHeight/4/1.1+'px';
	Creation.IPPollution.style.left = (window.innerWidth/4/20+window.innerHeight/4/3)+'px';
	Creation.IPPollution.style.margin = '0px';
	Creation.IPPollution.style.fontSize = window.innerHeight/4/5+'px';

	Creation.IISante.style.position = 'absolute';
	Creation.IISante.style.top = window.innerHeight/4/1.1+'px';
	Creation.IISante.style.left = window.innerWidth/4/2+'px';
	Creation.IISante.style.margin = '0px';
	Creation.IISante.style.width = window.innerHeight/4/4+'px';
	Creation.IISante.src = 'img/JSante.png';

	Creation.IPSante.style.position = 'absolute';
	Creation.IPSante.style.top = window.innerHeight/4/1.1+'px';
	Creation.IPSante.style.left = (window.innerWidth/4/2+window.innerHeight/4/3)+'px';
	Creation.IPSante.style.margin = '0px';
	Creation.IPSante.style.fontSize = window.innerHeight/4/5+'px';

	// Evenement ------------------------------------------------------------------
	Creation.AlertDiv.style.position = 'absolute';
	Creation.AlertDiv.style.top = window.innerHeight/6+'px';
	Creation.AlertDiv.style.right = window.innerWidth/25+'px';
	Creation.AlertDiv.style.width = window.innerWidth/3+'px';
	Creation.AlertDiv.style.textAlign = 'right';

	Creation.AlertP.style.fontSize = window.innerHeight/42+'px';
	Creation.AlertP.style.color = "rgb(170,30,30)";

	// Evenement ------------------------------------------------------------------
	Creation.Event.style.position = 'absolute';
	Creation.Event.style.top = window.innerHeight/3+'px';
	Creation.Event.style.right = '0px';
	Creation.Event.style.margin = '0px';
	Creation.Event.style.width = window.innerHeight/2+'px';

	// Placement ------------------------------------------------------------------
	
	// Jauges
	document.body.appendChild(Creation.Jauges);
	Creation.Jauges.appendChild(Creation.JDollars);
	Creation.Jauges.appendChild(Creation.JDollarsGain);
	Creation.Jauges.appendChild(Creation.JDNourriture);
	Creation.Jauges.appendChild(Creation.JINourriture);
	Creation.JDNourriture.appendChild(Creation.JPNourriture);
	Creation.Jauges.appendChild(Creation.JDEnergie);
	Creation.Jauges.appendChild(Creation.JIEnergie);
	Creation.JDEnergie.appendChild(Creation.JPEnergie);
	Creation.Jauges.appendChild(Creation.JDPollution);
	Creation.Jauges.appendChild(Creation.JIPollution);
	Creation.JDPollution.appendChild(Creation.JPPollution);
	Creation.Jauges.appendChild(Creation.JDSante);
	Creation.Jauges.appendChild(Creation.JISante);
	Creation.JDSante.appendChild(Creation.JPSante);
	// Techno
	document.body.appendChild(Creation.JTechno);
	Creation.JTechno.appendChild(Creation.JDTechno);

	// Annee
	document.body.appendChild(Creation.JAnnee);

	// Tuto
	document.body.appendChild(Creation.Tuto);
	Creation.Tuto.appendChild(Creation.TutoP);
	Creation.Tuto.appendChild(Creation.TutoNext);
	document.body.appendChild(Creation.TutoSkip);

	// Clique
	document.body.appendChild(Creation.Clique);
	Creation.Clique.appendChild(Creation.NourritureTotaux);
	Creation.Clique.appendChild(Creation.Nourriture);
	Creation.Clique.appendChild(Creation.IndustrieTotaux);
	Creation.Clique.appendChild(Creation.Industrie);
	Creation.Clique.appendChild(Creation.EnergieTotaux);
	Creation.Clique.appendChild(Creation.Energie);
	Creation.Clique.appendChild(Creation.SanteTotaux);
	Creation.Clique.appendChild(Creation.Sante);
	Creation.Clique.appendChild(Creation.TechnologieTotaux);
	Creation.Clique.appendChild(Creation.Technologie);

	// Info
	Creation.Info.appendChild(Creation.IInfo);
	Creation.Info.appendChild(Creation.IPrix);
	Creation.Info.appendChild(Creation.IGain);
	Creation.Info.appendChild(Creation.IINourriture);
	Creation.Info.appendChild(Creation.IPNourriture);
	Creation.Info.appendChild(Creation.IIEnergie);
	Creation.Info.appendChild(Creation.IPEnergie);
	Creation.Info.appendChild(Creation.IIPollution);
	Creation.Info.appendChild(Creation.IPPollution);
	Creation.Info.appendChild(Creation.IISante);
	Creation.Info.appendChild(Creation.IPSante);

	// Alert
	document.body.appendChild(Creation.AlertDiv);
	Creation.AlertDiv.appendChild(Creation.AlertP);

	// Event
	document.body.appendChild(Creation.Event);
}

function CreerFin(){
	Creation.FinDiv1.style.width = window.innerWidth/4+'px';
	Creation.FinDiv1.style.height = window.innerHeight/1.5+'px';
	Creation.FinDiv1.style.top = window.innerHeight/2/3+'px';
	Creation.FinDiv1.style.left = window.innerWidth/4/4+'px';
	Creation.FinDiv1.className = 'DivFin';
	Creation.FinDiv1.style.opacity = opacite;

	Creation.FinTxt1.innerHTML = 'Resterez-vous pour lancer la fusée?';
	Creation.FinTxt1.style.fontSize = window.innerHeight/30+'px';
	Creation.FinTxt1.style.display = 'block';
	Creation.FinTxt1.style.marginTop = window.innerHeight/15+'px';

	Creation.FinImg1.style.width = '80%';
	Creation.FinImg1.style.marginTop = window.innerHeight/50+'px';
	Creation.FinImg1.src = 'img/Choix1.png';

	Creation.FinDiv2.style.width = window.innerWidth/4+'px';
	Creation.FinDiv2.style.height = window.innerHeight/1.5+'px';
	Creation.FinDiv2.style.top = window.innerHeight/2/3+'px';
	Creation.FinDiv2.style.left = window.innerWidth/2-window.innerWidth/7.5+'px';
	Creation.FinDiv2.className = 'DivFin';
	Creation.FinDiv2.style.opacity = opacite;

	Creation.FinTxt2.innerHTML = 'Prendrez-vous le risque de détruire l\'astéroïde ?';
	Creation.FinTxt2.style.fontSize = window.innerHeight/30+'px';
	Creation.FinTxt2.style.display = 'block';
	Creation.FinTxt2.style.marginTop = window.innerHeight/15 +'px';

	Creation.FinImg2.style.width = '80%';
	Creation.FinImg2.style.marginTop = window.innerHeight/50+'px';
	Creation.FinImg2.src = 'img/Choix2.png';

	Creation.FinDiv3.style.width = window.innerWidth/4+'px';
	Creation.FinDiv3.style.height = window.innerHeight/1.5+'px';
	Creation.FinDiv3.style.top = window.innerHeight/2/3+'px';
	Creation.FinDiv3.style.right = window.innerWidth/4/4+'px';
	Creation.FinDiv3.className = 'DivFin';
	Creation.FinDiv3.style.opacity = opacite;

	Creation.FinTxt3.innerHTML = 'Partirez-vous de la planète avec un groupe d\'élu?';
	Creation.FinTxt3.style.fontSize = window.innerHeight/30+'px';
	Creation.FinTxt3.style.display = 'block';
	Creation.FinTxt3.style.marginTop = window.innerHeight/15+'px';

	Creation.FinImg3.style.width = '80%';
	Creation.FinImg3.style.marginTop = window.innerHeight/50+'px';
	Creation.FinImg3.src = 'img/Choix3.png';

	document.body.appendChild(Creation.FinDiv1);
	Creation.FinDiv1.appendChild(Creation.FinTxt1);
	Creation.FinDiv1.appendChild(Creation.FinImg1);
	document.body.appendChild(Creation.FinDiv2);
	Creation.FinDiv2.appendChild(Creation.FinTxt2);
	Creation.FinDiv2.appendChild(Creation.FinImg2);
	document.body.appendChild(Creation.FinDiv3);
	Creation.FinDiv3.appendChild(Creation.FinTxt3);
	Creation.FinDiv3.appendChild(Creation.FinImg3);
}

function CreerLoose(){
	Creation.Final.style.width = window.innerWidth/2+'px';
	Creation.Final.style.height = window.innerHeight/1.5+'px';
	Creation.Final.style.top = window.innerHeight/2/3+'px';
	Creation.Final.style.left = window.innerWidth/4+'px';
	Creation.Final.style.opacity = opacite;
	Creation.Final.style.cursor = 'default';
	Creation.Final.className = "DivFin";

	Creation.Defaite.src = "img/Defaite.gif";
	Creation.Defaite.style.width = window.innerHeight/1.5+'px';

	Creation.Reload.style.fontSize = window.innerHeight/30+'px';
	Creation.Reload.style.display = 'block';
	Creation.Reload.style.marginTop = window.innerHeight/10+'px';
	Creation.Reload.style.margin = '0 auto';
	Creation.Reload.style.position = 'relative';
	Creation.Reload.style.width = window.innerWidth/10+'px';
	Creation.Reload.innerHTML = 'Réessayer?';
	Creation.Reload.className = 'Reload';

	document.body.appendChild(Creation.Final);
	Creation.Final.appendChild(Creation.Defaite);
	Creation.Final.appendChild(Creation.Reload);
}

function Transition(){
	if (StadeDeJeu == 'Transition') {
		if(opacite < 1 || camera.position.z < 6){
			opacite += 0.0035;
			Creation.Jauges.style.opacity = opacite;
			Creation.Clique.style.opacity = opacite;
			Creation.Tuto.style.opacity = opacite;
			Creation.TutoSkip.style.opacity = opacite;
			if (opacite < 0.2) {
				Creation.JTechno.style.opacity = opacite; 
				Creation.JAnnee.style.opacity = opacite; 
			}
			setTimeout(Transition,1000/60);
			if (camera.position.z < 6) {
				camera.position.z += 0.01;
			}
		}else{
			StadeDeJeu = 'Tuto';
		}
	}else if(StadeDeJeu == 'TransitionFin' || StadeDeJeu == 'TransitionLoose'){
		if(opacite > 0){
			opacite -= 0.008;
			Creation.Jauges.style.opacity = opacite; 
			Creation.JTechno.style.opacity = opacite; 
			Creation.Level1.style.opacity = opacite;
			Creation.Level1Nombre.style.opacity = opacite;
			Creation.Level2.style.opacity = opacite; 
			Creation.Level2Nombre.style.opacity = opacite; 
			Creation.Level3.style.opacity = opacite; 
			Creation.Level3Nombre.style.opacity = opacite; 
			Creation.Level4.style.opacity = opacite; 
			Creation.Level4Nombre.style.opacity = opacite; 
			Creation.Level5.style.opacity = opacite; 
			Creation.Level5Nombre.style.opacity = opacite; 
			Creation.Info.style.opacity = opacite; 
			Creation.JAnnee.style.opacity = opacite; 
			Creation.Clique.style.opacity = opacite;
			setTimeout(Transition,1000/60);
		}else{
			document.body.removeChild(Creation.Jauges);
			document.body.removeChild(Creation.JTechno);
			document.body.removeChild(Creation.JAnnee);
			document.body.removeChild(Creation.Clique);
			document.body.removeChild(Creation.AlertDiv);
			if (FormeAffiche != '') {
				document.body.removeChild(Creation.EffetImg);
				if (FormeAffiche != 'Techno') {
					document.body.removeChild(Creation.Level1);
					document.body.removeChild(Creation.Level1Nombre);
				}
				document.body.removeChild(Creation.Level2);
				document.body.removeChild(Creation.Level2Nombre);
				if (FormeAffiche != 'Santé') {
					document.body.removeChild(Creation.Level3);
					document.body.removeChild(Creation.Level3Nombre);
				}
				document.body.removeChild(Creation.Level4);
				document.body.removeChild(Creation.Level4Nombre);
				if (FormeAffiche != 'Techno') {
					document.body.removeChild(Creation.Level5);
					document.body.removeChild(Creation.Level5Nombre);
				}
				if (InfoActuelle == true) {
					document.body.removeChild(Creation.Info);
				}
			}
			if (EventActuelle == true) {
				document.body.removeChild(Creation.Event);
			}
			if (StadeDeJeu == 'TransitionFin') {
				StadeDeJeu = 'TransitionChoix';
				CreerFin();
				Transition();
			}
			else if (StadeDeJeu == 'TransitionLoose') {
				StadeDeJeu = 'VideoLoose';
				Creation.Musique.pause();
				Creation.Video.src = 'img/FinLoose.mp4';
				Creation.Video.currentTime = 0;
				document.body.appendChild(Creation.Video);
				Creation.Video.play();
				Creation.Video.onended = function(){
					document.body.removeChild(Creation.Video);
					Creation.Musique.play();
					StadeDeJeu = 'TransitionReload';
					CreerLoose();
					Transition();

				}
			}
		}
	}else if(StadeDeJeu == 'TransitionChoix'){
		if(opacite < 1){
			opacite += 0.008;
			Creation.FinDiv1.style.opacity = opacite; 
			Creation.FinDiv2.style.opacity = opacite; 
			Creation.FinDiv3.style.opacity = opacite; 
			setTimeout(Transition,1000/60);
		}else{
			StadeDeJeu = 'Choix';
		}
	}else if(StadeDeJeu == 'TransitionReload'){
		if(opacite < 1){
			opacite += 0.008;
			Creation.Final.style.opacity = opacite; 
			setTimeout(Transition,1000/60);
		}else{
			StadeDeJeu = 'Reload';
		}
	}
}

function GainDollars(){
	if (StadeDeJeu == 'Game') {
		Valeur.Dollars += Valeur.GainDollars;
		Creation.JDollars.innerHTML = Valeur.Dollars+"$";
		setTimeout(GainDollars,8000);
	}
}

function GainAnnee(){
	if (StadeDeJeu == 'Game') {
		Valeur.Annee ++;
		Creation.JAnnee.innerHTML = Valeur.Annee;
		Verification();
		setTimeout(GainAnnee,1000);
	}
}

function GainTechno(){
	if (StadeDeJeu == 'Game') {
		Valeur.Techno += Valeur.GainTechno;
		Creation.JDTechno.style.width = Valeur.Techno+"%";
		setTimeout(GainTechno,20000);
	}
}
 
function Verification(){
	Creation.AlertP.innerHTML = '';
	if (Valeur.Annee >= new Date().getFullYear() +300 || Valeur.Energie <= 0 || Valeur.Nourriture <= 0 || Valeur.Pollution <= 0 || Valeur.Sante <= 0){
		StadeDeJeu = 'TransitionLoose';
		Transition();
	}else if (Valeur.Techno >= 100){
		StadeDeJeu = 'TransitionFin';
		Transition();
	}
	if (Valeur.Annee >= new Date().getFullYear()+100 && Valeur.Annee <= new Date().getFullYear()+105) {
		Creation.AlertP.innerHTML += 'Attention, il ne vous reste plus que deux siècles.</br>';
		Son();
	}else if(Valeur.Annee >= new Date().getFullYear()+200 && Valeur.Annee <= new Date().getFullYear()+205){
		Creation.AlertP.innerHTML += 'Attention, il ne vous reste plus qu\'un siècles.</br>';
		Son();
	}else if(Valeur.Annee >= new Date().getFullYear()+250 && Valeur.Annee <= new Date().getFullYear()+255){
		Creation.AlertP.innerHTML += 'Attention, il ne vous reste plus qu\'un demi siècles.</br>';
		Son();
	}else if(Valeur.Annee >= new Date().getFullYear()+290 && Valeur.Annee <= new Date().getFullYear()+299){
		Creation.AlertP.innerHTML += 'Collision imminente.</br>';
		Son();
	}
	if (Valeur.Energie <= 20) {
		Son();
		Creation.AlertP.innerHTML += 'Manque d\'énergie. Le monde est dans le noir..</br>';
		Creation.JDEnergie.style.boxShadow = '-4px -2px 4px 2px rgba(100,20,20,0.9)';
		Creation.JDEnergie.style.borderColor = 'rgba(100,20,20,0.9)';
		scene.add(ener);
	}if (Valeur.Pollution <=20){
		Son();
		Creation.AlertP.innerHTML += 'Pique de pollution. L\'air est irrespirable.</br>';
		Creation.JDPollution.style.boxShadow = '-4px -2px 4px 2px rgba(100,20,20,0.9)';
		Creation.JDPollution.style.borderColor = 'rgba(100,20,20,0.9)';
		scene.add(polu);
	}if (Valeur.Sante <=20){
		Son();
		Creation.AlertP.innerHTML += 'Les maladies se propage, il manque des hopitaux.</br>';
		Creation.JDSante.style.boxShadow = '-4px -2px 4px 2px rgba(100,20,20,0.9)';
		Creation.JDSante.style.borderColor = 'rgba(100,20,20,0.9)';
		scene.add(sant);
	}if (Valeur.Nourriture <= 20){
		Son();
		Creation.AlertP.innerHTML += 'Famine en cours. Créer des champs.</br>';
		Creation.JDNourriture.style.boxShadow = '-4px -2px 4px 2px rgba(100,20,20,0.9)';
		Creation.JDNourriture.style.borderColor = 'rgba(100,20,20,0.9)';
		scene.add(nourri);
	}if (Valeur.Energie > 20) {
		Creation.JDEnergie.style.boxShadow = '-4px -2px 4px 2px rgba(122,121,168,0.8)';
		Creation.JDEnergie.style.borderColor = 'rgb(67,90,107)';
		scene.remove(ener);
	}if (Valeur.Pollution >20){
		Creation.JDPollution.style.boxShadow = '-4px -2px 4px 2px rgba(122,121,168,0.8)';
		Creation.JDPollution.style.borderColor = 'rgb(67,90,107)';
		scene.remove(polu);
	}if (Valeur.Sante >20){
		Creation.JDSante.style.boxShadow = '-4px -2px 4px 2px rgba(122,121,168,0.8)';
		Creation.JDSante.style.borderColor = 'rgb(67,90,107)';
		scene.remove(sant);
	}if (Valeur.Nourriture > 20){
		Creation.JDNourriture.style.boxShadow = '-4px -2px 4px 2px rgba(122,121,168,0.8)';
		Creation.JDNourriture.style.borderColor = 'rgb(67,90,107)';
		scene.remove(nourri);
	}
}

function Evenement(){
	if (StadeDeJeu == 'Game') {
		var t = Math.floor(Math.random()*20)+30;
		t = t*1000;
		if (Event) {
			var r = Math.floor(Math.random()*4);
			Creation.Event.src = 'img/Event'+r+'.gif';
			Creation.Audio.src = 'audio/Event'+r+'.mp3';
			Creation.Audio.play();
			document.body.appendChild(Creation.Event);
			setTimeout(FinEvenement, 8000, r);
		}
		Event = true;
		EventActuelle = true;
		setTimeout(Evenement, t);
	}
}

function FinEvenement(ev){
	document.body.removeChild(Creation.Event);
	EventActuelle = false;
	if (ev == 0) {
		Valeur.Nourriture -= 20;
		Creation.JPNourriture.style.marginLeft = Valeur.Nourriture-1+'%';
	}
	else if(ev == 1) {
		Valeur.Energie -= 20;
		Creation.JPEnergie.style.marginLeft = Valeur.Energie-1+"%";
	}
	else if(ev == 2) {
		Valeur.Pollution -= 20;
		Creation.JPPollution.style.marginLeft = Valeur.Pollution-1+"%";
	}
	else if(ev == 3) {
		Valeur.Sante -= 20;
		Creation.JPSante.style.marginLeft = Valeur.Sante-1+'%';
	}
}


function Final(){
	document.body.removeChild(Creation.FinDiv1);
	document.body.removeChild(Creation.FinDiv2);
	document.body.removeChild(Creation.FinDiv3);

	Creation.Final.style.width = window.innerWidth/2+'px';
	Creation.Final.style.height = window.innerHeight/1.5+'px';
	Creation.Final.style.top = window.innerHeight/2/3+'px';
	Creation.Final.style.left = window.innerWidth/4+'px';
	Creation.Final.className = "DivFin";
	Creation.FinalP.style.fontSize = '46px';
	Creation.FinalP.className = 'FinalP';
	Creation.FinalP.style.textAlign = 'center';
	Creation.FinalP.style.bottom = '0px';
	Creation.FinalP.style.marginLeft = '5%';
	Creation.FinalP.style.position = 'absolute';
	Creation.FinImg1.style.width = '30%';
	Creation.FinImg2.style.width = '30%';
	Creation.FinImg3.style.width = '30%';
	Creation.FinImg1.style.marginLeft = '3%';
	Creation.FinImg2.style.marginLeft = '3%';
	Creation.FinImg3.style.marginLeft = '3%';
	Creation.FinalP1.innerHTML = 'Sauvez toute l\'humanité sauf vous !';
	Creation.FinalP2.innerHTML = 'Avoir 1/2 de sauvez tout le monde et sois même !';
	Creation.FinalP3.innerHTML = 'Survivre avec seulement un petit groupe !';
	Creation.FinalP1.style.width = '30%';
	Creation.FinalP2.style.width = '30%';
	Creation.FinalP3.style.width = '30%';
	Creation.FinalP1.style.display = 'inline-block';
	Creation.FinalP2.style.display = 'inline-block';
	Creation.FinalP3.style.display = 'inline-block';
	Creation.FinalP1.style.marginLeft = '3%';
	Creation.FinalP2.style.marginLeft = '3%';
	Creation.FinalP3.style.marginLeft = '3%';

	document.body.appendChild(Creation.Final);
	Creation.Final.appendChild(Creation.FinImg1);
	Creation.Final.appendChild(Creation.FinImg2);
	Creation.Final.appendChild(Creation.FinImg3);
	Creation.Final.appendChild(Creation.FinalP1);
	Creation.Final.appendChild(Creation.FinalP2);
	Creation.Final.appendChild(Creation.FinalP3);
	Creation.Final.appendChild(Creation.FinalP);
	pourcentage();
}

function TransitionDonne(){
	if (Valeur.Nourriture < ValeurChange.Nourriture) ValeurChange.Nourriture -= 0.2;
	else if (Valeur.Nourriture > ValeurChange.Nourriture) ValeurChange.Nourriture += 0.2;
	if (Valeur.Energie < ValeurChange.Energie) ValeurChange.Energie -= 0.2;
	else if (Valeur.Energie > ValeurChange.Energie) ValeurChange.Energie += 0.2;
	if (Valeur.Pollution < ValeurChange.Pollution) ValeurChange.Pollution -= 0.2;
	else if (Valeur.Pollution > ValeurChange.Pollution) ValeurChange.Pollution += 0.2;
	if (Valeur.Sante < ValeurChange.Sante) ValeurChange.Sante -= 0.2;
	else if (Valeur.Sante > ValeurChange.Sante) ValeurChange.Sante += 0.2;
	if (Valeur.Dollars < ValeurChange.Dollars) ValeurChange.Dollars -= 100 ;
	else if (Valeur.Dollars > ValeurChange.Dollars) ValeurChange.Dollars += 100;
	if (ValeurChange.Nourriture < Valeur.Nourriture+0.2 && ValeurChange.Nourriture > Valeur.Nourriture-0.2) ValeurChange.Nourriture = Valeur.Nourriture;
	if (ValeurChange.Energie < Valeur.Energie+0.2 && ValeurChange.Energie > Valeur.Energie-0.2) ValeurChange.Energie = Valeur.Energie;
	if (ValeurChange.Pollution < Valeur.Pollution+0.2 && ValeurChange.Pollution > Valeur.Pollution-0.2) ValeurChange.Pollution = Valeur.Pollution;
	if (ValeurChange.Sante < Valeur.Sante+0.2 && ValeurChange.Sante > Valeur.Sante-0.2) ValeurChange.Sante = Valeur.Sante;
	Creation.JDollars.innerHTML = ValeurChange.Dollars+"$";
	Creation.JPNourriture.style.marginLeft = ValeurChange.Nourriture-1+'%';
	Creation.JPEnergie.style.marginLeft = ValeurChange.Energie-1+'%';
	Creation.JPPollution.style.marginLeft = ValeurChange.Pollution-1+'%';
	Creation.JPSante.style.marginLeft = ValeurChange.Sante-1+'%';
	Creation.JDollarsGain.innerHTML = "+"+Valeur.GainDollars+'$/8S';
	if (Valeur.Nourriture != ValeurChange.Nourriture || Valeur.Energie != ValeurChange.Energie || Valeur.Pollution != ValeurChange.Pollution || Valeur.Sante != ValeurChange.Sante || Valeur.Dollars != ValeurChange.Dollars){
		setTimeout(TransitionDonne, 1000/60);
	}
}

function TutoFin(){
		Creation.JDollars.style.opacity = 1;
		Creation.JINourriture.style.opacity = 1;
		Creation.JDNourriture.style.opacity = 1;
		Creation.JPNourriture.style.opacity = 1;
		Creation.JIEnergie.style.opacity = 1;
		Creation.JDEnergie.style.opacity = 1;
		Creation.JPEnergie.style.opacity = 1;
		Creation.JIPollution.style.opacity = 1;
		Creation.JDPollution.style.opacity = 1;
		Creation.JPPollution.style.opacity = 1;
		Creation.JISante.style.opacity = 1;
		Creation.JDSante.style.opacity = 1;
		Creation.JPSante.style.opacity = 1;
		Creation.JTechno.style.opacity = 1;
		Creation.JAnnee.style.opacity = 1;
		Creation.Nourriture.style.opacity = 1;
		Creation.NourritureTotaux.style.opacity = 1;
		Creation.Industrie.style.opacity = 1;
		Creation.IndustrieTotaux.style.opacity = 1;
		Creation.Energie.style.opacity = 1;
		Creation.EnergieTotaux.style.opacity = 1;
		Creation.Sante.style.opacity = 1;
		Creation.SanteTotaux.style.opacity = 1;
		Creation.Technologie.style.opacity = 1;
		Creation.TechnologieTotaux.style.opacity = 1;
		Creation.Level1.style.opacity = 1;
		Creation.Level2.style.opacity = 1;
		Creation.Level3.style.opacity = 1;
		Creation.Level4.style.opacity = 1;
		Creation.Level5.style.opacity = 1;
		document.body.removeChild(Creation.Tuto);
		if (StadeDeJeu == "Tuto") document.body.removeChild(Creation.TutoSkip);
		StadeDeJeu = 'Game';
		GainDollars();
		GainAnnee();
		GainTechno();
		Evenement();
}

function Son(){
	if (sonverif) {
		Creation.Audio.src = 'audio/Alerte.mp3';
		Creation.Audio.play();
		sonverif = false;
		setTimeout(SonTrue, 10000);
	}
}

function SonTrue(){
	sonverif = true;
}

//////////////////////////// PLANETE /////////////////////////////////

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//////////////////////////// LIGTH /////////////////////////////////
var light    = new THREE.AmbientLight( 0x888888 )
    scene.add( light )

var light    = new THREE.DirectionalLight( 0xcccccc, 0.5 )
    light.position.set(30,3,5)
    scene.add( light )


//////////////////////////// TERRE /////////////////////////////////

var geometry   = new THREE.SphereGeometry(0.51, 32, 32)
var material  = new THREE.MeshPhongMaterial()
    material.map   = THREE.ImageUtils.loadTexture('img/map.jpg')
    material.bumpMap    = THREE.ImageUtils.loadTexture('img/bump.jpg');
    material.bumpScale = 0.3

var earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

//////////////////////////// CLOUD /////////////////////////////////

var geometry2   = new THREE.SphereGeometry(0.52, 32, 32)
var material2  = new THREE.MeshPhongMaterial({
    opacity : 0.9,
    transparent : true,
  depthWrite  : false,
})
material2.map   = THREE.ImageUtils.loadTexture('img/cloud.png')

var cloud = new THREE.Mesh(geometry2, material2)
scene.add(cloud)

//////////////////////////// POLUTION /////////////////////////////////

	var geometry3   = new THREE.SphereGeometry(0.515, 32, 32)
	var material3  = new THREE.MeshPhongMaterial({
    	opacity : 0.7,
   	 	transparent : true,
  		depthWrite  : false,
	})
	material3.map   = THREE.ImageUtils.loadTexture('img/poulution.png')

	var polu = new THREE.Mesh(geometry3, material3)

//////////////////////////// ENERGIE /////////////////////////////////

	var geometry4   = new THREE.SphereGeometry(0.515, 32, 32)
	var material4  = new THREE.MeshPhongMaterial({
   	 	opacity : 0.9,
   		 transparent : true,
 	 	depthWrite  : false,
	})
	material4.map   = THREE.ImageUtils.loadTexture('img/energ.png')

	var ener = new THREE.Mesh(geometry4, material4)

//////////////////////////// SANTE /////////////////////////////////

	var geometry5   = new THREE.SphereGeometry(0.515, 32, 32)
	var material5  = new THREE.MeshPhongMaterial({
    	transparent : true,
  		depthWrite  : false,
	})
	material5.map   = THREE.ImageUtils.loadTexture('img/sant.png')

	var sant = new THREE.Mesh(geometry5, material5)

//////////////////////////// NOURRITURE /////////////////////////////////

	var geometry6   = new THREE.SphereGeometry(0.512, 32, 32)
	var material6  = new THREE.MeshPhongMaterial({
   	 	opacity : 0.7,
   	 	transparent : true,
  		depthWrite  : false,
	})
	material6.map   = THREE.ImageUtils.loadTexture('img/nourritu.png')

	var nourri = new THREE.Mesh(geometry6, material6)

//////////////////////////// GALAXY /////////////////////////////////

var geometry7  = new THREE.SphereGeometry(2, 32, 32)
var material7  = new THREE.MeshBasicMaterial()
material7.map   = THREE.ImageUtils.loadTexture('img/BackGround1.png')
material7.side  = THREE.BackSide

var galax = new THREE.Mesh(geometry7, material7)
scene.add(galax)

var geometry8  = new THREE.SphereGeometry(1.8, 32, 32)
var material8  = new THREE.MeshBasicMaterial({
   	 	transparent : true,
   	 	depthWrite  : false,
	})
material8.map   = THREE.ImageUtils.loadTexture('img/BackGround2.png')
material8.side  = THREE.BackSide

var galax2 = new THREE.Mesh(geometry8, material8)
scene.add(galax2)

var geometry9  = new THREE.SphereGeometry(0.6, 32, 32)
var material9  = new THREE.MeshBasicMaterial({
   	 	transparent : true,
   	 	depthWrite  : false,
	})
material9.map   = THREE.ImageUtils.loadTexture('img/satellites.png')

var satelite = new THREE.Mesh(geometry9, material9)
scene.add(satelite)

camera.position.z = 3; 

//////////////////////////// CAMERA /////////////////////////////////


function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );

    earthMesh.rotation.y += 0.0015;
    cloud.rotation.y += 0.002;
    galax.rotation.y -= 0.0005;
    galax.rotation.x -= 0.0001;
    galax2.rotation.y -= 0.0004;
    galax2.rotation.x += 0.0002;
    satelite.rotation.y -= 0.0015;
    satelite.rotation.x += 0.0015;
 	polu.rotation.y += 0.0015;
    ener.rotation.y += 0.0015;
    sant.rotation.y += 0.0015;
    nourri.rotation.y += 0.0015;
}
render();