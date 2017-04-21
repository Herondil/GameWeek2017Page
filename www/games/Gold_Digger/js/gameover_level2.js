var level2LoseState = function() {
    var backgroundGameover = null;
    var relancer = null;
}

level2LoseState.prototype = {
    create: function(){
        game.sound.stopAll();
        backgroundGameover = game.add.sprite(0,0,'background_gameover');
        relancer = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },
    update: function(){
        if(relancer.isDown){
            level2State();
            game.state.start('level2');
        }
    }
}