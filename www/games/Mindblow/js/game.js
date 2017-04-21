var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'game');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('credit', creditState);
game.state.add('tuto', tutoState);
game.state.add('intro', introState);
game.state.add('play', playState);
game.state.add('play2', playState2);
game.state.add('play3', playState3);
game.state.add('win', winState);
game.state.add('win2', winState2);
game.state.add('fail', failState);
game.state.add('fail2', failState2);
game.state.add('fail3', failState3);
game.state.add('fin', finState);

game.state.start('boot');