var winState = function() {
    var backgroundWin = null;
    var reload = null;
}

winState.prototype = {
    create: function(){
        game.sound.stopAll();
        backgroundGameover = game.add.sprite(0,0,'background_win');
        setTimeout(this.reload, 3000);
        reload = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },
    update: function(){
        if(reload.isDown){
            game.state.start('level1');
        }
    }
}