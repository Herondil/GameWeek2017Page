var loadState = function(game){
    this.ready = false;
};

loadState.prototype = {
    preload: function(){
        this.loadMenu =   this.add.sprite(0,0,'background_menu');
        this.preloadBar = this.add.sprite(640,360,'preload');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        //MENU
        game.load.image('play_button', 'assets/play_button.png');
        game.load.image('play_button_hover', 'assets/play_button_hover.png');
        game.load.image('credit_button', 'assets/credit_button.png');
        game.load.image('credit_button_hover', 'assets/credit_hover_button.png');
        game.load.image('howtoplay_button', 'assets/howtoplay_button.png');
        game.load.image('howtoplay_button_hover', 'assets/howtoplay_hover_button.png');
        game.load.image('crédits', 'assets/crédits.png');
        game.load.image('howtoplay', 'assets/comment-jouer.png');
        game.load.image('croix_fermee', 'assets/croix_fermee.png');
        
        //GAMEOVER
        game.load.image('background_gameover', 'assets/gameover.png');
        
        //WIN
        game.load.image('background_win', 'assets/victoire.png');
        
        
        //TUTO IMAGE ET LEVEL 1
        game.load.image('background', 'assets/background_tuto.png');
        //game.load.image('perso', 'assets/Squelette-Perso.png');
        game.load.spritesheet('marche', 'assets/marche5.png', 34, 96, 6);
        //game.load.spritesheet('danse3', 'assets/danse.png', 34, 96, 3);
        game.load.image('perso_gauche', 'assets/Squelette-Perso-gauche.png');
        game.load.image('bonChoix', 'assets/Squelette-Perso2_gauche.png');
        game.load.image('character3_droite', 'assets/Squelette-Perso2.png');
        game.load.image('mauvaisChoix', 'assets/Squelette-Perso3-gauche.png');
        game.load.image('champagne', 'assets/clé.png');
        game.load.image('Mur-Bleu-Gauche-Droit', 'assets/Mur-Bleu-Gauche-Droit.png');
        game.load.image('Mur-Bleu-Haut', 'assets/Mur-Bleu-Haut.png');
        game.load.image('Mur-Bleu-Droite-Droit', 'assets/Mur-Bleu-Droite-Droit.png');
        game.load.image('Mur-Porte-Haut', 'assets/Mur-Porte-Haut.png');
        game.load.image('Mur-Porte-Bas', 'assets/Mur-Porte-Bas.png');
        game.load.image('Mur-Bleu-Bas', 'assets/Mur-Bleu-Bas.png');
        game.load.image('Mur-Violet-Bas', 'assets/Mur-Violet-Bas.png');
        game.load.image('Mur-Cache-Bas', 'assets/Mur-Cache-Bas.png');
        game.load.image('tapis','assets/tapis_léopard.png');
        game.load.image('statue','assets/statue.png');
        game.load.image('plante','assets/plante.png');
        game.load.image('bureau','assets/bureau.png');
        game.load.image('bureau_collision','assets/bureau_collision.png');
        game.load.image('café','assets/café.png');
        game.load.image('café_collision','assets/café_collision.png');
        game.load.image('table_ronde','assets/table_ronde.png');
        game.load.image('bureau&chaise','assets/bureau&chaise.png');
        game.load.image('bureau_droite','assets/bureau_droite.png');
        game.load.image('bureau_droite_collision','assets/bureau_droite_collision.png');
        game.load.image('bureau_droite_deux','assets/bureau_droite_deux.png');
        game.load.image('bureau_droite_deux_collision','assets/bureau_droite_deux_collision.png');
        game.load.image('bureau_droite_trois','assets/Bureau_droite_trois.png');
        game.load.image('bureau_droite_trois_collision','assets/bureau_droite_trois_collision.png');
        game.load.image('porte_fermee','assets/porte_fermee.png');
        game.load.image('porte_ouverte_1','assets/porte_ouverte_1.png');
        game.load.image('porte_ouverte_2','assets/porte_ouverte_2.png');
        game.load.image('porte_overlap','assets/porte_overlap.png');
        game.load.spritesheet('Boisson', 'assets/Boisson.png', 38, 96, 2);
        game.load.spritesheet('Danse1', 'assets/Danse_un.png', 34, 96, 3);
        game.load.spritesheet('Danse1_vert', 'assets/Danse_un_vert.png', 34, 96, 3);
        game.load.spritesheet('Danse3_vert', 'assets/Danse_trois_vert.png', 34, 96, 2);
        game.load.spritesheet('Danse2', 'assets/Danse_deux_bleu.png', 36, 96, 3);
        game.load.spritesheet('Danse2_vert', 'assets/Danse_deux_vert.png', 36, 96, 3);
        game.load.spritesheet('tooltip_1', 'assets/tooltip_1.png');
        game.load.spritesheet('tooltip_2', 'assets/tooltip_2.png');
        game.load.spritesheet('tooltip_3', 'assets/tooltip_3.png');
        game.load.spritesheet('tooltip_4', 'assets/tooltip_4.png');
        game.load.spritesheet('pnj', 'assets/character_random.png', 39, 40);
        game.load.spritesheet('talk', 'assets/talk.png', 34, 96, 5);
        game.load.spritesheet('talk2', 'assets/talk2.png', 34, 96, 5);
        game.load.spritesheet('nope', 'assets/Nope.png', 15, 51, 3);
        game.load.spritesheet('good', 'assets/good.png', 20, 34, 3);
        game.load.spritesheet('greek_talking', 'assets/greek_talking.png', 299, 300, 2);
        game.load.image('interface', 'assets/interface.png');
        
        //LEVEL 1 UNIQUEMENT
        game.load.image('background_level1', 'assets/background_level1.png');
        game.load.spritesheet('eclairage', 'assets/éclairage_2.png', 900, 734, 2);
        game.load.image('first_door_level1', 'assets/first_door_level1.png');
        game.load.image('first_door_top_level1', 'assets/first_door_top_level1.png');
        game.load.image('top_mur_level1', 'assets/top_mur_level1.png');
        game.load.image('second_door_top', 'assets/second_door_top.png');
        game.load.image('second_door_bot', 'assets/second_door_bot.png');
        game.load.image('wall_droite', 'assets/wall_droite.png');
        game.load.image('bottom_wall', 'assets/bottom_wall.png');
        game.load.image('bottom_wall_top', 'assets/bottom_wall_top.png');
        game.load.image('bottom_wall_all', 'assets/bottom_wall_all.png');
        game.load.image('collide_object', 'assets/collide_object.png');
        game.load.image('dj', 'assets/dj.png');
        game.load.image('top_object', 'assets/top_object.png');
        game.load.image('lumiere_gauche', 'assets/lumiere_gauche.png');
        game.load.image('lumiere_droite', 'assets/lumiere_droite.png');
        game.load.spritesheet('dj_anim', 'assets/dj_anim.png', 36, 96, 3);
        game.load.image('affiche_pourcentage', 'assets/affiche_pourcentage.png');
        game.load.image('affiche_pourcentage_100', 'assets/affiche_pourcentage_100.png');
        game.load.image('tooltip_level_1', 'assets/tooltip_level1_1.png');
        game.load.image('tooltip_level_2', 'assets/tooltip_level1_2.png');

        //LEVEL 2
        game.load.image('background_level2', 'assets/background_level2.png');
        game.load.image('niveau_3_noir', 'assets/niveau_3_noir.png');
        game.load.image('grillage_gauche', 'assets/grillage_gauche.png');
        game.load.image('grillage_droite', 'assets/grillage_droite.png');
        game.load.image('batiment', 'assets/batiment.png');
        game.load.image('first_door_level2', 'assets/first_door_level2.png');
        game.load.image('first_door_top_level2', 'assets/first_door_top_level2.png');
        game.load.image('bottom_wall_level2', 'assets/bottom_wall_level2.png');
        game.load.image('bottom_wall_level2_collision', 'assets/bottom_wall_level2_collision.png');
        game.load.image('bottom_wall_level2_nocollision', 'assets/bottom_wall_level2_nocollision.png');
        game.load.image('top_mur_level2', 'assets/top_mur_level2.png');
        game.load.image('mur_droite_level2', 'assets/mur_droite_level2.png');
        game.load.image('top_object2', 'assets/top_object_2.png');
        game.load.image('lumiere_level2', 'assets/lumiere_level2.png');
        game.load.image('bouton', 'assets/bouton.png');
        game.load.image('bouton_enfonce', 'assets/bouton_enfonce.png');
        game.load.image('tooltip_level_2_1', 'assets/tooltip_level2_1.png');
        game.load.image('tooltip_level_2_2', 'assets/tooltip_level2_2.png');
        game.load.spritesheet('femme_parle', 'assets/femme_parle.png', 36, 96, 5);
        game.load.spritesheet('eclairage_level2', 'assets/éclairage_level2.png', 900, 734, 2);
        
        //LOAD SOUND
        game.load.audio('interaction', 'sounds/interaction.wav');
        game.load.audio('menu', 'sounds/enjoy.wav');
        game.load.audio('tuto', 'sounds/highandlow.wav');
        game.load.audio('level2', 'sounds/lookaround.wav');
        game.load.audio('musique_background', 'sounds/enjoy_1.wav');
        game.load.audio('wrong', 'sounds/wrong.mp3');
        game.load.audio('court_circuit', 'sounds/court_circuit.mp3');
        this.load.onLoadComplete.add(this.loadComplete, this);
    },
    loadComplete: function(){
       this.ready = true;
    },
    update: function(){
        if(this.ready === true) 
        {
            this.state.start('menu');    
        } 
    }
}