var playState = function() {
    joueur = null;
    Boisson = null;
    Danse_un = null;
    Danse_un_vert = null;
    Danse_trois_vert = null;
    Danse_trois_vert = null;
    Mur_Bleu_Gauche_Droit = null;
    Mur_Bleu_Haut = null;
    Mur_Bleu_Droite_Droit = null;
    Mur_Porte_Haut = null;
    Mur_Porte_Bas = null;
    Mur_Bleu_Bas = null;
    Mur_Violet_Bas = null;
    Mur_Cache_Bas = null;
    Tapis = null;
    Tapis_deux = null;
    Statue = null;
    Boite_dialogue = null;
    Plante = null;
    Bureau = null;
    BureauCollision = null;
    Cafe = null;
    CafeCollision = null;
    Cafe_deux = null;
    CafeCollision_deux = null;
    Cafe_trois = null;
    CafeCollision_trois = null;
    TableRonde = null;
    TableRonde_deux = null;
    TableRonde_trois = null;
    TableRonde_quatre = null;
    Bureau_chaise = null;
    Bureau_chaise_deux = null;
    Bureau_chaise_trois = null;
    Bureau_Droite = null;
    Bureau_Droite_collision = null;
    Bureau_Droite_deux = null;
    Bureau_Droite_deux_collision = null;
    Bureau_Droite_trois = null;
    Bureau_Droite_trois_collision = null;
    Porte_Fermee = null;
    porte_ouverte_1 = null;
    porte_ouverte_2 = null;
    Porte_Overlap = null;
    Porte_Overlap_droite = null;
    porte_kill = false;
    Nope = null;
    greek_talking = null;
    Good = null;
    Clé = null;
    countObject = 0;
    cursors = null;
    text = null;
    overlap = false;
    chance = 3;
    spaceIsDown = false;
    enterIsDown = true;
    total = 0;
    opened_door = 0;
    last_tooltip = 0;
    kill_tooltip = 0;   
    pnjsList = [];
    interface = null;
    musique_background = null;
}

