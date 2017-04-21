var level1State = function() {

    console.log('reinitialisation');
    joueur = null;
    eclairage = null;
    first_door_level1 = null;
    first_door_top_level1 = null;
    top_mur_level1 = null;
    second_door_top = null;
    second_door_bot = null;
    wall_droite = null;
    bottom_wall = null;
    bottom_wall_top = null;
    bottom_wall_all = null;
    collide_object = null;
    dj = null;
    dj_anim = null;
    top_object = null;
    lumiere_gauche = null;
    lumiere_droite = null;
    musique_background = null;
    spaceIsDown = false;
    Danse_un = null;
    Danse_un_vert = null;
    Danse_trois_vert = null;
    Danse_deux = null;
    Danse_deux_2 = null;
    Danse_deux_vert = null;
    Danse_deux_vert_deux = null;
    afficher_pourcentage = null;
    text = null;
    pourcentage = 100;
    vie = 3;
    affiche_pourcentage_cent = null;
    Boite_dialogue = null;
    interface = null;
    Good = null;
    tooltip_count = 0;
}


level1State.prototype = {
    create: function(){
        
        //BACKGROUND
        game.add.tileSprite(0, 0, 1386, 734, 'background_level1');
        game.world.setBounds(0, 0, 1386, 734);
  
        //sprite danse
        Danse_un = game.add.sprite(990, 300, 'Danse1');
        Danse_un_vert = game.add.sprite(900, 300, 'Danse1_vert');
        Danse_deux = game.add.sprite(820, 320, 'Danse2');
        Danse_deux_2 = game.add.sprite(940, 380, 'Danse2');
        Danse_deux_vert = game.add.sprite(950, 270, 'Danse2_vert');
        Danse_deux_vert_deux = game.add.sprite(800, 380, 'Danse2_vert');
        Danse_trois_vert = game.add.sprite(890, 390, 'Danse3_vert');



        //TEXT
        musique = game.add.text(875, 199,'100%', { font: '20px Orbitron', fill: '#000' });
        affiche_pourcentage_cent = game.add.sprite(865, 185, 'affiche_pourcentage_100');
        //joueur 
        joueur = game.add.sprite(510, 380, 'marche');
        joueur.animations.add('right', [0, 1, 2], 7, true);
        joueur.animations.add('left', [3, 4, 5], 7, true);
        
        //MUR COLLISION JOUEUR
        first_door_level1 = game.add.sprite(575,475,'first_door_level1');
        first_door_top_level1 = game.add.sprite(575,30,'first_door_top_level1');
        top_mur_level1 = game.add.sprite(575,0,'top_mur_level1');
        second_door_top = game.add.sprite(1185,32,'second_door_top');
        second_door_bot = game.add.sprite(1185,426,'second_door_bot');
        wall_droite = game.add.sprite(1355,10,'wall_droite');
        bottom_wall = game.add.sprite(575,570,'bottom_wall');
        bottom_wall_top = game.add.sprite(575,505,'bottom_wall_top');
        bottom_wall_all = game.add.sprite(575,535,'bottom_wall_all');
        lumiere_gauche = game.add.sprite(608,33,'lumiere_gauche');
        lumiere_droite = game.add.sprite(1135,33,'lumiere_droite');
        top_object = game.add.sprite(797,120,'top_object');
        collide_object = game.add.sprite(797,160,'collide_object');

        //tooltip
        Boite_dialogue = game.add.sprite(0,570, 'tooltip_level_1');
        Boite_dialogue.fixedToCamera = true;
        Boite_dialogue.scale.setTo(0.5, 0.5);
        greek_talking = game.add.sprite(-10,570, 'greek_talking');
        greek_talking.fixedToCamera = true;
        greek_talking.scale.setTo(0.5,0.5);
        
        //animation danse 
        Danse_un.animations.add('danse_un', [0, 1,2], 3, true);
        Danse_un_vert.animations.add('danse_un_vert', [0, 1,2], 3, true);
        Danse_trois_vert.animations.add('danse_trois_vert', [0, 1,2], 3, true);
        Danse_deux.animations.add('danse_deux', [0, 1], 3, true);
        Danse_deux_2.animations.add('danse_deux', [0, 1], 3, true);
        Danse_deux_vert.animations.add('danse_deux_vert', [0, 1], 3, true);
        Danse_deux_vert_deux.animations.add('danse_deux_vert', [0, 1], 3, true);
        greek_talking.animations.add('talk', [0, 1], 3, true);

        //dj
        dj = game.add.sprite(796,144,'dj');
        dj_anim = game.add.sprite(890, 95, 'dj_anim');
        dj_anim.animations.add('move', [0, 1], 5, true);
        //eclairage
        eclairage = game.add.sprite(500,0, 'eclairage');
        eclairage.animations.add('eclairage', [0, 1], 3, true);
        
        //AJOUT DE TEXTE
        
        //ENABLE LA PHYSIQUE POUR NOS OBJETS
        game.physics.enable(joueur, Phaser.Physics.ARCADE);
        game.physics.enable(first_door_level1, Phaser.Physics.ARCADE);
        game.physics.enable(first_door_top_level1, Phaser.Physics.ARCADE);
        game.physics.enable(top_mur_level1, Phaser.Physics.ARCADE);
        game.physics.enable(second_door_top, Phaser.Physics.ARCADE);
        game.physics.enable(second_door_bot, Phaser.Physics.ARCADE);
        game.physics.enable(wall_droite, Phaser.Physics.ARCADE);
        game.physics.enable(bottom_wall, Phaser.Physics.ARCADE);
        game.physics.enable(collide_object, Phaser.Physics.ARCADE);
        
        //IMMOVABLE
        joueur.body.fixedRotation = true;
        joueur.body.collideWorldBounds = true;
        first_door_level1.body.immovable = true;
        first_door_top_level1.body.immovable = true;
        top_mur_level1.body.immovable = true;
        second_door_top.body.immovable = true;
        second_door_bot.body.immovable = true;
        wall_droite.body.immovable = true;
        bottom_wall.body.immovable = true;
        collide_object.body.immovable = true;
        
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

        vie_affiche = game.add.text(66,12, vie,{font: '22px Orbitron', fill: '#fff'});
        vie_affiche.fixedToCamera = true;

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
        musique_background = game.add.audio('musique_background');
        musique_background.play();
    }
,    update: function(){
        //ANIMATION
        Danse_un.animations.play('danse_un');
        Danse_un_vert.animations.play('danse_un_vert');
        Danse_deux.animations.play('danse_deux');
        Danse_deux_2.animations.play('danse_deux');
        Danse_deux_vert.animations.play('danse_deux_vert');
        Danse_deux_vert_deux.animations.play('danse_deux_vert');
        Danse_trois_vert.animations.play('danse_trois_vert');
        greek_talking.animations.play('talk');
        
        if(this.timeElapsed >= this.totalTime){
            game.state.start('gameover_level1');
        }
        eclairage.animations.play('eclairage');
        dj_anim.animations.play('move');
        
        game.physics.arcade.collide(joueur, [first_door_level1,first_door_top_level1,top_mur_level1,second_door_top,second_door_bot,wall_droite,bottom_wall,collide_object]);
        
        
        if (this.checkOverlap(joueur, dj) && action.isDown && spaceIsDown === false && musique_background.volume >= 0.1){
            affiche_pourcentage_cent.kill();
            this.changeVolume();
            spaceIsDown = true;
            pourcentage -= 5; 
            musique.text = pourcentage + '%';
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        
        //DANSE 1, COLLISION
        if(this.checkOverlap(joueur, Danse_un) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){ 
            this.talkSprite();
            this.good();
            setTimeout(this.winScreen, 1000);
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE 1 AVEC HABIT VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_un_vert) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE 2
        if(this.checkOverlap(joueur, Danse_deux) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE_deux 2EME, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_2) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE_deux VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_vert) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE_deux 2EME VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_vert_deux) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE 3
        if(this.checkOverlap(joueur, Danse_trois_vert) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && pourcentage === 10){
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //APPEL DE LA VARIABLE DE DÉPLACEMENT
        this.deplacerJoueur();

        if (enter.isDown === true) {
            Boite_dialogue.kill();
            Boite_dialogue = game.add.sprite(0,570,'tooltip_level_2');
            Boite_dialogue.fixedToCamera = true;
            Boite_dialogue.scale.setTo(0.5, 0.5);
            tooltip_count++;
        }
        if (pourcentage == 10) {
            Boite_dialogue.kill();
            greek_talking.kill();
        }
        if (vie == 0) {
            game.state.start('gameover_level1');
        }
        console.log(vie);
    },

    changeVolume: function(){
         musique_background.volume -= 0.05;
        console.log(musique_background.volume.toFixed(2));
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
    
    //RELEASE LES PERSONNES AVEC DES DEPLACEMENTS RANDOM
    releaseMonster: function() {
        var monster = game.add.sprite(Math.random()*900, Math.random()*400, 'monster');
        //monster.animations.add('walk');
        //monster.animations.play('walk', 20, true);
        //monster.scale.setTo(2,2);
        this.game.time.events.loop(2000, function() {
            game.add.tween(monster.body.velocity).to({
                x: game.rnd.integerInRange(-1000, 1000),
                y: game.rnd.integerInRange(-700, 700)
            }, 200000, Phaser.Easing.Linear.None, true);
        },this);
        total++;
        game.physics.enable(monster, Phaser.Physics.ARCADE);

        monstersList.push(monster);
    },

    checkOverlap: function(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
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
            joueur.animations.stop()
        } 
        if (haut.isDown){
            joueur.body.velocity.y = -175;
        }else if (bas.isDown){
            joueur.body.velocity.y = 175;
        }
    },
    talkSprite: function() {
        Danse_un.loadTexture('talk2', 0);

        Danse_un.animations.add('talk');

        Danse_un.animations.play('talk', 30, true);

    },
    good: function(){
        Good = game.add.sprite(990, 320, 'good');
        Good.animations.add('good', [0, 1, 2], 10, true);
        Good.animations.play('good');
    },
    //CHANGE TO WIN SCREEN
    winScreen: function(){
        game.state.start('winLevel1');
    }
}