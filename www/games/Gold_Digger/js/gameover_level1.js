var level1LoseState = function() {
    var backgroundGameover = null;
    var relancer = null;
}

level1LoseState.prototype = {
    create: function(){
        game.sound.stopAll();
        backgroundGameover = game.add.sprite(0,0,'background_gameover');
        relancer = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },
    update: function(){
        if(relancer.isDown){
            level1State();
            game.state.start('level1');
        }
    }
}