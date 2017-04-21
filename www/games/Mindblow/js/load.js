var loadState = {
   preload: function() {

      var loadingText = game.add.text(200, 270, 'loading... 0%', { fill: '#ffffff' });
      var progressDisplay = 0;
      var timerEvt = game.time.events.loop(100, function (){
            if(progressDisplay < 100){
                  if(progressDisplay < game.load.progress){
                        loadingText.text = 'Chargement... '+(++progressDisplay)+'%';
                  }
            }
            else{
                  loadingText.text = 'Ready, Go!';
                  game.time.events.remove(timerEvt);
            }
      }, this);

      game.load.image('background_menu', 'assets/background_menu.png');
      game.load.image('button_exit', 'assets/button_exit.png');
      game.load.image('button_credit', 'assets/button_credit.png');
      game.load.image('button_play', 'assets/button_play.png');
      game.load.image('button_replay', 'assets/button_replay.png');
      game.load.image('button_retour', 'assets/button_retour.png');
      game.load.image('icon_sound', 'assets/icon_sound.png');
      game.load.image('icon_nosound', 'assets/icon_nosound.png');
      game.load.image('icon_stats', 'assets/icon_stats.png');
      game.load.image('you_win', 'assets/you_win.png');
      game.load.image('you_lose', 'assets/you_lose.png');
      game.load.image('tuto', 'assets/regle.png');
      game.load.image('level1_map', 'assets/lvl1.png');
      game.load.image('level2_map', 'assets/lvl2.png');
      game.load.image('level3_map', 'assets/lvl3.png');
      game.load.spritesheet('player', 'assets/glenn_spritesheet.png', 265.63157894736, 200, (19*13));
      game.load.spritesheet('player2', 'assets/glennblue_spritesheet.png', 266, 195, (19*13));
      game.load.spritesheet('player3', 'assets/glennjaune_spritesheet.png', 266, 195, (19*13));
      game.load.audio('calme_music', 'assets/Deadly.mp3');
      game.load.audio('death', 'assets/pshiii.mp3');
      game.load.audio('boing', 'assets/boing.mp3');
      game.load.audio('wouiii', 'assets/wouiii.mp3');
      game.load.audio('debut', 'assets/whoop.mp3');
      game.load.audio('hahaha', 'assets/mhahahaha.mp3');
      game.load.audio('game_music', 'assets/play_game.mp3');
      game.load.video('intro', 'assets/intro.mp4');
      game.load.video('credit', 'assets/credit.mp4');
      game.load.video('fin', 'assets/fin.mp4');
      game.load.video('back', 'assets/back.mp4');
      // game.load.video('back1', 'assets/back1.mp4');
      // game.load.video('back2', 'assets/back2.mp4');
      // game.load.video('back3', 'assets/back3.mp4');

   },

   create: function() {
      //call menu state 
      menu_music = game.add.audio('calme_music',0.5, true);
      menu_music.play();
      game.state.start('menu');
   }
};