playState.prototype = {
    create: function(){
        //BACKGROUND
        game.add.tileSprite(0, 0, 1434, 734, 'background');
        game.world.setBounds(0, 0, 1434, 734);

        
        //OBJET VISUEL DANS LA MAP
        Tapis = game.add.sprite(680,250, 'tapis');
        Tapis_deux = game.add.sprite(1130,250, 'tapis');
        Statue = game.add.sprite(40,80, 'statue');
        Plante = game.add.sprite(150,35, 'plante');
        Bureau = game.add.sprite(300,100, 'bureau');
        BureauCollision = game.add.sprite(300,100, 'bureau_collision');
        Cafe = game.add.sprite(550,35, 'café');
        CafeCollision = game.add.sprite(550,35, 'café_collision');
        Cafe_deux = game.add.sprite(750,35, 'café');
        CafeCollision_deux = game.add.sprite(750,35, 'café_collision');
        Cafe_trois = game.add.sprite(1300,35, 'café');
        CafeCollision_trois = game.add.sprite(1300,35, 'café_collision');
        TableRonde = game.add.sprite(580,140, 'table_ronde');
        //TableRonde_deux = game.add.sprite(950,160, 'table_ronde');
        TableRonde_trois = game.add.sprite(1090,150, 'table_ronde');
        TableRonde_quatre = game.add.sprite(1200,155, 'table_ronde');
        Plante = game.add.sprite(650,35, 'plante');
        Plante = game.add.sprite(650,500, 'plante');
        Bureau_chaise = game.add.sprite(30, 250,'bureau&chaise');
        Bureau_chaise_deux = game.add.sprite(30, 400,'bureau&chaise');
        Bureau_chaise_trois = game.add.sprite(750, 490,'bureau&chaise');
        Bureau_Droite = game.add.sprite(1250,470, 'bureau_droite');
        Bureau_Droite_collision = game.add.sprite(1250,470, 'bureau_droite_collision');
        Bureau_Droite_deux = game.add.sprite(1250,330, 'bureau_droite_deux');
        Bureau_Droite_deux_collision = game.add.sprite(1250,330, 'bureau_droite_deux_collision');
        Bureau_Droite_trois = game.add.sprite(1250,180, 'bureau_droite_trois');
        Bureau_Droite_trois_collision = game.add.sprite(1250,180, 'bureau_droite_trois_collision');
        
        //PORTE
        Porte_Fermee = game.add.sprite(725,224, 'porte_fermee');
        Porte_Overlap = game.add.sprite(705,225, 'porte_overlap');
        Porte_Overlap_droite = game.add.sprite(800,225, 'porte_overlap');

        //GROUPE D OBJET
        objetInteract = game.add.group();
        objetInteract.enableBody = true;
        
        //POSITION D OBJET PAR NIVEAU
        var tutoObjet = [
            {x:302, y:80}
        ];
        
        // AJOUT DE CHAQUE OBJET DANS LE GROUPE
        for(i = 0; i < tutoObjet.length; i++){
            Clé = objetInteract.create(tutoObjet[i].x, tutoObjet[i].y, 'champagne');
            Clé.immovable = true;
        }
        
        //AJOUT DE TOUS LES SPRITES
        joueur = game.add.sprite(200, 250, 'marche');
        Boisson = game.add.sprite(1050, 120, 'Boisson');
        Danse_un = game.add.sprite(930, 420, 'Danse1');
        Danse_un_vert = game.add.sprite(890, 390, 'Danse1_vert');
        Danse_trois_vert = game.add.sprite(890, 450, 'Danse3_vert')
        Danse_deux = game.add.sprite(830, 420, 'Danse2');
        
        //MUR COLLISION JOUEUR
        Mur_Bleu_Gauche_Droit = game.add.sprite(0,30,'Mur-Bleu-Gauche-Droit');
        Mur_Bleu_Haut = game.add.sprite(10,5,'Mur-Bleu-Haut');
        Mur_Bleu_Droite_Droit = game.add.sprite(1400,30,'Mur-Bleu-Droite-Droit');
        Mur_Porte_Haut = game.add.sprite(705,30,'Mur-Porte-Haut');
        Mur_Porte_Bas = game.add.sprite(705,350,'Mur-Porte-Bas');
        Mur_Bleu_Bas = game.add.sprite(0,605,'Mur-Bleu-Bas');
        Mur_Violet_Bas = game.add.sprite(0,670,'Mur-Violet-Bas');
        Mur_Cache_Bas = game.add.sprite(0,635, 'Mur-Cache-Bas');
        
        //tooltip
        Boite_dialogue = game.add.sprite(0,570, 'tooltip_1');
        Boite_dialogue.fixedToCamera = true;
        greek_talking = game.add.sprite(-10,570, 'greek_talking');
        greek_talking.fixedToCamera = true;
        
        //DEFINITION ANIMATION
        joueur.animations.add('right', [0, 1, 2], 7, true);
        joueur.animations.add('left', [3, 4, 5], 7, true);
        Boisson.animations.add('boisson', [0, 1], 1, true);
        Danse_un.animations.add('danse_un', [0, 1,2], 3, true);
        Danse_un_vert.animations.add('danse_un_vert', [0, 1,2], 3, true);
        Danse_trois_vert.animations.add('danse_trois_vert', [0, 1,2], 3, true);
        Danse_deux.animations.add('danse_deux', [0, 1], 3, true);
        greek_talking.animations.add('talk', [0, 1], 3, true);
        greek_talking.scale.setTo(0.5,0.5);
        
        
        
        //SCALE OBJET
       /* Tapis.scale.setTo(0.5, 0.5);
       Tapis_deux.scale.setTo(0.5, 0.5);*/
       Boite_dialogue.scale.setTo(0.5, 0.5);

        //ENABLE LA PHYSIQUE POUR NOS OBJETS
        game.physics.enable(joueur, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Bleu_Gauche_Droit, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Bleu_Haut, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Bleu_Bas, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Bleu_Droite_Droit, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Porte_Haut, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Porte_Bas, Phaser.Physics.ARCADE);
        game.physics.enable(Mur_Violet_Bas, Phaser.Physics.ARCADE);
        game.physics.enable(Tapis, Phaser.Physics.ARCADE);
        game.physics.enable(Statue, Phaser.Physics.ARCADE);
        game.physics.enable(CafeCollision, Phaser.Physics.ARCADE);
        game.physics.enable(CafeCollision_deux, Phaser.Physics.ARCADE);
        game.physics.enable(CafeCollision_trois, Phaser.Physics.ARCADE);
        game.physics.enable(BureauCollision, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_chaise, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_chaise_deux, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_chaise_trois, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_Droite_collision, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_Droite_deux_collision, Phaser.Physics.ARCADE);
        game.physics.enable(Bureau_Droite_trois_collision, Phaser.Physics.ARCADE);
        game.physics.enable(Porte_Fermee, Phaser.Physics.ARCADE);

        //IMMOVABLE
        joueur.body.fixedRotation = true;
        joueur.body.collideWorldBounds = true;
        Mur_Bleu_Gauche_Droit.body.immovable = true;
        Mur_Bleu_Haut.body.immovable = true;
        Mur_Bleu_Bas.body.immovable = true;
        Mur_Bleu_Droite_Droit.body.immovable = true;
        Mur_Porte_Haut.body.immovable = true;
        Mur_Porte_Bas.body.immovable = true;
        Mur_Violet_Bas.body.immovable = true;
        Statue.body.immovable = true;
        CafeCollision.body.immovable = true;
        CafeCollision_deux.body.immovable = true;
        CafeCollision_trois.body.immovable = true;
        BureauCollision.body.immovable = true;
        Bureau_chaise.body.immovable = true;
        Bureau_chaise_deux.body.immovable = true;
        Bureau_chaise_trois.body.immovable = true;
        Bureau_Droite_collision.body.immovable = true;
        Bureau_Droite_deux_collision.body.immovable = true;
        Bureau_Droite_trois_collision.body.immovable = true;
        Porte_Fermee.body.immovable = true;
        
        //KEYBOARD ACTION
        haut = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        droite = game.input.keyboard.addKey(Phaser.Keyboard.D);
        gauche = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        bas = game.input.keyboard.addKey(Phaser.Keyboard.S);
        action = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        //CAMERA SUR LE PLAYER
        game.camera.follow(joueur);

        //INTERFACE
        interface = game.add.sprite(0,0, 'interface');
        interface.fixedToCamera = true;
        interface.scale.setTo(0.2,0.2)

        //AJOUT DE TEXTE
        text = game.add.text(66, 12, chance, { font: '22px Orbitron', fill: '#fff' });
        text.fixedToCamera = true;

        
        //TIMER
        var me = this;
        me.startTime = new Date();
        me.totalTime = 150;
        me.timeElapsed = 0;

        me.createTimer();

        me.gameTimer = game.time.events.loop(100, function(){
            me.updateTimer();
        });
        
        //musique
        musique_background = game.add.audio('tuto');
        musique_background.play();
        musique_background.volume = 0.5;

    },

    update: function(){
        
        //TIME LOSE
        if(this.timeElapsed >= this.totalTime){
            game.state.start('gameover_tuto');
        }
        //ANIMATION
        Boisson.animations.play('boisson');
        Danse_un.animations.play('danse_un');
        Danse_un_vert.animations.play('danse_un_vert');
        Danse_trois_vert.animations.play('danse_trois_vert');
        Danse_deux.animations.play('danse_deux');
        greek_talking.animations.play('talk');
        
        //GÉRER LES COLLISIONS JOUEUR
        game.physics.arcade.collide(joueur, [Mur_Bleu_Gauche_Droit,Mur_Bleu_Haut,Mur_Bleu_Droite_Droit,Mur_Porte_Haut,Mur_Porte_Bas,Mur_Violet_Bas,Statue,CafeCollision,CafeCollision_deux,CafeCollision_trois,BureauCollision,Bureau_chaise,Bureau_chaise_deux,Bureau_chaise_trois,Bureau_Droite_collision,Bureau_Droite_deux_collision,Bureau_Droite_trois_collision, porte_ouverte_1, porte_ouverte_2]);
        Tapis.angle = 90;
        
        if(porte_kill === false){
            game.physics.arcade.collide(joueur,Porte_Fermee);
        }


        //NOMBRE DE PERSONNE AU DEPLACEMENT RANDOM
        /*if (total < 2){
        /*if (total < 2){
            this.releasepnj();
        }*/
        
        //PERTE DE CHANCE SUR LES PERSONNAGES NON JOUABLE
        /*for(var i = 0; i < pnjsList.length; i++){
            if(this.checkOverlap(joueur, pnjsList[i]) && action.isDown === true && spaceIsDown ===  false && chance >= 1 && countObject === 1 && overlap === false){
                chance--;
                text.text = chance;
                spaceIsDown = true;
            }else if(action.isDown === false){
                spaceIsDown = false;
            }
            if(chance === 0){
                game.state.start('gameover_tuto');
            };
        }*/
        // GERER LES COLLISIONS DES PERSONNAGES NON JOUABLES
        pnjsList.forEach(function(pnj) {
            game.physics.arcade.collide(pnj, [Mur_Bleu_Gauche_Droit, Mur_Bleu_Haut,Mur_Bleu_Bas,Mur_Bleu_Droite_Droit,Mur_Porte_Haut,Mur_Porte_Bas,Mur_Violet_Bas,Statue,CafeCollision,CafeCollision_deux,CafeCollision_trois,BureauCollision,Bureau_chaise,Bureau_chaise_deux,Bureau_chaise_trois,Bureau_Droite_collision,Bureau_Droite_deux_collision,Bureau_Droite_trois_collision, Porte_Fermee]);
        }); 
        
        //APPEL DE LA VARIABLE DE DÉPLACEMENT
        this.deplacerJoueur();
        
        if(chance === 0){
                game.state.start('gameover_tuto');
        };
        
        // OVERLAP POUR AVOIR L'OBJET
        if(this.checkOverlap(joueur, objetInteract) && action.isDown === true && overlap === false && spaceIsDown === false){
            interaction = game.add.audio('interaction');
            interaction.play();
            Clé.kill();
            countObject++;
        }
        
        // OVERLAP POUR LE CHOIX DE LA BONNE PERSONNE
        if (this.checkOverlap(joueur, Boisson) && action.isDown && chance >=1 && countObject === 1){
            this.talkSprite();
            this.good();
            text.destroy();
            overlap = true;
            Boite_dialogue.kill();
            greek_talking.kill();
            setTimeout(this.winScreen, 1000);
        }

        //DANSE 1 AVEC HABIT VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_un) && action.isDown === true && spaceIsDown ===  false && chance >= 1 && countObject === 1 && overlap === false){ 
            this.nope();
            setTimeout(this.stopnope, 2000);
            chance--;
            wrong = game.add.audio('wrong');
            wrong.play();
            text.text = chance;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE 1 AVEC HABIT VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_un_vert) && action.isDown === true && spaceIsDown ===  false && chance >= 1 && countObject === 1 && overlap === false){
            this.nope();
            setTimeout(this.stopnope, 2000);
            chance--;
            wrong = game.add.audio('wrong');
            wrong.play();
            text.text = chance;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE 2
        if(this.checkOverlap(joueur, Danse_deux) && action.isDown === true && spaceIsDown ===  false && chance >= 1 && countObject === 1 && overlap === false){
            this.nope();
            setTimeout(this.stopnope, 2000);
            chance--;
            wrong = game.add.audio('wrong');
            wrong.play();
            text.text = chance;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE 3
        if(this.checkOverlap(joueur, Danse_trois_vert) && action.isDown === true && spaceIsDown ===  false && chance >= 1 && countObject === 1 && overlap === false){
            this.nope();
            setTimeout(this.stopnope, 2000);
            chance--;
            wrong = game.add.audio('wrong');
            wrong.play();
            text.text = chance;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        
        //OVERLAP POUR LA PORTE OUVERTE
        if (this.checkOverlap(joueur, Porte_Overlap) && action.isDown && chance >=1 && countObject === 1){
            porte_kill = true;
            Porte_Fermee.kill();
            porte_ouverte_1 = game.add.sprite(715, 220, 'porte_ouverte_1');
            porte_ouverte_2 = game.add.sprite(715, 345, 'porte_ouverte_2');
            opened_door++;
        }
        
        if (action.isDown && countObject == 1 && opened_door == 0){
            Boite_dialogue.kill();
            Boite_dialogue = game.add.sprite(0,570,'tooltip_2');
            Boite_dialogue.fixedToCamera = true;
            Boite_dialogue.scale.setTo(0.5, 0.5);
        }

        if (action.isDown && opened_door == 1 && last_tooltip == 0){
            Boite_dialogue.kill();
            Boite_dialogue = game.add.sprite(0,570,'tooltip_4');
            Boite_dialogue.fixedToCamera = true;
            Boite_dialogue.scale.setTo(0.5, 0.5);
            last_tooltip++;
        }

        if (enter.isDown && last_tooltip === 1 && kill_tooltip == 0){
            Boite_dialogue.kill();
            Boite_dialogue = game.add.sprite(0,570,'tooltip_3');
            Boite_dialogue.fixedToCamera = true;
            Boite_dialogue.scale.setTo(0.5, 0.5);
            last_tooltip++;
        }
        
        if (overlap == true){
            setTimeout(this.level1, 10000);
        }
    },
    
    createTimer: function(){
 
        var me = this;

        me.timeLabel = me.game.add.text(203, 13, "00:00", {font: "22px Orbitron", fill: "#fff"}); 
        me.timeLabel.anchor.setTo(0.5, 0);
        me.timeLabel.align = 'center';
        me.timeLabel.fixedToCamera = true;

    },
    updateTimer: function(){
 
        var me = this;

        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
        var timeRemaining = me.totalTime - me.timeElapsed; 

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes; 

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 

        me.timeLabel.text = result;
 
    },
    
    talkSprite: function() {
        Boisson.loadTexture('talk', 0);

        Boisson.animations.add('talk');

        Boisson.animations.play('talk', 30, true);

    },
    
    //RELEASE LES PERSONNES AVEC DES DEPLACEMENTS RANDOM
    releasepnj: function() {
        var pnj = game.add.sprite(Math.random()*900, Math.random()*400, 'pnj');
        //pnj.animations.add('walk');
        //pnj.animations.play('walk', 20, true);
        //pnj.scale.setTo(2,2);
        this.game.time.events.loop(2000, function() {
            game.add.tween(pnj.body.velocity).to({
                x: game.rnd.integerInRange(-1000, 1000),
                y: game.rnd.integerInRange(-700, 700)
            }, 200000, Phaser.Easing.Linear.None, true);
        },this);
        total++;
        game.physics.enable(pnj, Phaser.Physics.ARCADE);

        pnjsList.push(pnj);
    },

    nope: function(){
        Nope = game.add.sprite(900, 350, 'nope');
        Nope.animations.add('nope', [0, 1, 2], 10, true);
        Nope.animations.play('nope');
    },

    stopnope: function(){
        Nope.kill();
    },

    good: function(){
        Good = game.add.sprite(1050, 100, 'good');
        Good.animations.add('good', [0, 1, 2], 10, true);
        Good.animations.play('good');
    },

    //DÉPLACEMENT JOUEUR
    deplacerJoueur: function() {
        joueur.body.velocity.x = 0;
        joueur.body.velocity.y = 0;

        if (gauche.isDown){
            joueur.body.velocity.x = -175;
            joueur.play('left');
        }else if (droite.isDown){
            joueur.body.velocity.x = 175;
            joueur.play('right');
        }else{
            joueur.animations.stop();
        } 
        if (haut.isDown){
            joueur.body.velocity.y = -175;
        }else if (bas.isDown){
            joueur.body.velocity.y = 175;
        }
    },
    
    //CHECK SI UN SPRITE RENTRE DANS LA ZONE D'UN SECOND SPRITE
    checkOverlap: function(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    

    //SUPPRIMER LE TEXTE
    destroyText: function(){
        text.destroy();
    },

    //CHANGE TO WIN SCREEN
    winScreen: function(){
        game.state.start('wintuto');
    }
}