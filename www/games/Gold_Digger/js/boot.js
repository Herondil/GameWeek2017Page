var bootState = {
	preload: function(){
        game.load.image('preload', 'assets/preload.png');
        game.load.image('background_menu', 'assets/background_menu.png');
	},
    create: function(){
        this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
    },
    update: function(){
    	game.state.start('load');
    }
}