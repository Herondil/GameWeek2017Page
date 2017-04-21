var playState3 = {

   restart: function() {
      animation_idle.paused = true;
      setTimeout(function(){player.animations.play('idle',30,false);}, 1000);
   },
   create: function() {

      game.background = game.add.sprite(0, 0, 'level3_map');

      // video = game.add.video('back3');

      // video.play(true);
      // //  x, y, anchor x, anchor y, scale x, scale y
      // video.addToWorld();

      //player animations
      player = game.add.sprite(530, 110, 'player3');
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
      finish = game.add.sprite(game.world.centerX+257, game.world.centerY-427);
      finish.scale.x = 1;
      finish.scale.y = 1;
      game.physics.arcade.enable(finish);
      finish.body.immovable = true;
      finish.body.allowGravity = false;


      //creation groupe de murs
      wallsGroup = game.add.group();
      wallsGroup.enableBody = true;
      
      //creation mur
      wall1 = game.add.sprite(484, game.world.centerY+502);
      wall1.scale.x = 31.4;
      wall1.scale.y = 0.3;
      wall2 = game.add.sprite(484, game.world.centerY-496);
      wall2.scale.x = 31.4;
      wall2.scale.y = 0.3;
      wall3 = game.add.sprite(485, game.world.centerY-495);
      wall3.scale.x = 0.3;
      wall3.scale.y = 31.4;
      wall4 = game.add.sprite(1486, game.world.centerY-495);
      wall4.scale.x = 0.3;
      wall4.scale.y = 31.4;
      wall5 = game.add.sprite(488, game.world.centerY-330);
      wall5.scale.x = 5.5;
      wall5.scale.y = 0.3;
      wall6 = game.add.sprite(1318, game.world.centerY+335);
      wall6.scale.x = 5.4;
      wall6.scale.y = 0.3;
      wall7 = game.add.sprite(986, game.world.centerY-495);
      wall7.scale.x = 0.3;
      wall7.scale.y = 26.2;
      wall8 = game.add.sprite(986, game.world.centerY+337);
      wall8.scale.x = 5.5;
      wall8.scale.y = 0.3;
      wall9 = game.add.sprite(1154, game.world.centerY+6);
      wall9.scale.x = 5.3;
      wall9.scale.y = 5.3;
      wall10 = game.add.sprite(1154, game.world.centerY-327);
      wall10.scale.x = 5.3;
      wall10.scale.y = 5.3;
      wall11 = game.add.sprite(654, game.world.centerY-160);
      wall11.scale.x = 5.4;
      wall11.scale.y = 5.4;
      wall12 = game.add.sprite(654, game.world.centerY+170);
      wall12.scale.x = 5.4;
      wall12.scale.y = 5.4;

      piegeUP = game.add.group();
      piegeUP.enableBody = true;

      piegeDOWN = game.add.group();
      piegeDOWN.enableBody = true;

      piegeLEFT = game.add.group();
      piegeLEFT.enableBody = true;

      piegeRIGHT = game.add.group();
      piegeRIGHT.enableBody = true;


      //creation piege
      piege1 = game.add.sprite(955, game.world.centerY-486);
      piege1.scale.x = 0.96;
      piege1.scale.y = 5;
      piege2 = game.add.sprite(660, game.world.centerY-190);
      piege2.scale.x = 5;
      piege2.scale.y = 0.96;
      piege3 = game.add.sprite(494, game.world.centerY-150);
      piege3.scale.x = 0.96;
      piege3.scale.y = 5;
      piege4 = game.add.sprite(660, game.world.centerY+144);
      piege4.scale.x = 5;
      piege4.scale.y = 0.9;
      piege5 = game.add.sprite(660, game.world.centerY+340);
      piege5.scale.x = 5;
      piege5.scale.y = 0.96;
      piege6 = game.add.sprite(494, game.world.centerY+184);
      piege6.scale.x = 0.96;
      piege6.scale.y = 5;   
      piege7 = game.add.sprite(624, game.world.centerY+180);
      piege7.scale.x = 0.96;
      piege7.scale.y = 5;
      piege8 = game.add.sprite(837, game.world.centerY+473);
      piege8.scale.x = 10.2;
      piege8.scale.y = 0.96;
      piege9 = game.add.sprite(958, game.world.centerY-150);
      piege9.scale.x = 0.96;
      piege9.scale.y = 4.9;
      piege10 = game.add.sprite(957, game.world.centerY+172);
      piege10.scale.x = 0.96;
      piege10.scale.y = 5;
      piege11 = game.add.sprite(828, game.world.centerY-150);
      piege11.scale.x = 0.96;
      piege11.scale.y = 5;
      piege12 = game.add.sprite(995, game.world.centerY-486);
      piege12.scale.x = 0.96;
      piege12.scale.y = 10;
      piege13 = game.add.sprite(1456, game.world.centerY-484);
      piege13.scale.x = 0.96;
      piege13.scale.y = 15;
      piege14 = game.add.sprite(1326, game.world.centerY-320);
      piege14.scale.x = 0.96;
      piege14.scale.y = 5;
      piege15 = game.add.sprite(1126, game.world.centerY-322);
      piege15.scale.x = 0.96;
      piege15.scale.y = 5;
      piege16 = game.add.sprite(1324, game.world.centerY+306);
      piege16.scale.x = 5;
      piege16.scale.y = 0.96;
      piege17 = game.add.sprite(1124, game.world.centerY+10);
      piege17.scale.x = 0.96;
      piege17.scale.y = 5;   
      piege18 = game.add.sprite(1326, game.world.centerY+10);
      piege18.scale.x = 0.96;
      piege18.scale.y = 5;
      piege19 = game.add.sprite(1454, game.world.centerY+344);
      piege19.scale.x = 0.96;
      piege19.scale.y = 5;
      piege20 = game.add.sprite(995, game.world.centerY+10);
      piege20.scale.x = 0.96;
      piege20.scale.y = 10.2;
      piege21 = game.add.sprite(1160, game.world.centerY-26);
      piege21.scale.x = 5;
      piege21.scale.y = 0.96;
      piege22 = game.add.sprite(1160, game.world.centerY+174);
      piege22.scale.x = 5;
      piege22.scale.y = 0.96;
      
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
      wallsGroup.add(wall12);

      //ajout des pieges dans le groupe des pieges
      piegeRIGHT.add(piege1);
      piegeDOWN.add(piege2);
      piegeLEFT.add(piege3);
      piegeDOWN.add(piege4);
      piegeUP.add(piege5);
      piegeLEFT.add(piege6);
      piegeRIGHT.add(piege7);
      piegeDOWN.add(piege8);
      piegeRIGHT.add(piege9);
      piegeRIGHT.add(piege10);
      piegeLEFT.add(piege11);
      piegeLEFT.add(piege12);
      piegeRIGHT.add(piege13);
      piegeLEFT.add(piege14);
      piegeRIGHT.add(piege15);
      piegeDOWN.add(piege16);
      piegeRIGHT.add(piege17);
      piegeLEFT.add(piege18);
      piegeRIGHT.add(piege19);
      piegeLEFT.add(piege20);
      piegeDOWN.add(piege21);
      piegeUP.add(piege22);
      

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
            game.state.start('fail3');}, 500);
      
   },

   Win: function() {
      victoire.play();
      game.state.start('fin');
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