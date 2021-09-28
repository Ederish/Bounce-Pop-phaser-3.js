var config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 800,  height: 600,
  mode: Phaser.Scale.FIT,  

  autoCenter: Phaser.Scale.CENTER_BOTH,
  scene: {preload: preload, create: create, update: update },
  physics: { default:'arcade', arcade: { debug:false}},
};
var game = new Phaser.Game(config);
var cursors;
var player;
var score = 0;
var plataforms;
//---------------- Music Game ------------//
var songs = [
  new Audio("assets/audio/menu-music.mp3"),
  new Audio("assets/audio/level-1.mp3"),
  new Audio("assets/audio/level-2.mp3"),
  new Audio("assets/audio/level-3.mp3"), 
  new Audio("assets/audio/level-4.mp3"),
  new Audio("assets/audio/level-5.mp3"),
  new Audio("assets/audio/level-6.mp3"),
  new Audio("assets/audio/level-7.mp3"),
  new Audio("assets/audio/level-8.mp3"),
  new Audio("assets/audio/level-9.mp3"),
  new Audio("assets/audio/level-10.mp3"),
  new Audio("assets/audio/level-11.mp3"),
  new Audio("assets/audio/level-12.mp3"),
]; 
function preload(){
//----------------------pleyer-------------------//
this.load.image('ball', 'assets/Ball.png');
//----------------------Background-------------------//
this.load.image('background', 'assets/img/lofi-1.jpg');
//----------------------plataforms-------------------//
this.load.image('plataform', 'assets/plataform.png');
//---------------------- Menu Music -------------------//
this.load.audio('menuMusic', 'assets/audio/menu-music.mp3');
}
function create (){
//------------------ menu Music ------------//
menuMusic = this.sound.add('menuMusic',{loop:true}); menuMusic.play();
//-----------------backgraund-------------//
this.add.image(400, 300, 'background').setDisplaySize(800, 600);
//-------------------- Score -------------------------------------//
sound = this.add.text(650, 16, '🎵',{ fontSize:'30px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
sound.on('pointerdown', () => songs[0].pause());

bounce = this.add.text(290, 80, 'Bounce',{ fontSize:'60px', fill:'#e601c0',fontFamily: 'verdana, arial, sans-serif'});
bounce.setStroke('#000', 10);
pop = this.add.text(180, 100, 'pop ',{ fontSize:'15rem', fill:'#07bccc',fontFamily: ' Meta, sans-serif'});
popStroke = this.add.text(180, 100, 'pop ',{ fontSize:'15rem', fill:'transparent',fontFamily: ' "Meta", sans-serif'});
popStroke.setStroke('#e601c0', 8);
pop.setShadow(-10, 20, '#482896', 2, true, true);
//--------------------  Ball phisics -------------------------------------//
player = this.physics.add.sprite(Phaser.Math.Between(0,600), 0, 'ball');
player.setDisplaySize(50,50);
player.setGravityY(14000);
player.body.setCollideWorldBounds(true);
//------------------ Create plataforms --------------//
timedEvent = this.time.addEvent({ delay: 1000, callback: createPlataforms, callbackScope: this, loop: true });
function createPlataforms(){
plataforms = this.physics.add.sprite(Phaser.Math.Between(0,800), 0, 'plataform');
plataforms.body.immovable = true;
plataforms.setDisplaySize(200, 200);
plataforms.setVelocityY(100) 
plataforms.setSize(80,8);
//--------------------- coliders-------------------------//
this.physics.add.collider(player,plataforms);
plataforms.body.checkCollision.up = true;
plataforms.body.checkCollision.down = false;
this.physics.world.setBoundsCollision(true,true,true, false);
}//-------------------create controls----------//
cursors = this.input.keyboard.createCursorKeys();

LeftButton=this.add.text(16, 480, ' ◄ ',{ fontSize:'90px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
RightButton=this.add.text(128, 480, ' ► ',{ fontSize:'90px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
jumpButton=this.add.text(650, 480, ' ⯄ ',{ fontSize:'90px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
FullScreen=this.add.text(100, 400, ' Click To Start Game ',{ fontSize:'60px',fill:'#FFF',fontFamily: 'verdana, arial, sans-serif'})
.setStroke('#000', 10).setInteractive();
LeftButton.on('pointerdown', () => player.setVelocityX(-250));
RightButton.on('pointerdown', () => player.setVelocityX(250));
jumpButton.on('pointerdown', () => player.setVelocityY(-500));
FullScreen.on('pointerdown', () => this.scene.add("SceneA", new SceneA));
}
function update(){
player.setVelocityY(0);
if (cursors.left.isDown){
player.setVelocityX(-250);
}
else if(cursors.right.isDown){
player.setVelocityX(250); 
}
if(cursors.space.isDown){
player.setVelocityY(-350) .setGravityY(0)  
setTimeout(function(){player.setGravityY(14000).setVelocityY(0)}, 400);
}
}
