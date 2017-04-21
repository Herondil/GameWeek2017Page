var level2State = function() {
    joueur = null;
    grillage_droite = null;
    grillage_gauche = null;
    batiment = null;
    first_door_top_level2 = null;
    first_door_level2 = null;
    bottom_wall_level2 = null;
    bottom_wall_level2_collision = null;
    bottom_wall_level2_nocollision = null;
    top_mur_level2 = null;
    mur_droite_level2 = null;
    top_object = null;
    lumiere_level2 = null;
    bouton = null;
    affiche_pourcentage_cent = null;
    bouton_press = false;
    Boite_dialogue = null;
    greek_talking = null;
    background = null;
    musique_background = null;
    vie = 3;
}

level2State.prototype = {
    create: function(){
        //BACKGROUND
        background = game.add.tileSprite(0, 0, 1630, 734, 'niveau_3_noir');
        background = game.world.setBounds(0, 0, 1630, 734);


        //sprite danse
        Danse_un = game.add.sprite(1190, 400, 'Danse1');
        Danse_un_vert = game.add.sprite(950, 380, 'Danse1_vert');
        Danse_deux = game.add.sprite(1120, 400, 'Danse2');
        Danse_deux_2 = game.add.sprite(1140, 510, 'Danse2');
        Danse_deux_vert = game.add.sprite(1000, 370, 'Danse2_vert');
        Danse_deux_vert_deux = game.add.sprite(900, 480, 'Danse2_vert');
        Danse_un_deux = game.add.sprite(990, 550, 'Danse1');

        //lumiere_level2 = game.add.sprite(0,0,'lumiere_level2');
        bouton = game.add.sprite(543,200,'bouton');
        affiche_pourcentage_cent = game.add.sprite(1028, 315, 'affiche_pourcentage_100');

        //joueur 
        joueur = game.add.sprite(350, 650, 'marche');
        joueur.animations.add('right', [0, 1, 2], 7, true);
        joueur.animations.add('left', [3, 4, 5], 7, true);

        //Collision
        grillage_gauche = game.add.sprite(0,420,'grillage_gauche');
        grillage_droite = game.add.sprite(390,420,'grillage_droite');
        batiment = game.add.sprite(127,520,'batiment');
        first_door_top_level2 = game.add.sprite(717,150,'first_door_top_level2');
        first_door_level2 = game.add.sprite(717,427,'first_door_level2');
        bottom_wall_level2 = game.add.sprite(717,610,'bottom_wall_level2');
        bottom_wall_level2_collision = game.add.sprite(717,670,'bottom_wall_level2_collision');
        bottom_wall_level2_nocollision = game.add.sprite(717,630,'bottom_wall_level2_collision');
        top_mur_level2 = game.add.sprite(717,110,'top_mur_level2');
        mur_droite_level2 = game.add.sprite(1490,140,'mur_droite_level2');
        top_object = game.add.sprite(960,245,'top_object2');
        dj = game.add.sprite(960,267,'dj');
        dj_anim = game.add.sprite(1055, 217, 'dj_anim');
        dj_anim.animations.add('move', [0, 1], 5, true);
                //eclairage
        eclairage = game.add.sprite(620,100, 'eclairage_level2');
        eclairage.animations.add('eclairage', [0, 1], 3, true);
        
        //tooltip
        Boite_dialogue = game.add.sprite(800,0, 'tooltip_level_2_1');
        Boite_dialogue.fixedToCamera = true;
        Boite_dialogue.scale.setTo(0.5, 0.5);
        greek_talking = game.add.sprite(780,0, 'greek_talking');
        greek_talking.fixedToCamera = true;
        greek_talking.scale.setTo(0.5,0.5);
        
        //animation danse 
        Danse_un.animations.add('danse_un', [0, 1,2], 3, true);
        Danse_un_vert.animations.add('danse_un_vert', [0, 1,2], 3, true);
        Danse_un_deux.animations.add('Danse_un_deux', [0, 1,2], 3, true);
        Danse_deux.animations.add('danse_deux', [0, 1], 3, true);
        Danse_deux_2.animations.add('danse_deux', [0, 1], 3, true);
        Danse_deux_vert.animations.add('danse_deux_vert', [0, 1], 3, true);
        Danse_deux_vert_deux.animations.add('danse_deux_vert', [0, 1], 3, true);
        greek_talking.animations.add('talk', [0, 1], 3, true);

        //ENABLE LA PHYSIQUE POUR NOS OBJETS
        game.physics.enable(joueur, Phaser.Physics.ARCADE);
        game.physics.enable(grillage_gauche, Phaser.Physics.ARCADE);
        game.physics.enable(grillage_droite, Phaser.Physics.ARCADE);
        game.physics.enable(batiment, Phaser.Physics.ARCADE);
        game.physics.enable(first_door_top_level2, Phaser.Physics.ARCADE);
        game.physics.enable(first_door_level2, Phaser.Physics.ARCADE);
        game.physics.enable(bottom_wall_level2_collision, Phaser.Physics.ARCADE);
        game.physics.enable(top_mur_level2, Phaser.Physics.ARCADE);
        game.physics.enable(mur_droite_level2, Phaser.Physics.ARCADE);
        game.physics.enable(dj, Phaser.Physics.ARCADE);

        //IMMOVABLE
        joueur.body.fixedRotation = true;
        joueur.body.collideWorldBounds = true;
        grillage_gauche.body.immovable = true;
        grillage_droite.body.immovable = true;
        batiment.body.immovable = true;
        first_door_top_level2.body.immovable = true;
        first_door_level2.body.immovable = true;
        bottom_wall_level2_collision.body.immovable = true;
        top_mur_level2.body.immovable = true;
        mur_droite_level2.body.immovable = true;
        dj.body.immovable = true;

        //KEYBOARD ACTION
        haut = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        droite = game.input.keyboard.addKey(Phaser.Keyboard.D);
        gauche = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        bas = game.input.keyboard.addKey(Phaser.Keyboard.S);
        action = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        //CAMERA SUR LE PLAYER
        game.camera.follow(joueur);
        //dj

        //INTERFACE
        interface = game.add.sprite(0,0, 'interface');
        interface.fixedToCamera = true;
        interface.scale.setTo(0.2,0.2);
        vie_affiche = game.add.text(66,12, vie,{font: '22px Orbitron', fill: '#fff'});
        vie_affiche.fixedToCamera = true;

        //TIMER
        var me = this;
        me.startTime = new Date();
        me.totalTime = 160;
        me.timeElapsed = 0;

        me.createTimer();

        me.gameTimer = game.time.events.loop(100, function(){
            me.updateTimer();
        });
        
        //musique
        musique_background = game.add.audio('level2');
        musique_background.play();
        musique_background.volume = 0.5;
    },
    update: function(){
         //ANIMATION
        Danse_un.animations.play('danse_un');
        Danse_un_vert.animations.play('danse_un_vert');
        Danse_deux.animations.play('danse_deux');
        Danse_deux_2.animations.play('danse_deux');
        Danse_deux_vert.animations.play('danse_deux_vert');
        Danse_deux_vert_deux.animations.play('danse_deux_vert');
        Danse_un_deux.animations.play('Danse_un_deux');
        dj_anim.animations.play('move');
        greek_talking.animations.play('talk');
        eclairage.animations.play('eclairage');
        if(this.timeElapsed >= this.totalTime){
            game.state.start('gameover_level2');
        }
        game.physics.arcade.collide(joueur, [grillage_gauche,batiment,grillage_droite,first_door_top_level2,first_door_level2,bottom_wall_level2_collision,top_mur_level2,mur_droite_level2,dj]);

        if (enter.isDown === true) {
            Boite_dialogue.kill();
            Boite_dialogue = game.add.sprite(800,0,'tooltip_level_2_2');
            Boite_dialogue.fixedToCamera = true;
            Boite_dialogue.scale.setTo(0.5, 0.5);
        }
        
        if (bouton_press == true) {
            Boite_dialogue.kill();
            greek_talking.kill();
            eclairage.kill();
        }
        
        if (this.checkOverlap(joueur,bouton) && action.isDown === true) {
            interaction = game.add.audio('court_circuit');
            interaction.play();
            bouton.loadTexture('bouton_enfonce', 0);
            bouton_press = true;
        }
        //DANSE 1, COLLISION
        if(this.checkOverlap(joueur, Danse_un) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE 1 AVEC HABIT VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_un_vert) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){
         this.talkSprite();
            this.good();
            setTimeout(this.winScreen, 2000);
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE 2
        if(this.checkOverlap(joueur, Danse_deux) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE_deux 2EME, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_2) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE_deux VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_vert) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }

        //DANSE_deux 2EME VERT, COLLISION
        if(this.checkOverlap(joueur, Danse_deux_vert_deux) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){ 
            wrong = game.add.audio('wrong');
            wrong.play();
            vie--;
            vie_affiche.text = vie;
            spaceIsDown = true;
        }else if(action.isDown === false){
            spaceIsDown = false;
        }
        //DANSE 3
        if(this.checkOverlap(joueur, Danse_un_deux) && action.isDown === true && spaceIsDown ===  false && vie >= 1 && bouton_press === true){
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
        if(vie === 0){
            game.state.start('gameover_level2');
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

    good: function(){
        Good = game.add.sprite(945, 380, 'good');
        Good.animations.add('good', [0, 1, 2], 10, true);
        Good.animations.play('good');
    },
    talkSprite: function() {
        Danse_un_vert.loadTexture('femme_parle', 0);

        Danse_un_vert.animations.add('talk');

        Danse_un_vert.animations.play('talk', 30, true);

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
        winScreen: function(){
        game.state.start('winLevel2');
    }

}