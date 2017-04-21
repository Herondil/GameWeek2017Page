var introState = {
	create: function() {
      intro = game.add.video('intro');
      intro.play();
      intro.addToWorld();

      intro.onComplete.add(function() {
         game.state.start('tuto');
      }, this);

      game.input.onTap.add(this.onTap, this);
   },

   onTap: function() {
   		intro.stop();
        game.state.start('tuto');

   }
};