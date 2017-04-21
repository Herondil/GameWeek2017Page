var tutoLoseState = function() {
    var backgroundGameover = null;
    var relancer = null;
}

tutoLoseState.prototype = {
    create: function(){
        game.sound.stopAll();
        backgroundGameover = game.add.sprite(0,0,'background_gameover');
        setTimeout(this.reload, 3000);
        relancer = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },
    update: function(){
        if(relancer.isDown){
            playState();
            game.state.start('play');
        }
    }
}