var tutoState = {

	create: function() {

		game.background = game.add.sprite( 0, 0, 'tuto');

		var button_next = game.add.sprite(1000, game.world.height-80, 'button_play');
	    button_next.anchor.set(0.5);

	    button_next.inputEnabled = true;
	    button_next.events.onInputDown.add(this.next, this);

 
   },

   next: function() {
      game.state.start('play');
   },

};