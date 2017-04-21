var failState2 = {
   create: function() {

      game.background = game.add.sprite( 0, 0, 'you_lose');

      var button_retour = game.add.sprite(300, game.world.height-80, 'button_retour');
      button_retour.anchor.set(0.5);

      button_retour.inputEnabled = true;
      button_retour.events.onInputDown.add(this.retour, this);

      var button_replay = game.add.sprite(1600, game.world.height-80, 'button_replay');
      button_replay.anchor.set(0.5);

      button_replay.inputEnabled = true;
      button_replay.events.onInputDown.add(this.restart, this);
   },

   retour: function() {
      game_music.stop();
      game.state.start('menu');
      menu_music.play();
   },

   restart: function() {
      game_music.stop();
      game.state.start('play2');
   },
};