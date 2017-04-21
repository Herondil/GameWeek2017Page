var creditState = {
	create: function() {
      credit = game.add.video('credit');
      mha = game.add.audio('hahaha');
      mha.play();
      credit.play();
      credit.addToWorld();
      
      game.input.onTap.add(this.onTap, this);
   },

   onTap: function() {
         game.state.start('menu');

   }

};