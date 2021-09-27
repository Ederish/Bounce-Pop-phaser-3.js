var cursors;
var player;
var score = 0;
var plataforms;
GameOverSong  = new Audio("assets/audio/GameOver.mp3");
class SceneB extends Phaser.Scene { constructor() { super({key: "SceneB", active: true});}
preload(){
//----------------------pleyer-------------------//
this.load.image('ball', 'assets/Ball.png');
//----------------------plataforms-------------------//
this.load.image('plataform','assets/plataform.png');
//----------------------plataforms-------------------//
this.load.image('spike','assets/spike.png');
//---------------------- Coins -------------------//
this.load.image('coin','assets/coin.png');
//---------------------- Coins Sound Efect -------------------//
this.load.audio('soundCoin','assets/audio/coin.wav');
}
create(){
//-------------------- Score -------------------------------------//
function Impact(){}
this.scoreText = this.add.text(16, 16, 'score  '+ score,{ fontSize:'32px', fill:'#fff',fontFamily:'verdana, arial, sans-serif'});
//--------------------  Ball phisics -------------------------------------//
player = this.physics.add.sprite(Phaser.Math.Between(0,600), 0, 'ball');
player.body.setCollideWorldBounds(true);
player.setDisplaySize(50,50);
//------------------ Create plataforms --------------//
timedEvent = this.time.addEvent({ delay: 1000, callback: createPlataforms, callbackScope: this, loop: true });
function createPlataforms(){

plataforms = this.physics.add.sprite(Phaser.Math.Between(0,800), 0, 'plataform');
plataforms.body.immovable = true;
plataforms.setDisplaySize(200, 200);
plataforms.setVelocityY(100) 
plataforms.setSize(80,8);
//--------------------- coliders-------------------------//
this.physics.add.collider(player, plataforms, Impact, null, this);
plataforms.body.checkCollision.down = false;
plataforms.body.checkCollision.left = false;
plataforms.body.checkCollision.right = false;
this.physics.world.setBoundsCollision(true,true,true, false);}
//-------------------create controls----------//
cursors = this.input.keyboard.createCursorKeys();
//-------------------- Touch Button -----------//
LeftButton=this.add.text(16, 480, ' ◄ ',{ fontSize:'85px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
RightButton=this.add.text(128, 480, ' ► ',{ fontSize:'85px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
jumpButton=this.add.text(650, 480, ' ◆ ',{ fontSize:'85px', fill:'#8357eb',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
FullScreen=this.add.text(700, 1, ' ⎚ ',{ fontSize:'64px', fill:'#FFF',fontFamily: 'verdana, arial, sans-serif'}).setInteractive();
//-------------------- Button click event -----------------//
LeftButton.on('pointerdown', () => player.setVelocityX(-250));
RightButton.on('pointerdown', () => player.setVelocityX(250));
//------------------------ Jump function ----------------//
jumpButton.on('pointerdown', () =>  JumpFunction())
//-- Jump Fuction --//
function JumpFunction(){
player.setGravityY(-14000)   
setTimeout(function(){player.setGravityY(14000)}, 1500);
}
FullScreen.on('pointerdown', () => this.scale.startFullscreen());
//----------------- Game Over --------------------------------//
this.gameOverBar = 
this.physics.add.sprite(400, 1200, 'plataform').setSize(190,8)
.setDisplaySize(1100,400);
this.physics.add.collider(this.gameOverBar, player, GameOver, null, this);
//------------------- Game Over Function -------------------------------//
function GameOver(){
//------------ Game Over Text ------------//
this.add.rectangle(400, 300, 800, 600, 0x111);
timedEvent.destroy(), this.timeSpike.destroy()
this.add.text(200, 200, 'Game Over',{fontSize:'60px', fill:'#000', fontFamily: '"Press Start 2P", Arial, sans-serif'}).setShadow(5, 5, '#e601c0', 10, true, true);
//----------------------------------------- Menu Buttom -------------------------------------//
this.add.text(300, 300, '⌂',{ fontSize:'70px',fill:'#07bccc',fontFamily: '"Press Start 2P", Arial, sans-serif'})
.setShadow(5, 5, '#e601c0', 5, true, true).setInteractive()
.on('pointerdown',() => location.reload())
//------------------------------------- Repeat Button -----------------------------//
this.repeatButton = this.add.text(450, 300, '↻',{fontSize:'60px', fill:'#07bccc', fontFamily: '"Press Start 2P", Arial, sans-serif'})
.setShadow(5, 5, '#e601c0', 5, true, true).setInteractive()
.on('pointerdown', () => this.scene.restart())
.on('pointerdown', () => songs[0].currentTime = 0)
.on('pointerdown', () => songs[0].play())
.on('pointerdown', () => GameOverSong.pause())
.on('pointerdown', () => score = 0);
//----------------- Game Over Music ---------//
songs[0].pause();
GameOverSong.currentTime = 0;
GameOverSong.play();}
//----------------- Create Ball Spike -----------//
this.timeSpike= this.time.addEvent({ delay:7500, callback: spikes, callbackScope: this, loop: true });

function spikes() {
this.spike = this.physics.add.sprite(Phaser.Math.Between(0,800), 0, 'spike')
.setVelocityY(100)
.setDisplaySize(50,50);
this.physics.add.collider(this.spike, player, GameOver, null, this);}
//----------------------------- Create coin -------------------------//
this.coin = this.physics.add.image(Phaser.Math.Between(0,800), 100, 'coin').setDisplaySize(40, 40)
    
this.physics.add.collider(this.coin, player, getCoins, null, this);
    
function getCoins(){
this.scoreText.setText('score ' + score++)
this.coin.body.setCollideWorldBounds(true);
this.sound.add('soundCoin').play(); this.coin.setVelocityY(-1)
this.coin.setPosition(Phaser.Math.Between(0,800), Phaser.Math.Between(0,600), 'coin')}}}
