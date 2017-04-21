var playState = {

   restart: function() {
      animation_idle.paused = true;
      setTimeout(function(){player.animations.play('idle',30,false);}, 1000);
   },
   create: function() {

      game.background = game.add.sprite(0, 0, 'level1_map');

      // video = game.add.video('back1');

      // video.play(true);
      // //  x, y, anchor x, anchor y, scale x, scale y
      // video.addToWorld();

      //player animations
      player = game.add.sprite(420, 82, 'player');
      //player physics
      game.physics.arcade.enable(player);
      //player idle
      animation_idle = player.animations.add('idle', Phaser.ArrayUtils.numberArray(0, 18));
      //walk
      walk_right = player.animations.add('walk_right', Phaser.ArrayUtils.numberArray(19,23));
      walk_left = player.animations.add('walk_left', Phaser.ArrayUtils.numberArray(38,42));
      walk_top = player.animations.add('walk_top', Phaser.ArrayUtils.numberArray(57,61));
      walk_bottom = player.animations.add('walk_bottom', Phaser.ArrayUtils.numberArray(76,80));

      collide_top = player.animations.add('collision_top', Phaser.ArrayUtils.numberArray(114,124));
      collide_top.onComplete.add(this.Fail, this);

      collide_bottom = player.animations.add('collision_bottom', Phaser.ArrayUtils.numberArray(95,105));
      collide_bottom.onComplete.add(this.Fail, this);

      collide_left = player.animations.add('collision_left', Phaser.ArrayUtils.numberArray(133,143));
      collide_left.onComplete.add(this.Fail, this);

      collide_right = player.animations.add('collision_right', Phaser.ArrayUtils.numberArray(152,162));
      collide_right.onComplete.add(this.Fail, this);

      //audio
      death = game.add.audio('death');
      boing = game.add.audio('boing');
      victoire = game.add.audio('wouiii');
      debut = game.add.audio('debut');
      game_music = game.add.audio('game_music', 0.1);

      debut.play();
      game_music.play();

      player.scale.setTo(0.2, 0.2);
      //animation IDLE, no loop, restart /w function & setTimeout
      player.animations.play('idle',30,false);
      animation_idle.onComplete.add(this.restart, this);

      //finish
      finish = game.add.sprite(game.world.centerX-512, game.world.centerY-280);
      finish.scale.x = 1;
      finish.scale.y = 1;
      game.physics.arcade.enable(finish);
      finish.body.immovable = true;
      finish.body.allowGravity = false;


      //creation groupe de murs
      wallsGroup = game.add.group();
      wallsGroup.enableBody = true;
      
      //creation mur
      wall1 = game.add.sprite(378, game.world.centerY+528);
      wall1.scale.x = 34;
      wall1.scale.y = 0.3;
      wall2 = game.add.sprite(378, game.world.centerY-536);
      wall2.scale.x = 34;
      wall2.scale.y = 0.3;
      wall3 = game.add.sprite(384, game.world.centerY-540);
      wall3.scale.x = 0.3;
      wall3.scale.y = 34;
      wall4 = game.add.sprite(1450, game.world.centerY-540);
      wall4.scale.x = 0.3;
      wall4.scale.y = 34;
      wall5 = game.add.sprite(390, game.world.centerY-356);
      wall5.scale.x = 28;
      wall5.scale.y = 0.3;
      wall6 = game.add.sprite(1090, game.world.centerY-182);
      wall6.scale.x = 11.6;
      wall6.scale.y = 0.3;
      wall7 = game.add.sprite(740, game.world.centerY-354);
      wall7.scale.x = 0.3;
      wall7.scale.y = 22.4;
      wall8 = game.add.sprite(1272, game.world.centerY-6);
      wall8.scale.x = 0.32;
      wall8.scale.y = 11.6;
      wall9 = game.add.sprite(746, game.world.centerY+176);
      wall9.scale.x = 5.5;
      wall9.scale.y = 0.2;
      wall10 = game.add.sprite(558, game.world.centerY+354);
      wall10.scale.x = 5.7;
      wall10.scale.y = 0.26;
      wall11 = game.add.sprite(388, game.world.centerY-184);
      wall11.scale.x = 5.8;
      wall11.scale.y = 6;

      piegeUP = game.add.group();
      piegeUP.enableBody = true;

      piegeDOWN = game.add.group();
      piegeDOWN.enableBody = true;

      piegeLEFT = game.add.group();
      piegeLEFT.enableBody = true;

      piegeRIGHT = game.add.group();
      piegeRIGHT.enableBody = true;


      //creation piege
      piege1 = game.add.sprite(929, game.world.centerY-385);
      piege1.scale.x = 11;
      piege1.scale.y = 0.96;
      piege2 = game.add.sprite(566, game.world.centerY-350);
      piege2.scale.x = 5.5;
      piege2.scale.y = 0.96;
      piege3 = game.add.sprite(395, game.world.centerY+6);
      piege3.scale.x = 5.3;
      piege3.scale.y = 0.96;
      piege4 = game.add.sprite(750, game.world.centerY+181);
      piege4.scale.x = 5.2;
      piege4.scale.y = 0.96;
      piege5 = game.add.sprite(750, game.world.centerY+500);
      piege5.scale.x = 12.5;
      piege5.scale.y = 0.96;
      piege6 = game.add.sprite(710, game.world.centerY-174);
      piege6.scale.x = 2.2;
      piege6.scale.y = 10.8;   
      piege7 = game.add.sprite(1242, game.world.centerY-1);
      piege7.scale.x = 0.96;
      piege7.scale.y = 11;
      piege8 = game.add.sprite(1421, game.world.centerY+180);
      piege8.scale.x = 0.96;
      piege8.scale.y = 5.5;
      
      //ajout du mur 1 dans le groupe des murs
      wallsGroup.add(wall1);
      wallsGroup.add(wall2);
      wallsGroup.add(wall3);
      wallsGroup.add(wall4);
      wallsGroup.add(wall5);
      wallsGroup.add(wall6);
      wallsGroup.add(wall7);
      wallsGroup.add(wall8);
      wallsGroup.add(wall9);
      wallsGroup.add(wall10);
      wallsGroup.add(wall11);

      //ajout des pieges dans le groupe des pieges
      piegeUP.add(piege2);
      piegeUP.add(piege3);
      piegeUP.add(piege4);

      piegeDOWN.add(piege1);
      piegeDOWN.add(piege5);

      piegeRIGHT.add(piege6);
      piegeRIGHT.add(piege7);
      piegeRIGHT.add(piege8);

      piegeUP.setAll('body.immovable', true);
      piegeUP.setAll('body.allowGravity', false);

      piegeDOWN.setAll('body.immovable', true);
      piegeDOWN.setAll('body.allowGravity', false);

      piegeLEFT.setAll('body.immovable', true);
      piegeLEFT.setAll('body.allowGravity', false);

      piegeRIGHT.setAll('body.immovable', true);
      piegeRIGHT.setAll('body.allowGravity', false);
      
      //murs inerte
      game.physics.arcade.enable(wallsGroup);
      wallsGroup.setAll('body.immovable', true);
      wallsGroup.setAll('body.allowGravity', false);

      cursors = game.input.keyboard.createCursorKeys();

   },

   update: function() {
      game.physics.arcade.collide(player, piegeUP, this.collideTop);
      game.physics.arcade.collide(player, piegeDOWN, this.collideBottom);
      game.physics.arcade.collide(player, piegeLEFT, this.collideLeft);
      game.physics.arcade.collide(player, piegeRIGHT, this.collideRight);
      game.physics.arcade.collide(player, wallsGroup, this.rebond);
      game.physics.arcade.overlap(player, finish, this.Win, null, this);
      //game.physics.arcade.overlap(player, piegesGroup, this.Fail, null, this);


      if (cursors.left.isDown)
      {
         player.body.gravity.x = -70;
         player.animations.play('walk_left',5,true);
      } else if (cursors.right.isDown)
      {
         player.body.gravity.x = 70;
         player.animations.play('walk_right',5,true);
      } else if (cursors.up.isDown)
      {
         player.body.gravity.y = -70;
         player.animations.play('walk_top',10,true);
      } else if (cursors.down.isDown)
      {
         player.body.gravity.y = 70;
         player.animations.play('walk_bottom',10,true);
      }
   },

   rebond: function() {    
      boing.play();
      if (player.body.gravity.x > 0) {
            player.body.gravity.x = -70;
      } else if (player.body.gravity.x < 0) {
            player.body.gravity.x = 70;
      }
       if (player.body.gravity.y > 0) {
            player.body.gravity.y = -70;
      } else if (player.body.gravity.y < 0) {
            player.body.gravity.y = 70;
      }
   },

   collideTop: function() {    
      game.input.keyboard.reset(true);
      death.play();
      player.animations.play('collision_top',60,false,true);
   },

   collideBottom: function() {    
      game.input.keyboard.reset(true);
      death.play();
      player.animations.play('collision_bottom',60,false,true);
   },

   collideLeft: function() {    
      game.input.keyboard.reset(true);
      death.play();
      player.animations.play('collision_left',60,false,true);
   },

   collideRight: function() {    
      game.input.keyboard.reset(true);
      death.play();
      player.animations.play('collision_right',60,false,true);
   },

   Fail: function() {
      setTimeout(function(){
            game.state.start('fail');}, 500);
      
   },

   Win: function() {
      victoire.play();
      game.state.start('win');
   },


   render: function() {
      // wallsGroup.forEach(function(item) {
      //       game.debug.body(item, 'rgba(0,250,0,0.7)');  
      // });
      // piegeUP.forEach(function(item) {
      //       game.debug.body(item, 'rgba(250,0,0,0.7)');  
      // });
      // piegeDOWN.forEach(function(item) {
      //       game.debug.body(item, 'rgba(250,0,0,0.7)');  
      // });
      // piegeLEFT.forEach(function(item) {
      //       game.debug.body(item, 'rgba(250,0,0,0.7)');  
      // });
      // piegeRIGHT.forEach(function(item) {
      //       game.debug.body(item, 'rgba(250,0,0,0.7)');  
      // });
      // game.debug.body(finish, 'rgba(0,0,250,0.7)');  
   }


};