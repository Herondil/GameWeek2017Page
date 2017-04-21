var finState = {
	create: function() {

	  game_music.stop();

      fin = game.add.video('fin');
      fin.play();
      fin.addToWorld();

      fin.onComplete.add(function() {
         game.state.start('credit');
      }, this);
      
      game.input.onTap.add(this.onTap, this);
   },

   onTap: function() {
   		fin.stop();
        game.state.start('credit');
        menu_music.play();
   }
};