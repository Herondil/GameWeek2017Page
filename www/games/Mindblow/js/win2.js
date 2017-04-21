var winState2 = {
   create: function() {

      game.background = game.add.sprite( 0, 0, 'you_win');

      var button_retour = game.add.sprite(300, game.world.height-80, 'button_retour');
      button_retour.anchor.set(0.5);

      button_retour.inputEnabled = true;
      button_retour.events.onInputDown.add(this.retour, this);

      var button_replay = game.add.sprite(1600, game.world.height-80, 'button_replay');
      button_replay.anchor.set(0.5);

      button_replay.inputEnabled = true;
      button_replay.events.onInputDown.add(this.restart, this);

      var button_next = game.add.sprite(1000, game.world.height-80, 'button_play');
      button_next.anchor.set(0.5);

      button_next.inputEnabled = true;
      button_next.events.onInputDown.add(this.next, this);
   },

   retour: function() {
      game_music.stop();
      game.state.start('menu');
      menu_music.play();
   },

   restart: function() {
      game_music.stop();
      game.state.start('play');
   },

   next: function() {
      game_music.stop();
      game.state.start('play3');
   },
};