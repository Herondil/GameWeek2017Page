var winLevel1State = function() {
    var backgroundWin = null;
    var raffraichir = null;
}

winLevel1State.prototype = {
    create: function(){
        game.sound.stopAll();
        backgroundGameover = game.add.sprite(0,0,'background_win');
        setTimeout(this.reload, 3000);
        raffraichir = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },
    update: function(){
        if(raffraichir.isDown){
            game.state.start('level2');
        }
    }
}